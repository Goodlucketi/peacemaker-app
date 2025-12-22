import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      <Routes>
        <Route 
          path="/" 
          element = { 
              <Home /> 
            }
        />
        <Route 
          path="/about" 
          element = { 
              <About /> 
            }
        />
        <Route 
          path="/contact" 
          element = { 
              <Contact /> 
            }
        />

      </Routes>

       <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  )
}

export default App
