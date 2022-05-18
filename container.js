const fs = require("fs")
const file = './products.txt';

class Contenedor {
    constructor(){

    }
    
    async save(product){
        try {
        let informacion = await fs.promises.readFile(file,'utf-8')
        let informacionObjeto = JSON.parse(informacion)
        let nuevoIndex = informacionObjeto.length - 1
        
        let ultimoObjeto = informacionObjeto[nuevoIndex]
        // let index = informacionObjeto.find(idUsable => idUsable.id === nuevoId)
        //     console.log(index)
        product.id = ultimoObjeto.id + 1
        //let nuevoProducto = { id: ultimoObjeto.id +1, nombre: "Tijera", precio: 356.45 }
        informacionObjeto.push(product)
        let textear = JSON.stringify(informacionObjeto)
        let subirTodo = await fs.promises.writeFile(file, textear)
        } catch (error) {
            console.log('Error de fórmula',error)
        }
    }
  
    async getById (id, file){
        try {
            // let perro = this.holaQueTal()
            // console.log(perro)
            let informacion = await fs.promises.readFile(file,'utf-8')
            let informacionObjeto = JSON.parse(informacion)
            let product = informacionObjeto.find(product => product.id == id);
            return product ? product : null;
            
        } catch (error) {
            console.log('Error de fórmula',error)
            
        }
        
    }

    
    

    // holaQueTal(){
    //     return("hola mundo")
    // }

    async getAll(){
        try {
            let informacion = await fs.promises.readFile(file,'utf-8')
            let informacionObjeto = JSON.parse(informacion)
            console.log (informacionObjeto)
            return (JSON.stringify(informacionObjeto))
        } catch (error) {
            console.log('Error de fórmula',error)
            
        }
    }

    async getByRandomId (){
        try {
            let randomId = (Math.floor((Math.random() * (file.length - 1 )) + 1))
            let informacion = await fs.promises.readFile(file,'utf-8')
            let informacionObjeto = JSON.parse(informacion)
            let dataId = informacionObjeto.find(idUsable => idUsable.id === randomId);
            console.log(dataId)
            return (JSON.stringify(dataId))
            
        } catch (error) {
            console.log('Error de fórmula',error)
            
        }
        
    }
    

    async deleteById(a){
        try {
            let informacion = await fs.promises.readFile(file,'utf-8')
            let informacionObjeto = JSON.parse(informacion)
            // let index = informacionObjeto.findIndex((idUsable) => {
            //     idUsable.id === a
            // })
            //informacionObjeto.find(idUsable => idUsable.id = a);
            let index = informacionObjeto.find(idUsable => idUsable.id === a)
            console.log(index)
            
            informacionObjeto.splice(index.id-1,1)
            //console.log(informacionObjeto)
            let textoLimpio = JSON.stringify(informacionObjeto)
            let subirTodo = await fs.promises.writeFile(file, textoLimpio)
            
        } catch (error) {
            console.log('Error de fórmula',error)
            
        }
        
    }

    async deleteAll(){
        try {
            let borrar = fs.promises.writeFile(file,'[]')
        } catch (error) {
            console.log('Error de fórmula',error)
        }
    }

   


}

module.exports = Contenedor;