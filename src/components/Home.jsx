import React from "react";
import vg from "../assets/2.webp";
import {
  
  AiFillStepBackward,
  AiFillAlipaySquare,
  AiFillAliwangwang,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div className="home" id="home">
        <main>
          <h1>GAMER'S PARADISE</h1>
          <p>One stop Solution to all your Gaming Needs</p>
        </main>
      </div>

      <div className="home2">
        <img src={vg} alt="Graphics" />

        <div>
          <p>
            Any solutions you require in your gaming and performance needs,
            from best in class Hardware availabilty to Software support.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>Who we are?</h1>
          <p>
           We are premium and top class service providers in terms of your gaming and productivity needs,
           frm software issues, latest releases,mods,in game purchases, to getting the most premium hardware,
           dealing in Playstations,workstations,xbox,PCs and Laptops,additionally peripherals,Storage Devices.

          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillStepBackward />
              <p>Steam</p>
            </div>

            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillAlipaySquare />
              <p>Sony Playstation</p>
            </div>

            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillAliwangwang/>
              <p>Microsoft XBOX</p>
            </div>

            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillAlipaySquare/>
              <p>PERSONAL COMPUTERS</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
