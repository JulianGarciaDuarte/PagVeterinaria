const cors = require('cors');
const morgan = require('morgan');
const express = require('express');


class Server{


    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.path = {
            user:'/api/users',
            pets:'/api/pets'
        }
    }

    middlewares(){

        this.app.use( cors());
        this.app.use( express.json() );
        this.app.use( morgan('dev'));
    }

    routes(){
        
    }

    start(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor corriendo en el puerto http://localhost:${this.port}`);
            console.log('hola');
        })
    }

}