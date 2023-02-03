const mongoose = require('mongoose');

const customersSchema = mongoose.Schema(
    {
     name:{type: String, require: true},
     email:{type: String, require: true},
     password:{type: String, require: true}
     }

    
)

const Customers = mongoose.model('customer', customersSchema);
module.exports = Customers;