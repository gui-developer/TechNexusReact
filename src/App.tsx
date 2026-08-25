import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/home/Home"
import { Sobre } from "./pages/sobre/Sobre"
import Navbar from "./components/navbar/navbar"
import { Footer } from "./components/footer/footer"
import {Contato} from "./pages/contato/Contato"

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
      <Footer />
    </>
  )
}