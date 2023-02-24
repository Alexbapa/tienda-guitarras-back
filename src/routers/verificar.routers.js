const {Router} = require('express');
const router = Router();
const {getVerificar} = require('../controllers/verificar.controllers');

router.get('/', getVerificar);

module.exports = router;