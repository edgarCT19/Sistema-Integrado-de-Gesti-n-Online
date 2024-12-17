import React, { useEffect, useState } from "react";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Tooltip from "@mui/material/Tooltip";
import "bootstrap/dist/css/bootstrap.min.css";
//import {Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import axios from "axios";
import { Message } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function Bitacora_mensual_rp () {
    const navigate = useNavigate();
    const {register, formState:{errors}, handleSubmit} = useForm();

    const zeroPad = (val) => val.toString().padStart(2, "0"); 
    // Advertencia, padStart() -> ECMAScript 2017
    
    let odate = new Date();
    
    let year = odate.getFullYear();
    let month = zeroPad(odate.getMonth());
    let day = zeroPad(odate.getDate());
    let hour = zeroPad(odate.getHours());
    let mins = zeroPad(odate.getMinutes());

    const [departamento, setDepartamento]=useState([]);
    const [laboratorio, setLaboratorio]=useState([]);
    const [agregar, setAgregar] = useState('')

    useEffect(()=> {
        const getDepartamento = async()=>{
            const reqData = await fetch("http://localhost:7000/api/departamento");
            const resData = await reqData.json();
            setDepartamento(resData);
        }
        getDepartamento();

        const getLaboratorio = async()=>{
            const reqData = await fetch("http://localhost:7000/api/laboratorios");
            const resData = await reqData.json();
            setLaboratorio(resData);
        }
        getLaboratorio();
    },[]);

    const handleDepartamento = (e) => {
        const getDepartamentoid = e.target.value;
        console.log(getDepartamentoid);
    }

    const handleLaboratorio = (e) => {
        const getLaboratorioid = e.target.value;
        console.log(getLaboratorioid);
    }

    const onSubmit=(data)=>{
        console.log(data);

    const res = axios.post("http://localhost:7000/api/add_bitacora1",data)
    .then(response=>{setAgregar(response.data);
    });

    if(!agregar)
    {
        setAgregar(()=>{
            navigate('/inicio')
        },2000);
    }else{
        setAgregar("Ocurrio algo")
    }
    }
    return (
        <React.Fragment>
        <div className="w-100 right-content">
            <div className="card">
            <center><h5>BITACORA PARA REGISTRAR LA GENERACION MENSUAL DE RESIDIOS PELIGROSOS</h5></center>
                <div className="table-header d-flex justify-content-end align-items-center mt-2 mb-3 p-2">
                <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Agregar nueva bitacora 
                </button>
                </div>
                <p className="text-success">{agregar}</p>
                <div className="d-flex justify-content-center align-items-center">
                    <div className="table-container">
                        <table className="styled-table text-center">
                            <thead>
                                <tr>
                                <th className="table-title text-center" >ID Bitacora</th>
                                <th className="table-title text-center" >Fecha <br></br> (DD/MM/AAAA)</th>
                                <th className="table-title text-center" >Residuo</th>
                                <th className="table-title text-center" >Estado Fisico</th>
                                <th className="table-title text-center" >Cantidad*1</th>
                                <th className="table-title text-center" >CRETI*2</th>
                                <th className="table-title text-center" >Tipo de envase*3</th>
                                <th className="table-title text-center" >Acciones*3</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>12/12/24</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>
                                    <div className="d-flex actions justify-content-around">
                                    <Stack direction="row" spacing={1}>
                                        <Link to="#">
                                        <Tooltip title="Editar" placement="top">
                                            <IconButton
                                            aria-label="edit"
                                            size="small"
                                            color="primary"
                                            >
                                            <EditIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        </Link>
                                        <Link to="#">
                                        <Tooltip title="Eliminar" placement="top">
                                            <IconButton
                                            aria-label="delete"
                                            size="small"
                                            color="error"
                                            >
                                            <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        </Link>
                                    </Stack>
                                </div>
                                    </td>
                                </tr>    
                                <tr>
                                    <th>2</th>
                                    <td>1/12/24</td>
                                    <td>Jacob</td>
                                    <td>Thornton</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>
                                    <div className="d-flex actions justify-content-around">
                                    <Stack direction="row" spacing={1}>
                                        <Link to="#">
                                        <Tooltip title="Editar" placement="top">
                                            <IconButton
                                            aria-label="edit"
                                            size="small"
                                            color="primary"
                                            >
                                            <EditIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        </Link>
                                        <Link to="#">
                                        <Tooltip title="Eliminar" placement="top">
                                            <IconButton
                                            aria-label="delete"
                                            size="small"
                                            color="error"
                                            >
                                            <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        </Link>
                                    </Stack>
                                </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>3</th>
                                    <td>13/11/24</td>
                                    <td>Larry the Bird</td>
                                    <td>@twitter</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>@fat</td>
                                    <td>
                                    <div className="d-flex actions justify-content-around">
                                    <Stack direction="row" spacing={1}>
                                        <Link to="#">
                                        <Tooltip title="Editar" placement="top">
                                            <IconButton
                                            aria-label="edit"
                                            size="small"
                                            color="primary"
                                            >
                                            <EditIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        </Link>
                                        <Link to="#">
                                        <Tooltip title="Eliminar" placement="top">
                                            <IconButton
                                            aria-label="delete"
                                            size="small"
                                            color="error"
                                            >
                                            <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        </Tooltip>
                                        </Link>
                                    </Stack>
                                </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>                 
                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Agregar bitacora </h1>
                                
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body"> {/*Los departamentos cambiaron a dependencias, pero no cambia la BD*/}
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <select name="area" {...register("area",{required:true})} class="form-select" aria-label="Default select example" onChange={handleDepartamento}>
                                    <option selected>Dependencia</option>
                                    {
                                        departamento.map((departamentoitem,index)=>(
                                            <option value = {departamentoitem.iddepartamento} key={index}>{departamentoitem.nombre}</option>
                                        ))
                                    }
                                </select>
                                <br></br>
                                <select {...register("laboratorio",{required:true})} class="form-select" aria-label="Default select example" onChange={handleLaboratorio}>
                                    <option selected>Laboratorio</option>
                                    {
                                        laboratorio.map((laboratorioitem,index)=>(
                                            <option value = {laboratorioitem.idlaboratorio} key={index}>{laboratorioitem.nombre_lab}</option>
                                        ))
                                    }
                                </select>
                                <br></br>
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Fecha</span>
                                    <input  type="text" {...register("fecha",{required:true})} class="form-control" aria-label="Sizing example input" placeholder="DD/MM/AAAA HH:MM" aria-describedby="inputGroup-sizing-sm" value={year+'-'+month+'-'+day+' '+hour+':'+mins+':00'}></input>
                                    <span>
                                        {errors.fecha?.type==="required" && "Campo Obligatorio"}
                                    </span>
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Residuo</span>
                                    <input type="text" {...register("residuo",{required:true})} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                    <span>
                                        {errors.residuo?.type==="required" && "Campo Obligatorio"}
                                    </span>
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Estado Fisico</span>
                                    <input type="text" {...register("estadofisico",{required:true})} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                    <span>
                                        {errors.estadofisico?.type==="required" && "Campo Obligatorio"}
                                    </span>
                                </div>
                                <div class="input-group input-group-sm mb-3">
                                    
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Cantidad</span>
                                    <input type="text" {...register("cantidad",{required:true})} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                    <span>
                                        {errors.cantidad?.type==="required" && "Campo Obligatorio"}
                                    </span>
                                </div> 
                                <label for="exampleFormControlInput1" class="form-label">CRETI</label>
                                <select {...register("creti",{required:true})} class="form-select" aria-label="Default select example">
                                    <option selected>Ninguno Seleccionado</option>
                                    <option value="1">Corrosivo</option>
                                    <option value="2">Reactivo</option>
                                    <option value="3">Explosivo</option>
                                    <option value="3">Toxico</option>
                                    <option value="3">Inflamable</option>
                                </select>
                                <br></br>
                                <label for="exampleFormControlInput1" class="form-label">Tipo de envase</label>
                                <select {...register("envase",{required:true})} class="form-select" aria-label="Default select example">
                                    <option selected>Ninguno seleccionado</option>
                                    <option value="1">Vidrio</option>
                                    <option value="2">Plastico</option>
                                </select>
                                <br></br>
                                <div class="input-group input-group-sm mb-3">
                                    <span class="input-group-text" id="inputGroup-sizing-sm">Capacidad y medida</span>
                                    <input type="text" {...register("capacidad",{required:true})} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"></input>
                                    <span>
                                        {errors.capacidad?.type==="required" && "Campo Obligatorio"}
                                    </span>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
                                    <button type="submit" className="btn btn-success">Guardar</button>
                                </div>
                                </form>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </React.Fragment>
    );
};
export default Bitacora_mensual_rp;
