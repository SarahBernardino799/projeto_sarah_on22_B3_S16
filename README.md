# Projeto
## SARAH BERNARDINO
### Festival 
### **MINHA HISTÓRIA** 
Olá me chamo Sarah sou voluntária em organização de eventos, participo do **24° Festival do Ballet Raio de Sol** ` A Magia do Circo. ` 

### 🌈 **Apresentação** 
 Este é o projeto de conclusão do bootcamp de back-end da Turma On22 da [{Reprograma}](https://www.reprograma.com.br/).

 Este projeto é uma API com CRUD completo que contém um banco de dados e Autenticação. Possui a intenção de cadastrar Danças que estão no portifólio do festival que facilita a visualização da quantidade de bailarinas, descrição das danças.

 ### ✨ **Funcionalidades**

#### **Para as danças**
_________________________________________

✔️ Cadastrar novas danças

✔️ Listar todas as danças

✔️ Visualizar uma dança específica pelo ID

✔️ Atualizar uma dança específica pelo ID

✔️ Remover uma dança específica pelo ID do banco de dados

#### **Para os cadastros**
_________________________________________

✔️ Cadastrar novos usuários.

✔️ Listar todos os cadastros.

✔️ Login adicionando usuario e senha.

✔️ Remover um cadastro específico pelo ID no banco de dados.

________________________________________
### 🏗️ **Arquitetura MVC**
________________________________________

```
  📁 festival_API   
  |       
  |-  📁 node_modules
  |-  📁 Swagger    
  |         |- 📄 swagger_output.json   
  |-  📁 src  
  |    |- 📁 database  
  |         |- 📄 bdConnect.js    
  |    |- 📁 controllers   
            |- 📄 cadastroController.js 
  |         |- 📄 dancaController.js     
  |    |- 📁 models  
            |- 📄 cadastroModel.js
  |         |- 📄 dancaModel.js  
  |    |- 📁 routes  
            |- 📄 cadastroRoutes.js
  |         |- 📄 dancaRoutes.js     
  |         
  |    |- 📄 app.js  
  |-  📁 test 
  |         |- 📄 danca.test.js 
  |           
  |-  📄 .env
  |-  📄 .env.example 
  |-  📄 .gitignore 
  |-  📄 package-lock.json   
  |-  📄 pakage.json 
  |-  📄 README.md 
  |-  📄 server.js
  |-  📄 Swagger.js
  |-  📁 material    
  ```
<br>

  ### 📦 **Dependências e Tecnologias**

<br>

**Base do projeto**
______________________________
```
Controle de versões: 
Git/GitHub

Editor de código - IDE:
VSCode

Desenvolver o back-end em Javascript:
Nodejs
```
 
**Instalações iniciais**
_______________________________________

```
Package.json em JS:
npm init -y

Express, cors e node_modules:
npm i express cors
versão
├── express@4.18.2
├── cors@2.8.5

Nodemon:
npm i -D nodemon
versão
├── nodemon@3.0.1
```

**Banco de dados**
___________________________________________________
```
Mongoose:
npm i mongoose
versão
├── mongoose@7.3.2
```

**Autententicação**
________________________________________

```
Jwt:
npm install jsonwebtoken -- save
versão
├── jsonwebtoken@9.0.1

Bcrypt:
npm install bcrypt -- save
versão
├── bcrypt@5.1.0
```
**Variaveis de ambiente**
____________________________________________________
```
Dotenv:
npm install dotenv-safe -- save
versão
├── dotenv@16.3.1
```

**Testes**
____________________________________________________
```
Jest:
npm install --save jest
versão
├── jest@29.6.1
```

**Documentação**
______________________________________________________
```
Swagger:
npm i swagger-autogen swagger-ui-express
versão
├── swagger-autogen@2.23.5
└── swagger-ui-express@5.0.0
```
<br>

## 🔒 **Variáveis de Ambiente**

<br>

*Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env*
```
`PORT=NUMERO_PORTA`    
`DATABASE_URI=CONEXÃO_COM_MONGO_SEM_ASPAS` 
`SECRET=CHAVE_HASH_SEM_ESPAÇO`
```
<br>

### 📌 **Rotas - EndPoint**

<br>

 📢 Todas as rotas existentes neste projeto:

- Dança

| Verbo  |   EndPoint      |        Descrição da Rota                   | Status | Auth |
| ------ | --------------- | -------------------------------------------| ------ |------|
| POST   | /add            | Adicionar uma nova dança                   |   201  |  ❌  |
| GET    | /all            | Listar todas as danças                     |   200  |  ❌  |
| GET    | /:id            | Mostrar as danças pelo ID                  |   200  |  ❌  |
| DELETE | /:id            | Remove uma dança                           |   200  |  ✔️  |
| PATCH  | /:id            | Altera a dança                             |   200  |  ❌  |
<br>
- Cadastro

| Verbo  |   EndPoint      |        Descrição da Rota                   | Status | Auth |
| ------ | --------------- | -------------------------------------------| ------ |------|
| POST   | /add            | Adicionar uma novo usuário                 |   201  |  ❌  |
| GET    | /all            | Listar todas as danças                     |   200  |  ✔️  |
| POST   | /login          | login: email e senha                       |   200  |  ❌  |
| DELETE | /:id            | Remove uma dança pelo ID                   |   200  |  ✔️  |
<br>

<br>

 *PROTEÇÃO* Para testar via Postman, passar token no header de autenticação $ Token


<br>

### 📚 **Documentação da API**
________________________________________________________________________________

📝[Swagger](https://festival-api.onrender.com/minha-rota-de-documentacao/)

📝[Render](https://festival-api.onrender.com)

### ✨ **Instalação e Contribuição no projeto** 
________________________________________________________________
1. Faça um **fork** do projeto.
2. Realize o clone do projeto através do `git clone <link_do_fork_do_repositorio>`
3. Crie uma nova branch com as suas alterações: `git checkout -b minha-branch`
4. Instale as dependências necessárias à execução da API através do comando `npm install`
5. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: Minha contribuição"`
6. Envie as suas alterações: `git push origin minha-branch`

<br>

### 🗺️ **Referências**
_________________________________________________________
- [Emojis](https://emojipedia.org/)
---------------------------------------------------------

### ❤️ Agradecimentos
<br>
Gostaria de aproveitar esta oportunidade para agradecer a todas vocês pelo trabalho duro e dedicação com o Bootcamp de Back-End. O esforço e compromisso de todas foram fundamentais para o sucesso do meu projeto Festival_API.

Sou especialmente grata a Mayhhara por sua liderança e orientação. Seu conhecimento e experiência foram inestimáveis para o meu projeto.

Também gostaria de agradecer a Andreza por seu apoio. Você criou um ambiente positivo e produtivo para todos nós trabalharmos.

Ju, agradeço seu apoio e orientação. Sua ajuda foi muito importante para o nosso desenvolvimento pessoal e profissional.

Professoras Sky, Suzik, Millena, Camila, Gaia Maria, Agnes, Karol(doguinho) agradeço seu tempo, dedicação, sua presença e apoio. Sua energia e positividade fizeram toda a diferença.
Obrigado novamente a todos vocês pelo trabalho duro e dedicação. Estou muito orgulhosa do que conquistamos juntas.

Atenciosamente,
Sarah Bernardino 

<br>
contato
