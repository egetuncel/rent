import React from "react";
import "./Homepage.css";
import Header from "./Header";
import cars from "./img/cars.png";

function Homepage() {
  return (
    <div className="homepage">
      <Header></Header>
      <h1 className="slogan" data-text="HOT CARS, HOT PRICES!">
        HOT CARS, HOT PRICES!
      </h1>
      <hr></hr>
      <div className="pic_row">
        <div className="pic">
          <img className="picture" src={cars} alt=""></img>
        </div>
        <div className="texture">
          <p>
            <h3 className="p_title">ABOUT US</h3>
            Sunshine Autos offers car rental services in 3 different cities in
            the state of San Andreas. You can rent your dream car according to
            the features you want in 3 steps. We serve in Los Santos, San Fierro
            and Las Venturas.<br></br>
            <h3 className="p_title"> OUR CONTACT INFORMATION</h3>
            <p className="info">
              Los Santos Responsible: Sadettin Ege Tuncel vagos_sado@gmail.com
              <br></br> San Fierro Responsible: Ata Urcan
              ataurcan@sanfierro.com.us<br></br> Las Venturas Responsible:
              Furkan Kucuk smaLL_fruko@gmail.com
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
