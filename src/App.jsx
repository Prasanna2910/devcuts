import { useEffect } from "react";
import Navbar from './components/navbar'
import Home from './components/home'
import Portfolio from './components/portfolio'
import Services from './components/services'
import About from './components/about'
import Contact from './components/contact'

function App() {

  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active"); // keeps animation while scrolling up & down
          }
        });
      },
      {
        threshold: 0.15
      }
    );

    reveals.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Portfolio />
      <Services />
      <About />
      <Contact />
    </div>
  );
}

export default App;
