import React from "react";

function About() {
  return (
    <section className="py-8" id="aboutme">
      <div className="container m-auto px-16">
        <h2 className="text-2xl text-center font-semibold">About me</h2>
        <div className="mt-12 relative before:absolute before:top-0 before:left-16 before:rounded-full before:bottom-10 sm:before:bottom-2 before:w-1 before:bg-white">
          <div className="pl-24 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-[-47px] text-lg font-semibold">
              {" "}
              2023 -2024
            </h3>
            <p>
              Driven by a keen interest in technology, I dedicated six months to
              honing my skills in front-end development. During this period, I
              immersed myself in learning and applying the latest technologies
              and industry best practices. This experience has equipped me with
              a solid understanding of HTML, CSS, and JavaScript, enabling me to
              create visually appealing and user-friendly websites.
            </p>
          </div>
          <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-[-47px] text-lg font-semibold">
              {" "}
              2021-2024
            </h3>
            <p>
              I am currently enrolled at Bhakt Darshan Got.P.G. College, where I
              am pursuing my Bachelor of Art degree. My academic pursuits have
              exposed me to a diverse range of subjects, providing me with a
              well-rounded foundation in various fields. The interdisciplinary
              nature of my studies has allowed me to develop critical thinking
              and problem-solving skills.
            </p>
          </div>

          <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2020</h3>
            <p>
              I completed my intermediate education in 2020 from GIC Chelusain.
              This foundational phase not only provided me with a strong
              academic base but also instilled in me the importance of
              discipline and perseverance.
            </p>
          </div>
          <div className="pl-24 mt-12 relative before:w-4 before:h-4 before:bg-gradient-to-t before:from-blue-500 before:to-cyan-500 before:absolute before:rounded-full before:left-[58px]">
            <h3 className="absolute left-0 text-lg font-semibold">2018</h3>
            <p>
              I completed my high school education in 2020 from GIC Chelusain.
              This foundational phase not only provided me with a strong
              academic base but also instilled in me the importance of
              discipline and perseverance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
