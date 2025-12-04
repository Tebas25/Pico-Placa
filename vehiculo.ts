export class Vehiculo {
    placa: string;
    date: string;
    time: string;

    constructor(placa: string, date: string, time: string){
        this.placa = placa;
        this.date = date;
        this.time = time;
    }

    private getNameDay() {
        const dayNames = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
        const tranformDate = new Date(this.date + "T00:00:00")
        const dayName = tranformDate.getDay();
        return dayNames[dayName]
    }

    private isHoliday() {
        const holidays2025: string[] = [
            "2025-01-01", // Año Nuevo (Miércoles)
            "2025-03-03", // Carnaval (Lunes)
            "2025-03-04", // Carnaval (Martes)
            "2025-04-18", // Viernes Santo (Viernes)
            "2025-05-02", // Día del Trabajo (Trasladado del Jueves 1)
            "2025-05-23", // Batalla de Pichincha (Trasladado del Sábado 24)
            "2025-08-11", // Primer Grito de Independencia (Trasladado del Domingo 10)
            "2025-10-10", // Independencia de Guayaquil (Trasladado del Jueves 9)
            "2025-11-03", // Independencia de Cuenca (Lunes)
            "2025-11-04", // Día de los Difuntos (Trasladado del Domingo 2)
            "2025-12-05", // Fiestas de Quito (Trasladado del Sábado 6 - Solo aplica en Quito)
            "2025-12-25"  // Navidad (Jueves)
        ];
        return holidays2025.includes(this.date)
    }

    private getLastDigit() {
        const lastdigit = this.placa.slice(-1);
        const lastdigitConverted = parseInt(lastdigit);
        return lastdigitConverted
    }

    private isTimeRestriction() {
        const time: string[] = this.time.split(":");
        const hour = parseInt(time[0] || "0");
        const minutes = parseInt(time[1] || "0");
        const registerTime: number = (hour * 60) + minutes;
        return registerTime;
    }

    public getPicoyPlaca() {
        const day = this.getNameDay()
        const lastDigit = this.getLastDigit()
        const diccionario = new Map<string, [number, number]>();
        diccionario.set("Lunes", [1,2])
        diccionario.set("Martes", [3,4])
        diccionario.set("Miercoles", [5,6])
        diccionario.set("Jueves", [7,8])
        diccionario.set("Viernes", [9,0])
        
        const restristedTime = [420, 570, 960, 1170]; //7:00, 9:30, 16:00, 19:30

        if(this.isHoliday() == true) {
            return true
        }else {
            const checkDigits= diccionario.get(day || "")
            if(checkDigits == undefined){
                return true
            }else {
                let count = 0;
                if (lastDigit == checkDigits[0] || lastDigit == checkDigits[1]){
                    for(let i=0 ; i<restristedTime.length; i+=2) {
                        if(this.isTimeRestriction() >= restristedTime[i]! && this.isTimeRestriction() <= restristedTime[i+1]!){
                            count ++
                        }
                    }
                    if(count > 0){
                        return false
                    }else{ 
                        return true
                    }
                }else{
                    return true
                }
            }
        }

    }
}