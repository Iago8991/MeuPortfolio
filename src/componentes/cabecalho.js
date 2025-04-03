import React, { useState, useEffect } from 'react';
import '../styles/cabecalho.css';

function Cabecalho() {
  // Estado para controlar se o menu está aberto
  const [menuAberto, setMenuAberto] = useState(false);
  // Estado que indica se a tela é pequena (<= 768px)
  const [telaPequena, setTelaPequena] = useState(window.matchMedia("(max-width: 768px)").matches);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const tratarMudanca = (e) => {
      setTelaPequena(e.matches);
      if (!e.matches) setMenuAberto(false);
    };
    media.addEventListener('change', tratarMudanca);
    return () => media.removeEventListener('change', tratarMudanca);
  }, []);

  return (
    <header id="Cabecalho">
      <h1>
        Iago da Rocha Righ<span style={{ color: 'red' }}>{'{e}'}</span>tti
      </h1>

      {telaPequena ? (
        <div
          className={`menu-hamburguer ${menuAberto ? 'ativo' : ''}`}
          onClick={() => setMenuAberto(!menuAberto)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        <ul>
          <li><a href="#sectionPaginaPrincipal">Início</a></li>
          <li><a href="#secaoSobreMim">Sobre mim</a></li>
          <li><a href="#sectionHabilidades">Habilidades</a></li>
          <li><a href="#secaoProjetos">Projetos</a></li>
          <li><a href="#sectionContato">Contato</a></li>
        </ul>
      )}

      <nav className={`menu-lateral ${menuAberto ? 'aberto' : ''}`}>
        <ul>
          <li><a href="#sectionPaginaPrincipal" onClick={() => setMenuAberto(false)}>Início</a></li>
          <li><a href="#secaoSobreMim" onClick={() => setMenuAberto(false)}>Sobre mim</a></li>
          <li><a href="#sectionHabilidades" onClick={() => setMenuAberto(false)}>Habilidades</a></li>
          <li><a href="#secaoProjetos" onClick={() => setMenuAberto(false)}>Projetos</a></li>
          <li><a href="#sectionContato" onClick={() => setMenuAberto(false)}>Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Cabecalho;
