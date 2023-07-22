const dancaModel = require("../models/dancaModel");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const findAllDanca = async (req, res) => {
    try {
        const allDanca = await dancaModel.find();
        res.status(200).json(allDanca)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const findDancaById = async (req, res) => {
    try {
        const findDanca = await dancaModel.findById(req.params.id)
        res.status(200).json(findDanca)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const addNewDanca = async (req, res) =>{
    try {
        const {nome_Danca, coreografa, numero_de_bailarinas, nome_das_bailarinas, available, description, cadastro} = req.body
        const newDanca = new dancaModel({nome_Danca, coreografa, numero_de_bailarinas, nome_das_bailarinas, available, description, cadastro})
        const savedDanca = await newDanca.save()
        res.status(201).json({message: "your new dança sucess", savedDanca})
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}
const updateDanca = async (req, res) =>{
try {
    const {nome_Danca, coreografa, numero_de_bailarinas, nome_das_bailarinas, available, description, cadastro} = req.body
    const updatedDanca = await dancaModel.findByIdAndUpdate(
        req.params.id, {nome_Danca, coreografa, numero_de_bailarinas, nome_das_bailarinas, available, description, cadastro})
        res.status(200).json({message: "dança atualizada e salva", updatedDanca})
    
} catch (error) {
   console.error(error)
   res.status(500).json({message:"não foi possivel atualizar a dança"}) 

}
}

const deleteDanca = async (req, res) =>{
try {
    
    const authHeader = req.get("authorization")
    if (!authHeader) {
        return res.status(401).send("Atenção! Voçê esqueceu de adicionar o TOKEN!")
    }
    const token = authHeader.split(" ")[1]

    jwt.verify(token, SECRET, async function (err) {
        if (err) {
            return res.status(403).send("acesso não autorizado!! adicione o token correto")
        }
    const {id} = req.params
    const deletedDanca = await dancaModel.findByIdAndDelete(id)
    const message = `A Dança ${deletedDanca.nome_Danca} foi deletada com sucesso.`
    res.status(200).json({message})
    })
} catch (error) {
    console.error(error)
   res.status(500).json({message:"não foi possivel deletar a dança"}) 

}
}

module.exports = {
    findAllDanca,
    findDancaById,
    addNewDanca,
    updateDanca,
    deleteDanca
}