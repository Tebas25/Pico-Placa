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

    private getLastDigit() {
        const lastdigit = this.placa.slice(-1);
        const lastdigitConverted = parseInt(lastdigit);
        return lastdigitConverted
    }

    private isTimeRestriction() {
        const time: string[] = this.time.split(":");
        const hour = parseInt(time[0] || "null");
        const minutes = parseInt(time[1] || "null");
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
        
        const restristedTime = [360, 570, 960, 1230];

        const checkDigits= diccionario.get(day || "")
        if(checkDigits == undefined){
            console.log("El dia seleccionado es fin de semana. Sin restricción")
        }else {
            if (lastDigit == checkDigits[0] || lastDigit == checkDigits[1]){
                for(let i=0 ; i<restristedTime.length; i+=2) {
                    if(this.isTimeRestriction() >= restristedTime[i]! && this.isTimeRestriction() <= restristedTime[i+1]!){
                        console.log("El vehiculo tiene pico y placa en la hora dada. Prohibido circular");
                    }else{
                        console.log("El vehiculo tiene pico y placa pero no tiene restricción de circulación por la hora ingresada")
                    }
                }
            }else{
                console.log("El vehiculo no tiene pico y placa en ese día")
            }
        }


    }
}