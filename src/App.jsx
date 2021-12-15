import Index1 from "./pages/Index1";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import Index from "./pages/Index";
import IndexAdmin from "./pages/admin/Index";
import Usuarios from "./pages/admin/usuarios/Usuarios";
import LayoutAdmin from "./layout/LayoutAdmin";
import Layout from "./layout/Layout";
import Arley from "./pages/admin/usuarios/Arley";
import UsuarioGenerico from "./pages/admin/usuarios/UsuarioGenerico";
import { UserContext } from "./context/user";
import { useState } from "react";
import { DarkContext } from "./context/dark";
import Configuracion from "./pages/Configuracion";

function App() {
  const [userData, setUserData] = useState({ nombre: "Arley", suma: 0 });
  const [dark, setDark] = useState(false);
  return (
    <DarkContext.Provider value={{dark, setDark}}>
      <UserContext.Provider value={{ userData, setUserData }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route path="" element={<Index />} />
              <Route path="contacto" element={<Contacto />} />
              <Route path="hooks1" element={<Index1 />} />
              <Route path="configuracion" element={<Configuracion />} />
            </Route>
            <Route path="/admin" element={<LayoutAdmin />}>
              <Route path="" element={<IndexAdmin />} />
              <Route path="usuarios" element={<Usuarios />} />
              <Route path="usuarios/arley" element={<Arley />} />
              <Route
                path="usuarios/:nombreUsuario"
                element={<UsuarioGenerico />}
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </DarkContext.Provider>
  );
}

export default App;
