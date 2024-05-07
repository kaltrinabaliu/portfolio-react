import About from "./components/About";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Profile/>
      <About/>
      <Work/>
      <Experience/>
      <Contact/>
      <Footer/>

    </div>
  );
}

export default App;
