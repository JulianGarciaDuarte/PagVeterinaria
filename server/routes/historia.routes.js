const {Router} = require('express');
const { crearHistoria } = require('../controllers/historia.controller');



const router = Router();

router.post('/',crearHistoria);

module.exports= router;