import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Terminal from "./Pages/Terminal";
import Contact from './Pages/Contact';
import Error from "./Pages/Error";
import SignIn from "./Pages/SignIn";
import SignInStudent from "./Pages/SignInStudent";
import SignInTutor from "./Pages/SignInTutor";
import SignUpStudent from "./Pages/SignUpStudent";
import SignUpTutor from "./Pages/SignUpTutor";
import Tuition from "./Pages/Tuition";
// import { TuitionsContextProvider } from './Context/TuitionsContext';
// import { AuthContextProvider } from "./Context/AuthContext";
import { useAuthContext } from "./Hooks/useAuthContext";


function App() {

  const {user} = useAuthContext()

  return (
    <BrowserRouter>
      
    
         <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/terminal" element={<Terminal />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/signin" element={!user ? <SignIn /> : <Navigate to="/tuition"/>} />
              <Route path="/signinstudent" element={!user ? <SignInStudent /> : <Navigate to="/tuition"/>} />
              <Route path="/signintutor" element={!user ? <SignInTutor /> : <Navigate to="/tuition"/>} />
              <Route path="/signupstudent" element={!user ? <SignUpStudent /> : <Navigate to="/signinstudent"/>} />
              <Route path="/signuptutor" element={!user ? <SignUpTutor /> : <Navigate to="/signintutor"/>} />
              <Route path="/tuition" element={user ? <Tuition /> : <Navigate to="/signin"/>} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        
    </BrowserRouter>
  );
}

export default App;