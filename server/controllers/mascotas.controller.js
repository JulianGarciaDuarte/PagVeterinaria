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

/**
 * Método encargado de registrar una mascota
 * @param {*} req 
 * @param {*} res 
 */
const registrarMascota = async(req=request, res=response)=>{

    try {
        
    } catch (error) {
        
    }
}

/**
 * Método encargado para agregar una mascota
 * @param {*} req 
 * @param {*} res 
 */
const agregarMascota = async(req=request, res=response)=>{

    try {

        const {} = req.body;
        
    } catch (error) {

        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        });
        
    }
}


module.exports = {
    getTipo
}