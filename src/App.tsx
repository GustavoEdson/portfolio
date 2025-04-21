import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Project } from "./components/Project";

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
      <Project />
    </>
  );
}

export default App;
