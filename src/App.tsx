import "./App.css";
import { Nav } from "./components/nav";
import { About } from "./components/Home";

function App() {
  return (
    <>
      <Nav logo="gustavo edson" />
      <About
        name="gustavo edson"
        text="A skilled web developer,
              crafting and managing websites 
              and web applications to ensure 
              the success of the entire product with finesse."
      />
    </>
  );
}

export default App;
