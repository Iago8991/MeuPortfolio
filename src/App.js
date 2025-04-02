import React from 'react';
import Cabecalho from './componentes/cabecalho.js';
import PaginaPrincipal from './componentes/paginaPrincipal.js';
import Sobre from './componentes/sobre.js';
import Habilidades from './componentes/habilidades.js';
import Projetos from './componentes/projetos.js';
import Contato from './componentes/contato.js';

import './styles/App.css';

function App() {
  return (
    <div>
      <Cabecalho />
      <PaginaPrincipal />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Contato />
    </div>
  );
}

export default App;
