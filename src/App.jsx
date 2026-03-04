import Navbar from './components/navbar'
import Home from './components/home'
import Portfolio from './components/portfolio'
import Services from './components/services'
import About from './components/about'
import Contact from './components/contact'
import ScrollReveal from './components/ScrollReveal'

function App() {
  return (
    <div className="App">
      <ScrollReveal />
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
