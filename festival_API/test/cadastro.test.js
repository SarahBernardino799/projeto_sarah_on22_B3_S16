const cadastroModel = require("../src/models/cadastroModel")
describe("GET model test", ()=> {
    const cadastro = new cadastroModel({
        "_id": "64b98f251a5f93ccdb2e6065",
        "email": "ana@email.com",
        "senha": "$2b$10$pTn9bhc/1ajZsUBiloIb1.ueo6Z45HYCAMf2FArve/uw8XrRluyKS"
    
    });
    it("Deve chamar o Schema e retornar o ID correto do cadastro", () =>{
        expect(JSON.stringify(cadastro._id).substring(1, (JSON.stringify(cadastro._id)).length - 1)).toBe("64b98f251a5f93ccdb2e6065")
    });
    it("deve chamar o Schema e retornar o email correto do cadastro", ()=>{
        expect(JSON.stringify(cadastro.email).substring(1, (JSON.stringify(cadastro.email)).length - 1)).toBe("ana@email.com")
    });
    it("deve chamar o Schema e retornar a senha correta do cadastro", ()=>{
        expect(JSON.stringify(cadastro.senha).substring(1, (JSON.stringify(cadastro.senha)).length - 1)).toBe("$2b$10$pTn9bhc/1ajZsUBiloIb1.ueo6Z45HYCAMf2FArve/uw8XrRluyKS")
    });
});