const fs = require("fs")
const file = './products.txt';



class Contenedor {
    constructor(){

    }


    read(){
        let informacionObjeto = JSON.parse(fs.readFileSync(file,'utf-8'));
        return informacionObjeto
    }
    
    save(product){
        console.log(product)
        try {
        let informacionObjeto = this.read()

        let ultimoObjeto = informacionObjeto[informacionObjeto.length - 1]
        // let index = informacionObjeto.find(idUsable => idUsable.id === nuevoId)
        //     console.log(index)
        product.id = ultimoObjeto.id + 1
        //let nuevoProducto = { id: ultimoObjeto.id +1, nombre: "Tijera", precio: 356.45 }
        informacionObjeto.push(product)
        let textear = JSON.stringify(informacionObjeto)
        let subirTodo = fs.writeFileSync(file, textear)
        
        } catch (error) {
            console.log('Error de fórmula',error)
        }
    }
  
    getById (id, file){
        
        try {
            let informacionObjeto = this.read()
            // let perro = this.holaQueTal()
            // console.log(perro)

            let product = informacionObjeto.find(product => product.id == id);
            return product ? product : null;
            
        } catch (error) {
            console.log('Error de fórmula',error)
            
        }
        
    }

    
    

    // holaQueTal(){
    //     return("hola mundo")
    // }



    getAll(){
        let informacionObjeto = this.read()
        console.log('getAll')

        try {


            console.log (informacionObjeto)

          //  return (JSON.stringify(informacionObjeto))

          return (informacionObjeto)

        } catch (error) {

            console.log('Error de fórmula',error)

            

        }

    }


    getByRandomId (){
        try {
            let informacionObjeto = this.read()
            let randomId = (Math.floor((Math.random() * (file.length - 1 )) + 1))
            let dataId = informacionObjeto.find(idUsable => idUsable.id === randomId);
            console.log(dataId)
            return (JSON.stringify(dataId))
            
        } catch (error) {
            console.log('Error de fórmula',error)
            
        }
        
    }
    

    deleteById(a){
        try {
            let informacionObjeto = this.read()
            // let index = informacionObjeto.findIndex((idUsable) => {
            //     idUsable.id === a
            // })
            //informacionObjeto.find(idUsable => idUsable.id = a);
            let index = informacionObjeto.find(idUsable => idUsable.id === a)
            console.log(index)
            
            informacionObjeto.splice(index.id-1,1)
            //console.log(informacionObjeto)
            let textoLimpio = JSON.stringify(informacionObjeto)
            let subirTodo = fs.writeFileSync(file, textoLimpio)
            
        } catch (error) {
            console.log('Error de fórmula',error)
            
        }
        
    }

    deleteAll(file){
        try {
            let borrar = fs.writeFileSync(file,'[]')
        } catch (error) {
            console.log('Error de fórmula',error)
        }
    }

   


}

module.exports = Contenedor;