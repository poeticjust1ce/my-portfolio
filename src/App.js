import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import Works from "./pages/Works";
import Contact from "./pages/Contact";

const App = () =>{
  return (
    <Router>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/works' element={<Works />}/>
      <Route path='/contact' element={<Contact />}/>
     </Routes>
    <Footer />
    </Router>
  );
}

export default App;
