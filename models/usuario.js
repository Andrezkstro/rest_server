const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({

    nombre:{
        type: String,
        required: [true, 'El Nombre es obligatorio!!']
    },
    correo:{
        type: String,
        required: [true, 'El Correo es obligatorio!!'],
        unique: true
    },
    pass:{
        type: String,
        required: [true, 'La Contraseña es obligatorio!!']
    },
    img:{
        type: String
    },
    rol:{
        type: String,
        required: [true, 'El Rol es obligatorio!!']
    },
    img:{
        type: Boolean,
        default: true
    },
    google:{
        type: Boolean,
        default: false
    },
    estado:{
        type: Boolean,
        default: true
    }

});


UsuarioSchema.methods.toJSON = function(){
    const {__v, pass, ...usuario} = this.toObject();
    return usuario;
}

module.exports = model( 'Usuario', UsuarioSchema);