//import { NavBar, Base, Footer, ContadorApp } from "./components/";
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Projects } from "./pages/Projects";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { ContadorApp } from "./pruebas/ContadorApp";
import { ListadoApp } from "./pruebas/ListadoApp";
import { UserApp } from "./pruebas/UserApp";

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
