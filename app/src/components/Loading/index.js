import React from "react";
import { IoIosFlash } from "react-icons/io";
import { BsHeartPulseFill } from "react-icons/bs";
import { FaLeaf } from "react-icons/fa";

const Loading = () => {
  return (
    <div class="loading-container">
      <div class="cargando">
        <div class="pelotas"><IoIosFlash /></div>
        <div class="pelotas"><FaLeaf /></div>
        <div class="pelotas"><BsHeartPulseFill /></div>
      </div>
    </div>
  );
};

export default Loading;
