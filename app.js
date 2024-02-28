const express = require("express");
const app = express();

const path = require ("path");

const publicPath = path.resolve(__dirname , "./public");

app.use (express.static (publicPath));

const port = process.env.PORT || 3000;
app.listen (port, () => 
    console.log(`Servidor corriendo en Puerto ${port}`)
);

app.get("/", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/home.html"))
});

app.get("/register", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/register.html"))
});

app.post("/registro", (req,res)=>{
    res.send("¡Registro exitoso!.")
});

app.get("/login", (req,res)=>{
    res.sendFile(path.resolve(__dirname, "./views/login.html"))
});