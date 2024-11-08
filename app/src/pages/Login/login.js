import React from "react";
import logo from "../../assets/images/LogoUacamWeb.png";

const Login = () => {
    return(
        <>
          <section className="loginSection">
            <div className="loginBox">
                <div className="logo">
                  <img src={logo}></img>
                </div>
            </div>
          </section>
        </>
    )
}

export default Login;