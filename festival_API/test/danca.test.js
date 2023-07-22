const dancaModel = require("../src/models/dancaModel")
describe("GET model test", ()=> {
    const cadastro = new dancaModel({
        "_id": "64b98f251a5f93ccdb2e6065",
        "nome_Danca": "o circo chegou",
        "coreografa": "Mara Jessica",
        "numero_de_bailarinas": 4,
        "nome_das_bailarinas": ["morgana","lara", "ana", "sarah"],
        "available": true,
        "description": "danca domadoras com a musica Grande Circo blaaaaaaaaaaa .",
        "cadastro": "b98f251a5f93ccdb2e6065ee"
    
    });
    it("Deve chamar o Schema e retornar o ID correto do cadastro", () =>{
        expect(JSON.stringify(cadastro._id).substring(1, (JSON.stringify(cadastro._id)).length - 1)).toBe("64b98f251a5f93ccdb2e6065");
    });
    it("Deve chamar o Schema e retornar o nome da dança correta do cadastro", () =>{
        expect(JSON.stringify(cadastro.nome_Danca).substring(1, (JSON.stringify(cadastro.nome_Danca)).length - 1)).toBe("o circo chegou");
    });
    it("Deve chamar o Schema e retornar a coreografa correta do cadastro", () =>{
        expect(JSON.stringify(cadastro.coreografa).substring(1, (JSON.stringify(cadastro.coreografa)).length - 1)).toBe("Mara Jessica");
    });
    it("Deve chamar o Schema e retornar a número de bailarinas corretas do cadastro", () =>{
        expect(cadastro.numero_de_bailarinas).toBe(4);
    });
    it("Deve chamar o Schema e retornar a nome das bailarinas corretas do cadastro", () =>{
        expect(cadastro.nome_das_bailarinas).toStrictEqual( ["morgana","lara", "ana", "sarah"] );
    });
    it("Deve chamar o Schema e retornar o valor avaliado correto do cadastro", () =>{
        expect(cadastro.available).toBe(true);
    });
    it("Deve chamar o Schema e retornar a descrição correta do cadastro", () =>{
        expect(JSON.stringify(cadastro.description).substring(1, (JSON.stringify(cadastro.description)).length - 1)).toBe("danca domadoras com a musica Grande Circo blaaaaaaaaaaa .");
    });
    it("Deve chamar o Schema e retornar o ID do cadastro correto do cadastro", () =>{
        expect(JSON.stringify(cadastro.cadastro).substring(1, (JSON.stringify(cadastro.cadastro)).length - 1)).toBe("b98f251a5f93ccdb2e6065ee");
    });
})