import { Nav } from "./components/Nav";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Project } from "./components/Project";
import { motion } from "motion/react";

function App() {
  return (
    <>
      <Nav logo="gustavo edson" />
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Home
          name="gustavo edson"
          text="A skilled web developer,
              crafting and managing websites 
              and web applications to ensure 
              the success of the entire product with finesse."
        />
      </motion.div>
      <About />
      <Project />;
    </>
  );
}

export default App;
