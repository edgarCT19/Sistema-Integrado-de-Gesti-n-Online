import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import  Tooltip  from "@mui/material/Tooltip";

import logo from "../../assets/images/LogoUacamWeb.png";

import { MdOutlineLightMode, MdEmail, MdMenu, MdMenuOpen } from "react-icons/md";
import { FaWhatsapp, FaBell } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import InfoIcon from "@mui/icons-material/Info";

const Header = () => {
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMyAccDr = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAccDr = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <header className="d-flex align-items-center">

        <div className="container-fluid w-100">

          <div className="row d-flex align-items-center w-100">

            {/* Logo Wrapper */}
            <div className="col-sm-2 part1">
              <Link to={"/Inicio"} className="d-flex align-items-center logo">
                <img src={logo}></img>
              </Link>
            </div>

            <div className="col-sm-3 d-flex align-items-center pl-4 part2 res-hide">
              <Tooltip title="Cerrar panel de navegación">
                <Button variant="text" className="rounded-circle mr-3">
                  {" "}
                  <MdMenuOpen />{" "}
                </Button>
              </Tooltip> 
                 
              {/* <Search></Search> */}   

            </div>
            
            <div className="col-sm-7 justify-content-end d-flex align-items-center part3">

              <Tooltip title="Activar modo nocturno">
                <Button variant="text" className="rounded-circle mx-2">
                  {" "}
                  <MdOutlineLightMode />{" "}
                </Button>
              </Tooltip>

              <Tooltip title="Ir a Whatsapp">
                <Link to={"https://wa.me"}>
                  <Button variant="text" className="rounded-circle">
                    {" "}
                    <FaWhatsapp />{" "}
                  </Button> 
                </Link>
              </Tooltip>

              <Tooltip title="Ir a Gmail">
                <Link to={"https://mail.google.com/"}>
                  <Button variant="text" className="rounded-circle mx-2">
                    {" "}
                    <BiLogoGmail />{" "}
                  </Button>
                </Link>
              </Tooltip>

              {/** Menú de perfil */}
              <div className="myAccWrapper">
                <Button
                  className="myAcc d-flex align-items-center"
                  onClick={handleOpenMyAccDr}
                >
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt=""
                      />
                    </span>
                  </div>

                  <div className="userInfo">
                    <h4>Victor Lanz Gut...</h4>
                    <p className="mb-0">em000000@uacam.mx</p>
                  </div>
                </Button>

                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={open}
                  onClose={handleCloseMyAccDr}
                  slotProps={{
                    paper: {
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                > 
                  <MenuItem component={Link} to="/perfil" onClick={handleCloseMyAccDr} className="menu-link">
                    <ListItemIcon>
                      <HowToRegIcon fontSize="small" />
                    </ListItemIcon>
                    Mi perfil
                  </MenuItem>
                  <MenuItem component={Link} to="https://uacam.mx/paginas/ver/249" onClick={handleCloseMyAccDr} className="menu-link">
                    <ListItemIcon>
                      <InfoIcon fontSize="small" />
                    </ListItemIcon>
                    Avisos de privacidad
                  </MenuItem>
                  <MenuItem component={Link} to="" onClick={handleCloseMyAccDr} className="menu-link">
                    <ListItemIcon>
                      <AssignmentLateIcon fontSize="small" />
                    </ListItemIcon>
                    Términos y condiciones
                  </MenuItem>
                  <MenuItem component={Link} to="/configuracion" onClick={handleCloseMyAccDr} className="menu-link">
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Configuración
                  </MenuItem>
                  <Divider />
                  <MenuItem
                    onClick={handleCloseMyAccDr}
                    className="text-danger"
                    component={Link} to="/login"
                  >
                    <ListItemIcon className="text-danger">
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Cerrar sesión
                  </MenuItem>
                </Menu>

              </div>

            </div>
            
          </div>

        </div>

      </header>
    </>
  );
};

export default Header;
