var pdf = require("html-pdf");
var ejs = require("ejs");

var nome = "Samuel Rech C.";
var curso = "Sistemas de informação";

ejs.renderFile("./index.ejs",{nome: nome,curso : curso}, (err, html) =>{
    if(err){
        console.log("Erro");
    }else{
        pdf.create(html,{}).toFile("./README.pdf", (err, res) => {
            if(err){
                console.log("Erro detectado");
            }else{
                console.log(res);
            }
        })
    }
})
