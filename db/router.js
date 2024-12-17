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
Router.get("/api/laboratorios", (req, res)=>{
    sqlconnect.query("select * from laboratorio",(err, rows)=>{
        if(!err)
        {
            res.send(rows);
        }else{
            console.log("err");
        }
    })
});

Router.post("/api/add_bitacora1", (req, res)=>{
    const id_dependencia = req.body.area;
    const id_laboratorio = req.body.laboratorio;
    const fecha = req.body.fecha;
    const residuo = req.body.residuo;
    const estadofisico = req.body.estadofisico;
    const cantidad = req.body.cantidad;
    const creti = req.body.creti;
    const envase = req.body.envase;
    const capacidad = req.body.capacidad;

    var sql_addbit1 = `INSERT INTO bitacora_mensual_residuos (idbitacora_mensual_residuos, laboratorio_idlaboratorio, fecha ,residuo, cantidad, creti, estadofisico, tipoenvase, capacidad) VALUES (default, "${id_dependencia}","${id_laboratorio}","${fecha}","${residuo}","${cantidad}","${creti}","${estadofisico})","${envase}","${capacidad}`;

    sqlconnect .query(sql_addbit1, (err, result)=>{
        if(!err){
            res.status(200).json("Bitacora 1 agregada correctamente");
            console.log("ya paso aqui");
        }else{
            console.log(err);
        }
    });
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