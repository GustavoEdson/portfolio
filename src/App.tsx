import "./App.css";
import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { Skills } from "./components/Skills";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Nav logo="gustavo edson" />
      <Home
        name="gustavo edson"
        text="A skilled web developer,
              crafting and managing websites 
              and web applications to ensure 
              the success of the entire product with finesse."
      />
      <About />
    </>
  );
}

export default App;
