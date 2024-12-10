import React from "react";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import Tooltip from "@mui/material/Tooltip";

const bitacora_mensual_rp = () => {
  return (
    <div className="w-100 right-content">
        <div className="fondocard">
        <div>
        <div class="card text-center">
        <div class="card-body" className="distribucionlabel">
            <div class="col-md-4" >
                <img src="https://sg.com.mx/sites/default/files/2018-04/thNM69L9HF.jpg" className="logouac"></img>
            </div>
        
            <div class="col-md-4">
                <label>UNIVERSIDAD AUTONOMA DE CAMPECHE</label><br></br>
                <label>Referencias Normativas: ISO14001:2015:8.1 ISO 45001:2018:8.1, 8.1.2</label>
            </div>

            <div class="col-md-4" >
                <img src="logosustentable.jpg" className="logosustentable"></img>
            </div>
        </div>
        </div> 
        </div>
        <div id="titulo">
            <center><h5>BITACORA PARA REGISTRAR LA GENERACION MENSUAL DE RESIDIOS PELIGROSOS</h5></center>
        </div>
        <hr></hr>
        <div class="card">
            <div class="row">
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    Area: <label>   Hola</label>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    Departamento: <label>   Hola</label>
                </div>
                </div>
            </div>
            <div class="col-sm-4">
                <div class="card">
                <div class="card-body">
                    Laboratorio/Taller/Clinica: <label>   Hola</label>
                </div>
                </div>
            </div>
            </div>
        </div>
        <hr></hr>
        <div id="tabla">
            <table class="table table-bordered">
                <thead>
                    <tr>
                    <th className="table-title text-center" >Fecha <br></br> (DD/MM/AAAA)</th>
                    <th className="table-title text-center" >Residuo</th>
                    <th className="table-title text-center" >Estado Fisico</th>
                    <th className="table-title text-center" >Cantidad*1</th>
                    <th className="table-title text-center" >CRETI*2</th>
                    <th className="table-title text-center" >Tipo de envase*3</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>    
                    <tr>
                        <th>2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th>3</th>
                        <td>Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div id="pie">

                    1 - Indicar en que unidades esta dada la cantidad de residuo generado <br></br>
                    2 - Especifique si el residuo peligroso es : Corrosivo, Reactivo, Explosivo, Toxico o inflamable <br></br>
                    3 - Caracteristicas del envase, si es de vidrio, plastico, de que capacidad, 500grs o 1 Galon, KG, LT, ML
            </div>
        </div>
        </div>
  );
};

export default bitacora_mensual_rp;