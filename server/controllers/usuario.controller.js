
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

        const {nombre, email, password,telefono, direccion,veterinariaId} = req.body;
        
        const salt = bcryptjs.genSaltSync();
        const passwordCrypt = bcryptjs.hashSync(JSON.stringify(password),salt);

        const usuario = await prisma.usuario.create({
            
            data:{
                nombre,
                email,
                password:passwordCrypt,
                telefono,
                direccion,
                veterinariaId
            }
        });

        res.status(201).json({
            ok:false,
            msg:'Usuario creado',
            usuario
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