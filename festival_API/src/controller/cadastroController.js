const dancaModel = require("../models/dancaModel");
const Cadastro = require("../models/cadastroModel")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;

const findAllCadastro = async (req, res) => {
    try {
        const authHeader = req.get("authorization")
        if (!authHeader) {
            return res.status(401).send("Atenção! Voçê esqueceu de adicionar o TOKEN!")
        }
        const token = authHeader.split(" ")[1]
        jwt.verify(token, SECRET, async function (error) {
         if (error) {
        return res.status(403).send("acesso não autorizado!! adicione o token correto")
            }
        const allCadastro = await Cadastro.find();
        res.status(200).json(allCadastro)
        
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: error.message
        })
    }
}

const addNewCadastro = (req, res) => {
    const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
    req.body.senha = senhaComHash

    const cadastro = new Cadastro(req.body)

    cadastro.save(function (err) {
        if (err) {
            res.status(500).send({ message: err.message })
        }

        res.status(201).send(cadastro.toJSON())
    })
}
const deleteCadastro = async (req, res) => {
    try {
        const authHeader = req.get("authorization")
        if (!authHeader) {
            return res.status(401).send("Atenção! Voçê esqueceu de adicionar o TOKEN!")
        }
        const token = authHeader.split(" ")[1]

        jwt.verify(token, SECRET, async function (error) {
            if (error) {
                return res.status(403).send("acesso não autorizado!! adicione o token correto")
            }
            const { id } = req.params
            await Cadastro.findByIdAndDelete(id)
            const message = `O cadastro com id: ${id} foi deletado com sucesso!`
            res.status(200).json({ message })
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            message: error.message
        })
    }
}
const login = (req, res) => {
    Cadastro.findOne({ email: req.body.email }, function (err, cadastro) {
        if (!cadastro) {
            return res.status(404).send(`não existe cadastro com o email ${req.body.email}!`)
        }
        const senhaValida = bcrypt.compareSync(req.body.senha, cadastro.senha)
        if (!senhaValida) {
            return res.status(403).send("erro ao digitar a senha")
        }
        const token = jwt.sign({ email: req.body.email }, SECRET)
        return res.status(200).send(token)
    })
}

module.exports = {
    findAllCadastro,
    addNewCadastro,
    deleteCadastro,
    login
}