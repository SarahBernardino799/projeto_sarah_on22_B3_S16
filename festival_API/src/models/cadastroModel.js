
const mongoose = require ("mongoose")
const cadastroSchrema = new mongoose.Schema( 
{
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        default: () => new mongoose.Types.ObjectId(),
       },
    usuario:{
        type: String,
        required: true,
        unique: true, 
       },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    senha:{
        type:String,
        required: true,
        unique: true,
    }
},
{
    versionKey: false
}
)
const cadastro = mongoose.model("Cadastro", cadastroSchrema)
module.exports = cadastro
