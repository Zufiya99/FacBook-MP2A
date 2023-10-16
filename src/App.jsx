import Preloader from "./pages/Preloader";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Resume from "./pages/Resume";
import Work from "./pages/Work";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <div className="page new-skin">
        <Preloader />
        <div
          className="container opened"
          data-animation-in="fadeInLeft"
          data-animation-out="fadeOutLeft"
        >
          <Header />
          <Home />
          <About />
          <Resume />
          <Work />
          <Blog />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;
