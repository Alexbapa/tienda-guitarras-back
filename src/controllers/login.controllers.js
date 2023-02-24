const Customer = require('./../models/customersSchema');
const { respApi } = require('../helpers/helpers');
const jwt = require('jsonwebtoken');
const bcryptjs = require('bcryptjs');
require('dotenv').config();

const postLogin = async (req, res) => {
    const { email, password } = req.body
   try{
    
      let foundUser = await Customer.findOne({email})//econtrar usuario
      console.log(foundUser);
      if(!foundUser){
      //no encontro 
      return res.status(400).json({msg: 'el usuario no existe, favor de registrar primero'})
      }
      //si todo esta bien 
      const passCorrecto = await bcryptjs.compare(password, foundUser.password);
      if(!passCorrecto){
        return await res.status(400).json({msg: 'contraseña incorrecta'});
      }
      //crear el jsonwebtoken
      const payload = {
        user: {
            id: foundUser._id,
        },
    }
    //firmar el jwtoken
    if(email && passCorrecto){
        jwt.sign(payload, process.env.SECRET,{expiresIn: 360000},(error, token)=>{
          if(error) throw error
          //si todo fue bien 
          res.json({ token })
        })
    }else{
          res.json({msg: 'error en token', error})
    }
   }catch(error){
     //en caso de error
     res.status(500).json({
     msg: 'hubo un error'
     })
   }
}

module.exports = { postLogin }