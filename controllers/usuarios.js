const { response } = require('express');


const usuariosGet = (req, res = response) =>{

    const {nombre = 'No Name', q = 'Query'} = req.query;

    res.json({
        msg: 'get API',
        q,
        nombre
    });
}
const usuariosDelete = (req, res = response) =>{
    res.json({
        msg: 'delete API'
    });
}
const usuariosPut = (req, res = response) =>{

    const { id } = req.params;

    res.json({
        msg: 'put API',
        id
    });
}
const usuariosPost = (req, res = response) =>{
    const body = req.body;
    res.json({
        msg: 'post API',
        body
    });
}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}