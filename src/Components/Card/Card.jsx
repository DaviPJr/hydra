import React from "react";
import "./Card.css";
import { Link } from "react-scroll";
import img1 from "../../Assets/Imagens/img1.png";
import img2 from "../../Assets/Imagens/img2.png";
import img3 from "../../Assets/Imagens/img3.png";
import img4 from "../../Assets/Imagens/img4.png";

export const Card = (props) => {
  return (
    <div className="card-container">
      <div className="card" id="card">
        <img src={img1} alt="" />
        <h2>SIMULATION</h2>
        <hr />
        <p>
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <Link to="form" smooth={true} duration={500}>
          <button>TRY IT NOW</button>
        </Link>
      </div>
      <div className="card">
        <img src={img2} alt="" />
        <h2>EDUCATION</h2>
        <hr />
        <p>
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <Link to="form" smooth={true} duration={500}>
          <button>TRY IT NOW</button>
        </Link>
      </div>
      <div className="card">
        <img src={img3} alt="" />
        <h2>SELF-CARE</h2>
        <hr />
        <p>
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <Link to="form" smooth={true} duration={500}>
          <button>TRY IT NOW</button>
        </Link>
      </div>
      <div className="card">
        <img src={img4} alt="" />
        <h2>OUTDOOR</h2>
        <hr />
        <p>
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
        <Link to="form" smooth={true} duration={500}>
          <button>TRY IT NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
