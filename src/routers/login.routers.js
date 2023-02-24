const {Router} = require('express');
const router = Router();
const {postLogin} = require('../controllers/login.controllers');

router.get('/', postLogin);

module.exports = router;