const mongoose = require("mongoose");
const linkfySchema = mongoose.Schema(
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
        },
        podcast:{
            type:String,
            required: true,
            unique: true,
        },
        genero:{
            type:String,
            required: true,
            unique: true,
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
        },
        URL:{
            type: String,
            required: true
        }
    }, 
    {
        versionkey: false
    }
)
const model = mongoose.model("linkfy", linkfySchema)
module.exports = model