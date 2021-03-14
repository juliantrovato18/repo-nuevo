class Departamento{
    nombre:string
    constructor(nombre){
        this.nombre = nombre
    }
    getName(){
        return this.nombre;

    }
}

class Piso {
    nombre:string
    dptos:Departamento[]
    constructor(nombre){
        this.nombre = nombre
    }
    pushDepartamento(depto:Departamento){
       return this.dptos.push(depto);

    }
    getDepartamento(dpto:Departamento[]){
        return this.dptos

    }

}

class Edificio {
  pisos: Piso[];
  constructor(pisos: Piso[]) {
    this.pisos = pisos;
  }
  addDepartamentoToPiso(nombreDePiso:string, departamento:Departamento){
      const pisoEncontrado = this.pisos.find(function(item){
       pisoEncontrado.pushDepartamento(departamento);
      })
      
      
      }
      getDepartamentoByPiso(nombreDelPiso:string):Departamento[]{
          return [];

      }


  }
//console.log("hola");
