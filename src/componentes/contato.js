import React, { useEffect, useRef } from 'react';
import '../styles/contato.css';
import gsap from 'gsap';

function Contato() {
    const contatoRef = useRef([]);

    useEffect(() => {
        contatoRef.current.forEach((item) => {
            gsap.fromTo(
                item,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.3 }
            );
        });
    }, []);

    return (
        <section id="sectionContato">
            <h2>Contatos</h2>
            <div className="contatoContainer">

                {/* Telefone - Link para WhatsApp */}
                <a href="https://wa.me/5511913734356"
                   target="_blank"
                   rel="noreferrer"
                   className="contatoItem"
                   ref={(el) => contatoRef.current[0] = el}
                   onMouseEnter={() => gsap.to(contatoRef.current[0], { scale: 1.1, duration: 0.3 })}
                   onMouseLeave={() => gsap.to(contatoRef.current[0], { scale: 1, duration: 0.3 })}>
                    <i className="fas fa-phone"></i>
                    <div className="contatoTexto">
                        <h3>Telefone</h3>
                        <p>(55) 11 91373-4356</p>
                    </div>
                </a>

                {/* E-mail */}
                <a href="mailto:iagoadsprogramer@gmail.com"
                   className="contatoItem"
                   ref={(el) => contatoRef.current[1] = el}
                   onMouseEnter={() => gsap.to(contatoRef.current[1], { scale: 1.1, duration: 0.3 })}
                   onMouseLeave={() => gsap.to(contatoRef.current[1], { scale: 1, duration: 0.3 })}>
                    <i className="fas fa-envelope"></i>
                    <div className="contatoTexto">
                        <h3>E-mail</h3>
                        <p>iagoadsprogramer@gmail.com</p>
                    </div>
                </a>

                {/* Currículo */}
                <a href="caminho/para/curriculo.pdf"
                   target="_blank"
                   rel="noreferrer"
                   className="contatoItem"
                   ref={(el) => contatoRef.current[2] = el}
                   onMouseEnter={() => gsap.to(contatoRef.current[2], { scale: 1.1, duration: 0.3 })}
                   onMouseLeave={() => gsap.to(contatoRef.current[2], { scale: 1, duration: 0.3 })}>
                    <i className="fas fa-file"></i>
                    <div className="contatoTexto">
                        <h3>Currículo</h3>
                        <p>Visualizar</p>
                    </div>
                </a>

            </div>
        </section>
    );
}

export default Contato;
