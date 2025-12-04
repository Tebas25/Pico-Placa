import { Input } from "./input";
import { Vehiculo } from "./vehiculo";

async function main() {
    try {
        const plate = await Input.readVariables("Ingrese la placa (Ej: PBX-1234): ");
        const date = await Input.readVariables("Ingrese la fecha (YYYY-MM-DD): ");
        const time = await Input.readVariables("Ingrese la hora (HH:mm): ");

        const vehiculo = new Vehiculo(plate, date, time);
        const puedeCircular = vehiculo.getPicoyPlaca();

        console.log("\n----------------RESULTADO----------------");
        if (puedeCircular) {
            console.log(`El vehículo con placa ${plate} PUEDE circular.`);
        } else {
            console.log(`El vehículo con placa ${plate} TIENE RESTRICCIÓN en este horario.`);
        }
        console.log("-----------------------------------------");

    } catch (error) {
        console.error("Hubo un error:", error);
    } finally {
        Input.close();
    }

}
main()