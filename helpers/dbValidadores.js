const Role = require('../models/role');
const Usuario = require('../models/usuario');

const esRoleValido = async (rol = '') => {
    const existeRol = await Role.findOne({rol});
    if (!existeRol) {
        throw new Error(' El rol ' + rol + ' no esta registrado en la Base de datos');
    }
}

const esCorreoExiste = async (correo = '') => {
    const existeCorreo = await Usuario.findOne({correo});
    if (existeCorreo) {
        throw new Error(' El coreo ' + correo + ' ya esta registrado en la Base de datos');
    }
}

const esUsuarioID = async (id = '') => {
    const existeusuario = await Usuario.findById(id);
    if (!existeusuario) {
        throw new Error(' El idUsuario no esta registrado en la Base de datos');
    }
}

module.exports = {
    esRoleValido,
    esCorreoExiste,
    esUsuarioID
}