import { Input } from "./input";
import { Vehiculo } from "./vehiculo";

async function main() {
    const plate = await Input.readVariables("Ingrese el número de placa: ")
    const date = await Input.readVariables("Ingrese la fecha (YYYY:MM:DD): ")
    const time = await Input.readVariables("Ingrese el tiempo en formato 24 horas (HH:mm): ")

    const vehiculo = new Vehiculo(plate, date, time);

    vehiculo.getPicoyPlaca();

}
main()