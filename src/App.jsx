import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQPage from "./pages/FAQPage";
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
        <Route 
          path="/faqs" 
          element = { 
              <FAQPage /> 
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
