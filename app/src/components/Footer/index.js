import React from "react";
import logoYumkaxx from "../../assets/images/LogoYumkaax.png";

const LogoFoot = () => {
  return (
    <>
      <div className="sidebar-footer">
        <img
          src={logoYumkaxx}
          alt="Descripción de la imagen"
          className="footer-image"
        />
        <h5 className="footer-text">
          Coordinación General de Sustentabilidad Yuum K'áax
        </h5>
      </div>
    </>
  );
};

export default LogoFoot;
