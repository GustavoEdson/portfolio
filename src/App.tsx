import "./App.css";
import { Nav } from "./components/nav";
import { Introduction } from "./components/Home";
import { Skills } from "./components/Skills";
import { About } from "./components/About";

function App() {
  return (
    <>
      <Nav logo="gustavo edson" />
      <Introduction
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
