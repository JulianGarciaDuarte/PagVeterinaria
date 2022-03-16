const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');
const { prisma } = require('../db/prisma');


/**
 * Método encargado de hacer login 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
const loginUsuario = async(req=request, res=response)=>{
    
    const { email, password } = req.body;

    try {

        const usuario = await prisma.usuario.findUnique({
            where:{
                email
            }
        })

        if(!usuario) {
            return res.status(400).json({
                ok: false,
                msg:'El correo no existe'
            })
        }

        const validPassword = bcryptjs.compareSync( password, usuario.password);

        if(! validPassword){

            return res.status(400).json({
                ok: false,
                msg:'La contraseña es inválida'
            });
        }

        const token = await generarJWT(usuario.id, usuario.nombre);

        return res.json({
            ok:true,
            uid:dbUser.id,
            name: dbUser.nombre,
            email:dbUser.email,
            token
        })

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg:' Hable con el administrador'
        })
        
    }


}



const revalidarToken = async(req=request, res=response)=>{
    const {uid} = req;

    //leer la base de datos
    const dbUser = await Usuario.findById(uid);

    //generar token 
    const token = await generarJWT( uid, dbUser.nombre);

    return res.json({
        ok: true,
        uid,
        name: dbUser.nombre,
        email: dbUser.email,
        token
    })

}


module.exports = {
    loginUsuario,
    revalidarToken
}