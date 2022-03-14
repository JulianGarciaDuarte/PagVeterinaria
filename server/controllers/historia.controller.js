const {request, response} = require('express');


/**
 * método encargado de crear una historia clinica
 * @param {*} req 
 * @param {*} resp 
 */
const crearHistoria = async(req=request, res=response) =>{

    try {
        
        const {} = req.body;

        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok:false,
            msg:'Error, hable con el administrador'
        });
    }

}