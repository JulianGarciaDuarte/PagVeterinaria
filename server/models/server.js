

const cors = require('cors');
const morgan = require('morgan');
const express = require('express');
const { dbConnect } = require('../db/prisma');

class Server{

    constructor(){

        this.app = express();
        this.port = process.env.PORT || 8080;
        this.conectarDB();
        this.middlewares();
        this.path = {
            mascotas:"/api/mascotas"
        }
        this.routes();
    
    }
    
    routes(){
        this.app.use(this.path.mascotas, require('../routes/mascotas.routes'));
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(morgan('dev'));
    }

    start(){
        this.app.listen(this.port, ()=>{
            console.log(`Servidor ejecutandose en el puerto http://localhost:${this.port}`)
        })
    }

    async conectarDB(){
        await dbConnect();
    }
}

module.exports = Server;