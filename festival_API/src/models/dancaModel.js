const mongoose = require("mongoose");
const dancaSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
           },
       /* usuario:{
            type: String,
            required: true,
            unique: true, 
           },
        email:{
            type: String
        },
        senha:{
            type:String
        },*/
        nome_Danca:{
            type: String,
            required: true,
            unique: true,
        },
        coreografa:{
            type: String,
            required: true,
        },
        numero_de_bailarinas:{
            type: Number,
            required: true,
        },
        nomes_das_Bailarinas:{
            type: [String],
            required: true,
        },
        available:{
            type: Boolean,
            required: true,
        },
        description:{ 
            type: String, 
            minLength: 20,
            maxLength:500,
            default: "não informado."
        }
    }, 
    {
        versionkey: false
    }
)
const model = mongoose.model("dancaModel", dancaSchema)
module.exports = model