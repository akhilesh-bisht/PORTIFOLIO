import React from "react";
import html from "../assets/skill/html.png";
import css from "../assets/skill/css.jpg";
import jss from "../assets/skill/jss.png";
import react from "../assets/skill/react.png";
import tailwind from "../assets/skill/tailwind.png";
import redux from "../assets/skill/redux.png";
import git from "../assets/skill/git.png";

function Skill() {
  return (
    <>
      <section className="py-10" id="technologies">
        <div className="container m-auto px-4">
          <h2 className="text-2xl text-center font-semibold">Skill</h2>
          <div className="mt-14">
            <div className=" sm:visible sm:flex sm:w-16  md:w-24   xl:w-32 lg:w-32 aspect-[3/2] object-contain gap-11 hidden  ">
              <img src={html} alt="" />

              <img src={css} alt="" />
              <img src={jss} alt="" />
              <img src={react} alt="" />
              <img src={tailwind} alt="" />
              <img src={redux} alt="" />
              <img src={git} alt="" />
            </div>

            <div className="flex justify-between items-center mt-5 sm:p-2">
              <h2 className="font-semibold">HTML</h2>
            </div>
            <span className="w-[90%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">CSS & Tailwind</h2>
            </div>
            <span className="w-[80%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">JavaScript</h2>
            </div>
            <span className="w-[70%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>

          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">React</h2>
            </div>
            <span className="w-[60%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Redux</h2>
            </div>
            <span className="w-[50%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
          <div className="mt-8">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold">Git</h2>
            </div>
            <span className="w-[45%] h-2 mt-2 bg-gradient-to-t from-blue-500 to-cyan-500 block rounded-md" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Skill;
