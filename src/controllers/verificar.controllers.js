const Customers = require('./../models/customersSchema');

const getVerificar = async (req, res) => {
   try{
//confirmamos que el usuario existe y regresamos el dato sin el pss
   const Customer = await Customers.findById(req.user.id).select('-password')
   res.json({Customer})
   }catch(error){
     //en caso de error
     res.status(500).json({
     msg: 'hubo un error'
     })
   }
}

module.exports = { getVerificar }