const {Router} = require('express');
const { getTipo } = require('../controllers/mascotas.controller');



const router= Router();

router.get('/',getTipo);


module.exports = router;