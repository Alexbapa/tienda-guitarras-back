const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports  = (req, res, next) => {
    //extraemos el token que viene de la peticion 
    const token = req.header('x-auth-token')
    //si no hay token error
    if(!token){
        return res.status(400).json(
            {
                msg: 'no hay token, permiso no valido',
            }
        )
    }
    try{
       //confirmamos la verificacion por jwt 
       const openToken = jwt.verify(token, process.env.SECRET)
       //si todo bien 
       req.user = openToken.user
       //
       next()
    }catch(error){
      res.json(
        {
            msg: 'error en autenticar',
            error, 
        }
      )
    }
}