import React, { useState, useEffect, useRef } from 'react';
import '../styles/paginaPrincipal.css';
import gsap from 'gsap';

function PaginaPrincipal() {
  const textoCompleto = "Eu sou Iago da rocha righetti Desenvolvedor Full-Stack".trim();
  const [textoDigitado, setTextoDigitado] = useState("");
  const secaoRef = useRef(null);

  function destacarPalavras(texto) {
    return texto
      .replace(/Eu/g, '<span class="red">Eu</span>')
      .replace(/Full-Stack/g, '<span class="red">Full-Stack</span>');
  }

  useEffect(() => {
    for (let i = 0; i < textoCompleto.length; i++) {
      setTimeout(() => {
        setTextoDigitado(prev => prev + textoCompleto[i]);
      }, 100 * i);
    }
  }, [textoCompleto]);

  const textoComDestaque = destacarPalavras(textoDigitado);

  useEffect(() => {
    const animarRedimensionamento = () => {
      gsap.to(secaoRef.current, {
        fontSize: window.innerWidth < 768 ? "1.5rem" : "2rem",
        duration: 1.5,
        ease: "power2.out"
      });
    };
    window.addEventListener("resize", animarRedimensionamento);
    animarRedimensionamento();
    return () => window.removeEventListener("resize", animarRedimensionamento);
  }, []);

  return (
    <section id="sectionPaginaPrincipal" ref={secaoRef}>
      <h1 dangerouslySetInnerHTML={{ __html: textoComDestaque }} />
      <div className="redeSocial">
        <a href="https://github.com/Iago8991" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://www.linkedin.com/in/iago-righetti-179703337/" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin"></i> Linkedin
        </a>
      </div>
    </section>
  );
}

export default PaginaPrincipal;
