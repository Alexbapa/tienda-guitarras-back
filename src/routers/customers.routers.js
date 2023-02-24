const {Router} = require('express');
const router = Router();
const {getCustomers, createCustomers, updateCustomers, deleteCustomers} = require('../controllers/customers.controllers');
const auth = require('../middelwares/auth');

router.get('/', auth , getCustomers);

router.post('/', createCustomers);

router.put('/:id', updateCustomers);

router.delete('/:id', deleteCustomers);

module.exports = router;