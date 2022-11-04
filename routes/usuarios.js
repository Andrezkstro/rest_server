const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosDelete, usuariosPost } = require('../controllers/usuarios');
const { check } = require('express-validator');
const {validarCampos } = require('../middlewares/validarCampos');
const { esRoleValido, esCorreoExiste, esUsuarioID } = require('../helpers/dbValidadores');


const router = Router();

router.get("/", usuariosGet);
router.post("/", [
    check('nombre', 'El Nombre es obligatorio').not().isEmpty(),
    check('correo', 'El Correo no es valido').isEmail(),
    check('correo').custom( esCorreoExiste ),
    check('pass', 'El Pass es Obligatorio debe ser mayor a 6 letras').isLength( { min:6 } ),
    check('rol').custom( esRoleValido ),
    validarCampos
], usuariosPost);
router.delete("/:id",[
    check('id', 'No es un Mongo ID').isMongoId(),
    check('id').custom( esUsuarioID ),
    validarCampos
], usuariosDelete);
router.put("/:id", [
    check('id', 'No es un Mongo ID').isMongoId(),
    check('id').custom( esUsuarioID ),
    check('rol').custom( esRoleValido ),
    validarCampos
], usuariosPut);


module.exports = router ;