import React from "react";
import "./Outdoor.css";
import maskGroup from "../../Assets/Imagens/maskgroup.png";
import vector7 from "../../Assets/Imagens/vector7.png";
import vector8 from "../../Assets/Imagens/vector8.png";

export const Outdoor = () => {
  return (
    <div className="outdoor">
      <img src={vector7} alt="" className="vector7" />
      <img src={vector8} alt="" className="vector8" />
      <div className="outdoor-img">
        <img src={maskGroup} alt="" />
      </div>
      <div className="outdoor-info">
        <h2>ABOUT</h2>
        <h3>HYDRA VR</h3>
        <p>
          Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis
          rhoncus urna neque viverra justo. Vivamus at augue eget arcu dictum.
<<<<<<< HEAD
          <p>
            Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
            risus viverra adipiscing at in. Mattis aliquam faucibus purus in
            massa. Est placerat in egestas erat imperdiet sed. Consequat semper
            viverra nam libero justo laoreet sit amet.
          </p>{" "}
          Aliquam etiam erat velit scelerisque in dictum non consectetur a.
          Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor orci
          dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
          bibendum. Leo a diam sollicitudi n tempor.
=======
          Ultrices gravida dictum fusce ut placerat orci. Aenean et tortor at
          risus viverra adipiscing at in. Mattis aliquam faucibus purus in
          massa. Est placerat in egestas erat imperdiet sed. Consequat semper
          viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit
          scelerisque in dictum non consectetur a. Laoreet sit amet cursus sit
          amet. Vel eros donec ac odio tempor orci dapibus.{" "}
>>>>>>> 2964d2234b8e04878bf2f47ab85a8ac0723c03a4
        </p>
        <button>LET'S GET IN TOUCH</button>
      </div>
    </div>
  );
};

export default Outdoor;
