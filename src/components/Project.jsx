import React from "react";
import myntrap from "../assets/myntrap.png";
import fb from "../assets/fb.png";
import Learn from "../assets/Learn.png";
import weather from "../assets/weather.png";
import music from "../assets/music.png";
import dice from "../assets/dice.png";
import twitter from "../assets/twitter.png";

function Project() {
  return (
    <>
      <section id="projects">
        <div className="container m-auto px-4 sm:py-12">
          <h2 className="text-2xl font-semibold">Projects</h2>
          <div className="flex flex-col sm:flex-row gap-10 mt-11">
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <img src={myntrap} className="w-full h-auto" />
              <h3 className="text-2xl font-semibold mt-8">Myntra clone</h3>
              <p className="text-gray-400 text-sm mt-2">
                Responsive HTML/CSS layout for store and functionality using
                javascript. HTML5, CSS3 , JAVASCRIPT
              </p>
              <div className="flex mt-12 gap-2">
                <a
                  className="cursor-pointer   *:first-letter:
                    
                    flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center"
                  href="https://creative-faun-89b79c.netlify.app/"
                >
                  {" "}
                  Live preview
                </a>
                <a
                  className="flex-1 text-sm py-3 border rounded-full text-center"
                  href="https://github.com/akhilesh-bisht/myntra-clone.git"
                >
                  {" "}
                  Checkout github
                </a>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <img src={weather} className="w-full h-auto" />
              <h3 className="text-2xl font-semibold mt-8">Weather App</h3>
              <p className="text-gray-400 text-sm mt-2">
                Weather App using HTML/CSS/javascript layout for online weather.
                HTML5, CSS3 ,JAVASCRIPT
              </p>
              <div className="flex gap-2 mt-12">
                <a
                  className="flex-1 text-sm py-3 bg-gradient-to-t from-blue-500 rounded-full to-cyan-500 hover:from-blue-700 hover:to-cyan-700 text-center"
                  href="https://stunning-taiyaki-04684a.netlify.app/"
                >
                  Live preview
                </a>
                <a
                  className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 text-center"
                  href="https://github.com/akhilesh-bisht/weather-app.git"
                >
                  Checkout github
                </a>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row  gap-10 mt-11">
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <img src={twitter} className="w-full h-auto" />
              <h3 className="text-2xl font-semibold mt-8">X(Twitter)</h3>
              <p className="text-gray-400 text-sm mt-2">
                twitter clone ui using html or tailwind css
              </p>
              <div className="flex gap-2 mt-12">
                <a
                  className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 text-center"
                  href="https://github.com/akhilesh-bisht/x-clone.git"
                >
                  Checkout github
                </a>
              </div>
            </div>

            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <img src={dice} className="w-full h-auto" />
              <h3 className="text-2xl font-semibold mt-8">
                Dice game to enjoy the day
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                DICE game using react/css layout for The Game. REACT, CSS3
              </p>
              <div className="flex gap-2 mt-12">
                <a
                  className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 text-center"
                  href="https://github.com/akhilesh-bisht/dice-game.git"
                >
                  Checkout github
                </a>
              </div>
            </div>
            <div className="border border-gray-500 rounded-md p-5 flex-1">
              <img src={fb} className="w-full h-auto" />
              <h3 className="text-2xl font-semibold mt-8">
                Facebook log in page
              </h3>
              <p className="text-gray-400 text-sm mt-2">
                Facebook login page using , HTML5, CSS3 (Tailwind)
              </p>
              <div className="flex gap-4 mt-12">
                <a
                  className="flex-1 text-sm py-3 border rounded-full hover:border-blue-500 hover:text-blue-500 text-center"
                  href="https://github.com/akhilesh-bisht/fb-login-page.git"
                >
                  Checkout github
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
