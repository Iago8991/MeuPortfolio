import React, { useEffect, useRef } from 'react';
import '../styles/habilidades.css';
import logoC from '../imagens/c-logo.jpg';
import gsap from 'gsap';

function Habilidades() {
  const secaoRef = useRef(null);
  const itensRef = useRef([]);

  useEffect(() => {
    const observador = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          secaoRef.current.classList.add('visible');
          itensRef.current.forEach((item, indice) => {
            setTimeout(() => {
              item.classList.add('visible');
            }, indice * 200);
          });
          observador.unobserve(secaoRef.current);
        }
      },
      { threshold: 0.3, rootMargin: '0px 0px -100px 0px' }
    );
    if (secaoRef.current) {
      observador.observe(secaoRef.current);
    }
    return () => observador.disconnect();
  }, []);

  useEffect(() => {
    const animarRedimensionamento = () => {
      gsap.to(secaoRef.current, {
        fontSize: window.innerWidth < 768 ? "1rem" : "1.3rem",
        duration: 1.5,
        ease: "power2.out"
      });
    };
    window.addEventListener("resize", animarRedimensionamento);
    animarRedimensionamento();
    return () => window.removeEventListener("resize", animarRedimensionamento);
  }, []);

  return (
    <section id="sectionHabilidades" ref={secaoRef}>
      <h2 className="titulo-habilidades">Habilidades</h2>
      <div className="containerHabilidades">
        <div className="habilidade" ref={(el) => (itensRef.current[0] = el)}>
          <h3>HTML5</h3>
          <i className="fab fa-html5"></i>
        </div>
        <div className="habilidade" ref={(el) => (itensRef.current[1] = el)}>
          <h3>CSS3</h3>
          <i className="fab fa-css3-alt"></i>
        </div>
        <div className="habilidade" ref={(el) => (itensRef.current[2] = el)}>
          <h3>PHP</h3>
          <i className="fab fa-php"></i>
        </div>
        <div className="habilidade" ref={(el) => (itensRef.current[3] = el)}>
          <h3>MySQL</h3>
          <i className="fas fa-database"></i>
        </div>
        <div className="habilidade" ref={(el) => (itensRef.current[4] = el)}>
          <h3>JavaScript</h3>
          <i className="fab fa-js"></i>
        </div>
        <div className="habilidade" ref={(el) => (itensRef.current[5] = el)}>
          <h3>Java</h3>
          <i className="fab fa-java"></i>
        </div>
        <div className="habilidade" ref={(el) => (itensRef.current[6] = el)}>
          <h3>PYTHON</h3>
          <i className="fab fa-python"></i>
        </div>
        <div className="habilidade" ref={(el) => (itensRef.current[7] = el)}>
          <h3>C</h3>
          <img src={logoC} alt="C" className="iconeC" />
        </div>
        <div className="habilidade" ref={(el) => (itensRef.current[8] = el)}>
          <h3>GIT</h3>
          <i className="fab fa-git-alt"></i>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;
