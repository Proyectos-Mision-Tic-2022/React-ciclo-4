import Index1 from "./pages/Index1";
import "./styles/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./pages/Contacto";
import Index from "./pages/Index";
import IndexAdmin from "./pages/admin/Index";
import Usuarios from "./pages/admin/usuarios/Usuarios";
import LayoutAdmin from "./layout/LayoutAdmin";
import Layout from './layout/Layout';
import Arley from "./pages/admin/usuarios/Arley";
import UsuarioGenerico from './pages/admin/usuarios/UsuarioGenerico';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path="" element={<Index />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/hooks1" element={<Index1 />} />
        </Route>
        <Route path="/admin" element={<LayoutAdmin />}>
          <Route path="" element={<IndexAdmin />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="usuarios/arley" element={<Arley />} />
          <Route path="usuarios/:nombreUsuario" element={<UsuarioGenerico />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
