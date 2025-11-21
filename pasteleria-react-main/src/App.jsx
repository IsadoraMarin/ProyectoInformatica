
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaginaInicio from './componentes/organisms/PaginaInicio';
import Catalogo from './componentes/molecules/Catalogo';
import CarritoDeCompras from './componentes/organisms/CarritoDeCompras';
import Registro from './componentes/organisms/Registro';
import Seguimiento from './componentes/organisms/Seguimiento';
import Sesion from './componentes/organisms/Sesion';
import Extras from './componentes/organisms/Extras';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PaginaInicio />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/carrito" element={<CarritoDeCompras />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/sesion" element={<Sesion />} />
        <Route path="/extras" element={<Extras />} />
      </Routes>
    </Router>
  );
}

export default App;
