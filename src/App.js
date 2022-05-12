import { ThemeProvider } from "@mui/system";
import { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import MainContent from "./components/MainContent";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import { mainTheme } from "./themes/theme";

function App() {
  const [scroll, setScroll] = useState("");
  const elementScrollData = () => {
    if (window.scrollY >= 50) {
      setScroll("scroll-header");
    } else {
      setScroll("");
    }
  };

  return (
    <div onWheel={elementScrollData}>
      <ThemeProvider theme={mainTheme}>
        <NavBar scroll={scroll} />
        <MainContent>
          <Home />
          <About />
          <Projects />
          <Contact />
        </MainContent>
      </ThemeProvider>
    </div>
  );
}

export default App;
