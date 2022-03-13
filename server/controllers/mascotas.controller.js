const {request, response} = require('express');
const {prisma} = require('../db/prisma');


const getTipo = async(req=request, res=response) =>{

    try {

        const tipos = await prisma.tipoMascota.findMany();

        res.status(201).json({
            ok:true,
            tipos
        })
        
    } catch (error) {
        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        })
    }
}



module.exports = {
    getTipo
}