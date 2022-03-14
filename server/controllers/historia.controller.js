const {request, response} = require('express');
const {prisma} = require('../db/prisma');

/**
 * método encargado de crear una historia clinica
 * @param {*} req 
 * @param {*} resp 
 */
const crearHistoria = async(req=request, res=response) =>{

    try {

        const {mascotaId} = req.body;

        const historia = await prisma.historia.create({
            data:{
                mascotaId
            }
        });

        res.status(201).json({
            ok:true,
            msg:"Historia clínica creada",
            historia
        })

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        });
    }

}

module.exports = {
    crearHistoria
}