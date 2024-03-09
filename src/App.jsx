import "./App.css";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import ArrowDown from "./assets/arrow-down.svg";
import Project from "./components/Project";
import Skill from "./components/Skill";
import About from "./components/About";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import ContactSection from "./components/ContactSection";
import bg from "./assets/background.jpg";

function App() {
  const [scrolling, setScrolling] = useState(false);

  const onPageScroll = () => {
    if (window.pageYOffset > 200) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onPageScroll);
    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="max-w-4xl m-auto relative ">
      <Navbar></Navbar>
      <main className="relative mt-28">
        <Intro></Intro>
        <Project></Project>
        <Skill></Skill>
      </main>
      <About></About>
      <Contact></Contact>
      <ContactSection></ContactSection>
      <Footer></Footer>
      {scrolling && (
        <button
          className="fixed block right-8 bottom-0 w-24"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img src={ArrowDown} />
        </button>
      )}
    </div>
  );
}

export default App;
