//import { NavBar, Base, Footer, ContadorApp } from "./components/";
import { Home } from "./components/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Proyects } from "./components/Proyects";
import { About } from "./components/About";
import { ContadorApp } from "./pruebas/ContadorApp";
import { ListadoApp } from "./pruebas/ListadoApp";
import { UserApp } from "./pruebas/UserApp";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Proyects />
      <About />
      <Footer />
    </>
  );
}

export default App;

//<Footer />
//<ContadorApp value={0} />
//<ListadoApp />F
