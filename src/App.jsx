import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/mainpage'
import ContactForm from "./pages/contact";
function App() {

  return (
    <>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/contact" element={<ContactForm />} />
    </Routes>
    </>
  )
}

export default App
