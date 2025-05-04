import React, { useEffect, useRef } from 'react';
import '../styles/sobre.css';
import Ilustracao from '../imagens/ilustracao.png';
import gsap from 'gsap';

function Sobre() {
  const secaoRef = useRef(null);
  const conteudoRef = useRef(null);   

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          secaoRef.current.classList.add('visivel');
          observador.unobserve(secaoRef.current);
        }
      },
      { threshold: 0.1 }
    );

    if (secaoRef.current) {
      observador.observe(secaoRef.current);
    }

    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    const ajustarFonte = () => {
      gsap.to(conteudoRef.current, { 
        fontSize: window.innerWidth < 900 ? "1rem" : "1.2rem", 
        duration: 1.5, 
        ease: "power2.out" 
      });
    };

    window.addEventListener("resize", ajustarFonte);
    ajustarFonte(); 

    return () => window.removeEventListener("resize", ajustarFonte);
  }, []);

  return (
    <section id="secaoSobreMim" ref={secaoRef}>
      <div className="imagem">
        <img src={Ilustracao} alt="Ilustração representativa" />
      </div>
      <div className="conteudo" ref={conteudoRef}>
        <h2>Sobre Mim</h2>
        <p>
          Estudante de Análise e desenvolvimento de sistemas na Faculdade Unicid. Gosto muito de programação e estou sempre buscando 
          aprender mais para me qualificar para o mercado. Não possuo experiência 
          profissional ainda, mas estou constantemente construindo projetos práticos 
          para demonstrar minhas habilidades e minha paixão pela programação. Possuo 
          habilidades sólidas em HTML, CSS, PHP, Java, JavaScript, Python, C, SQL, 
          MySQL, Git, GitHub e também conhecimento em algumas ferramentas de 
          back-end, como Node.js, PostgreSQL e Java.
        </p>
      </div>
    </section>
  );
}

export default Sobre;
