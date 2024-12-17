//console.log("Node + SQL");

const express = require("express");
const bodyparser = require ("body-parser");
const cors = require("cors");
const RouterPath = require("./router")

const app = express ();

const port = 7000;

app.use(bodyparser.json());
app.use(cors());

app.use("/", RouterPath);
app.use("/api/departamento", RouterPath);
app.use("/api/bitacora1", RouterPath);
app.use("/add_bitacora1", RouterPath);

app.listen(port, ()=>console.log("Node + SQL"));