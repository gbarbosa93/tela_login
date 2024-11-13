import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom" // para rotearmos nossas páginas, usamos 
import Cadastro from "./pages/cadastro"
import Login from "./pages/login"
import ListarUsuarios from "./pages/lista"

function App() {


  return (
    <BrowserRouter>
      <Routes>
         
        <Route path="/" element={<Cadastro />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/listar-usuarios" element={<ListarUsuarios />}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App // sempre que criar um novo componente é preciso exportar
