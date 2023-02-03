const Customer = require('./../models/customersSchema');
const { respApi } = require('../helpers/helpers');

const getCustomers = async(req,res) =>{
    const Customers = await Customer.find({})
    respApi(res, 'exito', Customers);
}

const createCustomers = async(req,res) =>{
    const CustomerNew = await Customer.create(req.body)
    respApi(res, 'exito', CustomerNew);
    }

const updateCustomers = async(req,res) =>{

            try {
                const id = req.params.id;
                const updatedData = req.body;
                const options = { new: true };
        
                const CustomerUpdate = await Customer.findByIdAndUpdate(
                    id, updatedData, options
                )
        
                respApi(res, 'exito', CustomerUpdate);
            }
            catch (error) {
                res.status(400).json({ message: error.message })
            }
   }

const deleteCustomers = async(req,res) =>{
            try {
                const id = req.params.id;
                const CustomerDelete = await Customer.findByIdAndDelete(id)
                respApi(res, `exito el usuario ${CustomerDelete.name} se a borrado`, CustomerDelete);
            }
            catch (error) {
                res.status(400).json({ message: error.message })
            }
    }

module.exports ={
    getCustomers,
    createCustomers,
    updateCustomers,
    deleteCustomers
}