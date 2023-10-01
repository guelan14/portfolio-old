//import { NavBar, Base, Footer, ContadorApp } from "./components/";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <main className="scroll">
        <NavBar />
        <div className="scrollContainer">
          <Home />
        </div>
        <div className="scrollContainer">
          <About />
        </div>
        <div className="scrollContainer">
          <Projects />
        </div>
        <div className="scrollContainer">
          <Contact />
        </div>
      </main>
    </>
  );
}

export default App;
