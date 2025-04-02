import React, { useEffect, useRef } from 'react';
import '../styles/projetos.css';
import imagemProjeto from '../imagens/site.png';
import gsap from 'gsap';

function Projetos() {
  const secaoProjetosRef = useRef(null);

  // Observador para ativar a animação de entrada
  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          secaoProjetosRef.current.classList.add('visivel');
          observador.unobserve(secaoProjetosRef.current);
        }
      },
      { threshold: 0.1 }
    );
    if (secaoProjetosRef.current) {
      observador.observe(secaoProjetosRef.current);
    }
    return () => observador.disconnect();
  }, []);

  // Anima redimensionamento com GSAP
  useEffect(() => {
    const animarRedimensionamento = () => {
      gsap.to(secaoProjetosRef.current, {
        fontSize: window.innerWidth < 768 ? "1rem" : "1.2rem",
        duration: 2,
        ease: "power2.out"
      });
    };
    window.addEventListener("resize", animarRedimensionamento);
    animarRedimensionamento();
    return () => window.removeEventListener("resize", animarRedimensionamento);
  }, []);

  return (
    <section id="secaoProjetos" ref={secaoProjetosRef}>
      <div className="containerCentral">
        <h2>Projetos</h2>
        <div className="projetos">
          <div className="imagemProjeto">
            <img src={imagemProjeto} alt="Representação do projeto" />
          </div>
          <div className="detalhesProjeto">
            <div className="detalhesSuperior">
              <h3>Site de Vendas de Supermercado</h3>
              <p>
                Projeto de site de vendas de supermercado, com foco em funções de banco de dados, permitindo a inserção de produtos e variáveis e o gerenciamento dos mesmos, exigindo registro para uso, senhas protegidas por hash e funções especiais de admin. (ainda em desenvolvimento)
              </p>
              <div className="habilidadesProjeto">
                <i className="fab fa-php"></i>
                <i className="fab fa-css3-alt"></i>
                <i className="fas fa-database"></i>
                <i className="fab fa-html5"></i>
              </div>
            </div>
            <div className="detalhesInferior">
              <div className="linkProjeto">
                <a href="alguma maneira de demonstrar o projeto" target="_blank" rel="noreferrer">
                  Visualizar
                </a>
                <a href="https://github.com/Iago8991/site_vendas_supermercado" className="linkGithub" target="_blank" rel="noreferrer">
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
