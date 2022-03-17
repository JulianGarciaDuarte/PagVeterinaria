
const {request, response} = require('express');
const bcryptjs = require('bcryptjs');
const {prisma} = require('../db/prisma');

/**
 * Método encargado de crear un usuario
 * @param {*} req 
 * @param {*} res 
 */
const crearUsuario = async(req=request, res=response)=>{
    
    try {

        const {nombre, email, password,telefono, direccion, veterinariaId} = req.body;
        
        const usuario = await prisma.usuario.create({
            
            data:{
                nombre,
                email,
                password,
                telefono,
                direccion,
                veterinariaId
            }
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        })
    }
}

module.exports = {
    crearUsuario
}