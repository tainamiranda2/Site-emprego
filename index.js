
const express = require('express');
//const bodyParser = require('body-parser');
const app = express();
//Rotas

//view

app.set('view engine','ejs');

//static

app.use(express.static('public'));
//bodyParse

//app.use(bodyParser.urlencoded({ extende: false}))
//app.use(bodyParser.json());
//rota 

app.listen(3000, () => {
    console.log("Sevidor rodando de boas")
   })

app.get("/formularios/login", (req, res) => {
    res.render('formularios/login')
})

app.get("/formularios/cadastro", (req, res) => {
    res.render('formularios/cadastro')
})

app.get("/", (req, res)=>{
    res.render("index");
})

