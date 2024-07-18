export default class Cl_tienda{
    constructor(){
        this.contArticulo = 0;
        this.acumPrecio = 0;
        this.contArtMay65 = 0;
    }

    procesarArticulo(a){
        this.contArticulo++;
        this.acumPrecio += a.precio;
        if (a.precio > 65)
            this.contArtMay65++;
    }

    calcPromedioPrecio(){
        if (this.contArticulo > 0)
            return this.acumPrecio / this.contArticulo;
        else
            return 0;
    }

    devolverArtMay65(){
        return this.contArtMay65;
    }
}