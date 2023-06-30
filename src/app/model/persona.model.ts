export class persona{
    id?: number;
    nombre: string;
    apellido: string;
    descripcion: string;
    img: string;

    constructor(nombre: string,apellido: string, descricion: string, img: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion=descricion;
        this.img = img;
    }
}