import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from '../src/Components/Navbar'
import Footer from '../src/Components/Footer/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Terminal from "./Pages/Terminal";
import Contact from './Pages/Contact'
import Error from "./Pages/Error";
import SignIn from "./Pages/SignIn";


function App() {
  return (
    <BrowserRouter>
      
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/terminal" element={<Terminal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
