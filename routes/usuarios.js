const { Router } = require('express');
const { usuariosGet, usuariosPut, usuariosDelete, usuariosPost } = require('../controllers/usuarios');

const router = Router();

router.get("/", usuariosGet);
router.post("/", usuariosPost);
router.delete("/", usuariosDelete);
router.put("/:id", usuariosPut);


module.exports = router ;