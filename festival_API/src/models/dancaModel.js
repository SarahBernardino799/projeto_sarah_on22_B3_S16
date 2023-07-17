const mongoose = require("mongoose");
const dancaSchema = mongoose.Schema(
    {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(),
        },
        nome_Danca: {
            type: String,
            required: true,
            unique: true,
        },
        coreografa:{
            type: String,
            required: true,
        },
        numero_de_bailarinas: {
            type: Number,
            required: true,
        },
        nome_das_bailarinas: {
            type: [String],
            required: true,
        },
        available: {
            type: Boolean,
            required: true,
        },
        description: {
            type: String,
            minLength: 20,
            maxLength: 500,
            default: "não informado."
        },
        cadastro: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: "Cadastro",
        },
    },
    {
        versionkey: false
    }
)
const model = mongoose.model("dancaModel", dancaSchema)
module.exports = model