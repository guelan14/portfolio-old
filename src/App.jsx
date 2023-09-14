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
      <Home />
      <NavBar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

//<Footer />
//<ContadorApp value={0} />
//<ListadoApp />F
