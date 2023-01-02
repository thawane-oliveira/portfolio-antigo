
import React from 'react';
import '../styles/About.css';
import css from '../images/css3-original.svg';
import html from '../images/html5-original.svg';
import github from '../images/github-original.svg';
import git from '../images/git-original.svg';
import js from '../images/javascript-original.svg';
import jest from '../images/jest-plain.svg';
import redux from '../images/redux-original.svg';
import react from '../images/react-original.svg';
import vscode from '../images/vscode-original.svg';


function About() {
   
        return (
                <>
            <main id="about" className='about-container'>

              <h2 className='about-h2'>Sobre mim</h2>
              <p className='about-p'>
                Me chamo Thawane, tenho 26 anos e resido na cidade de São Paulo/SP.<br/>
                Atualmente estudo desenvolvimento web na Trybe, com o intuito de realizar transição de carreira e me tornar desenvolvedora full stack.
               Possuo graduação tecnólogo em Design de Moda, e minhas experiências anteriores envolveram comunicação e atendimento ao cliente diariamente, além de lógica e gerenciamento de tempo.<br/> 
                Fui voluntária em algumas edições da Ação do Coração, onde reaproveitava tecidos para costurar corações e doá-los no dia da campanha.
              </p>


              <h2 className='about-h2'>O que eu uso</h2>
              <div className='lang-container'>
                      <img
                      src={git}
                      className="lang-icon"
                      alt='git logo'
                      />
              <img
              src={github}
              className="lang-icon"
              alt='github logo'
              />
              <img
              src={vscode}
              className="lang-icon"
              alt='vscode logo'
              />
              <img
              src={react}
              className="lang-icon"
              alt='react logo'
              />
              <img
              src={js}
              className="lang-icon"
              alt='js logo'
              />
                <img
              src={redux}
              className="lang-icon"
              alt='redux logo'
              />
                 <img
              src={jest}
              className="lang-icon"
              alt='jest logo'
              />
              <img
              src={css}
              className="lang-icon"
              alt='css logo'
              />
              <img
              src={html}
              className="lang-icon"
              alt='html logo'
              />
              </div>
              </main>
              </>
        );
}

export default About;