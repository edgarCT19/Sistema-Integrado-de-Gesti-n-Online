const sql = require("mysql");

const sqlconnect = sql.createConnection({
    host:"www.db4free.net",
    user:"pruebas_proyecto",
    password:"Proyecto_0",
    database:"proyecto_0_uac",
    multipleStatements:true
});

sqlconnect.connect((err)=>{
    if(!err)
    {
        console.log("Conectado");
    } else {
        console.log("No Conectado");
    }
});

module.exports = sqlconnect;