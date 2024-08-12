export default class Cliente{
    
    
    constructor(nombre){
        this._nombre = nombre;
        this._impuestos = {}; /* podria varia null o dejar en blanco */
    }

    get nombre() {
        return this._nombre;
    }
    
    set nombre(nombre) {
        this._nombre = nombre;
    }

    get impuestos() {
        return this._impuestos;
    }
    
    set impuestos(impuestos) {
        this._impuestos = impuestos;
    }


    calcularImpuesto(){
        console.log((this._impuestos.montoBrutoAnual - this._impuestos.deducciones) * 0.21);
    }
}    
    
