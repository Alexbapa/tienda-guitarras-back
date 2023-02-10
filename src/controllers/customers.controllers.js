const Customer = require('./../models/customersSchema');
const { respApi } = require('../helpers/helpers');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
require('dotenv').config();


const getCustomers = async (req, res) => {
    const Customers = await Customer.find({})
    respApi(res, 'exito', Customers);
}

const createCustomers = async (req, res) => {
    const { name, email, password } = req.body

    try {
        //generar aleatorio
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)

        //crear usuario con pass encriptado
        const respuestaBD = await Customer.create({
            name,
            email,
            password: hashedPassword,
        })

        //crear el jsonwebtoken
        const payload = {
            user: {
                id: respuestaBD._id,
            },
        }

        //firmar el jwtoken

        jwt.sign(
            payload,
            process.env.SECRET,
            {
                expiresIn: 360000,
            },
            (error, token) => {
                if (error) throw error
                res.json(respuestaBD)
            }


        )


        respApi(res, 'exito', CustomerNew);
    } catch (error) {
        return res.status(400).json({
            msg: error,
        }
        )
    }

}

const updateCustomers = async (req, res) => {

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

const deleteCustomers = async (req, res) => {
    try {
        const id = req.params.id;
        const CustomerDelete = await Customer.findByIdAndDelete(id)
        respApi(res, `exito el usuario ${CustomerDelete.name} se a borrado`, CustomerDelete);
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getCustomers,
    createCustomers,
    updateCustomers,
    deleteCustomers
}