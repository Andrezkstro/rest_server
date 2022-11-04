const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');
const { validationResult } = require('express-validator');


const usuariosGet = async(req = request, res = response) =>{
    const query = {estado : true}
    const {limite = 5, desde = 0} = req.query;

    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number(desde))
            .limit(Number(limite))
    ])

    res.json({
        total,
        usuarios
    });
}
const usuariosDelete = async (req = request, res = response) =>{
    const { id } = req.params;
    //Borrado total de usuarios
    //const usuario = await Usuario.findByIdAndDelete(id);

    //Borrado cambiando el estado del usuario
    const usuario = await Usuario.findByIdAndUpdate(id, {estado: false});
    res.json(usuario);
}
const usuariosPut = async(req = request, res = response) =>{

    const { id } = req.params;
    const {pass, google,correo, ...resto} = req.body;

    if(pass){
        const salt = bcryptjs.genSaltSync();
        resto.pass = bcryptjs.hashSync(pass, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate (id, resto)

    res.json({
        msg: 'put API',
        usuario
    });
}
/* function palabraReves( palabra ) {

    console.log(palabra.length);
    var nuevaCadena = "";
    for (let index = palabra.length - 1; index >= 0; index--) {
        nuevaCadena += palabra[index];
    }
    return nuevaCadena;

} */
const usuariosPost = async (req = request, res = response) =>{

    const {palabra, nombre, correo, pass, rol} = req.body;
    const usuario = new Usuario( {nombre, correo, pass, rol} );

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.pass = bcryptjs.hashSync(pass, salt);

    await usuario.save();

    res.json({
        msg: 'post API',
        usuario
    });
}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}