import React from "react";
import "./Imagens.css";
import vive from "../../Assets/Imagens/vive.png";
import unreal from "../../Assets/Imagens/unreal.png";
import unity from "../../Assets/Imagens/unity.png";
import oculus from "../../Assets/Imagens/oculus.png";

export const Imagens = () => {
  return (
    <div className="imagens-img" id="imagens">
      <img src={unreal} alt="" />
      <img src={unity} alt="" />
      <img src={oculus} alt="" />
      <img src={vive} alt="" />
    </div>
  );
};

export default Imagens;
