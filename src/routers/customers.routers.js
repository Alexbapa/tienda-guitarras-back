const {Router} = require('express');
const router = Router();
const {getCustomers, createCustomers, updateCustomers, deleteCustomers} = require('../controllers/customers.controllers');

router.get('/', getCustomers);

router.post('/', createCustomers);

router.put('/:id', updateCustomers);

router.delete('/:id', deleteCustomers);

module.exports = router;