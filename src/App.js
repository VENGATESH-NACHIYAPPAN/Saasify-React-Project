import { Routes,Route } from "react-router-dom";

import Menubar from "./Components/Header/Header";
import Home from "./Components/Homemenu/Home";
import Footer from "./Components/Footer/Footer";
import Formpage from "./formsec/form";
import About from "./Components/Aboutmenu/About";
import Blog from "./Components/Blogmenu/Blog";
import Contact from "./Components/Contactmenu/Contact";
import Feature from "./Components/Featuremenu/Feature";
import Service from "./Components/Servicemenu/Service";


function App() {
  return (
      <>
      <Menubar/>

      <Routes>
        <Route  path="/" element={ <Home/>}/>
        <Route path="/About" element={ <About/>}/>
        <Route path="/Service" element={<Service/>} />
        <Route path="/Feature" element={ <Feature/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      
      <Footer/>
           {/* <Formpage/> */}
      </>

  );
}

export default App;
