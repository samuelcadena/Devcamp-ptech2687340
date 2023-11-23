const mongoose = require('mongoose')

//definir el schema
//plano general de todo bootcamps

const bootcampSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [ true, "nombre requerido" ] ,
        unique : [true , "nombre repetido"] ,
    },
    phone:{
        type: Number,
        required: [ true, "telefono requerido " ] ,
        maxlength: [10, "telefono muy largo "] ,

    },
    address:{
        type: String,
        required: [ true, "direccion requerido " ] ,
        maxlength: [50, "direccion muy larga "] ,
        minlength: [10, "direccion muy corta "] ,


    },
    topics:{
        type: [ String ] ,
        enum: [ "AI",
                "Backend",
                "Frontend",
                 "Devops"
                ]

    },
    createdAt: Date
})
// esportar el modelo
const bootcampModel = mongoose
                .model("Bootcamp" , 
                 bootcampSchema)

module.exports = bootcampModel                 