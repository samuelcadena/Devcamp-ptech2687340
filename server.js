const express = require('express')
const dotenv = require('dotenv')
const colors = require('colors')
//dependencia de conexion 
const conectarDB = require("./config/db")


//configurar dotenv
dotenv.config({
    path: "./config/.env"
})

//conectar a db
conectarDB()


//dependencia de rutas
const bootcampsRoutes = require('./routes/bootcampRoutes')
//express
const app = express()

//habilitar express para recibir el body en formato json
app.use(express.json())
//establecer rutas de proyecto 
app.use('/api/v1/bootcamps/',
    bootcampsRoutes)


//crear el servidor de aplicaciones
//aplicaciones de express
app.listen( process.env.PUERTO,
     () => {
        console.log(`servidor de express ejecutando ${process.env.PUERTO
        
        
        
        
      
        
        
        }`.bgCyan.yellow.underline)

     } )