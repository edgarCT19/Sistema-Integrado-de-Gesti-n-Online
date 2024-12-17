const express = require("express");

const sqlconnect = require("./dbconnect");

const Router = express.Router();

Router.get("/", (req, res)=>{
    const userData = [{name:"Pablo", email:"iscpablochin@gmail.com", edad:"32", puesto:"Jefe Sistemas"}];
    res.send(userData);
});

Router.get("/api/departamento", (req, res)=>{
    sqlconnect.query("select * from departamento",(err, rows)=>{
        if(!err)
        {
            res.send(rows);
        }else{
            console.log("err");
        }
    })
});

Router.get("/api/bitacora1", (req, res)=>{
    sqlconnect.query("select * from bitacora_mensual_residuos",(err, rows)=>{
        if(!err)
        {
            res.send(rows);
        }else{
            console.log("err");
        }
    })
});

module.exports = Router;