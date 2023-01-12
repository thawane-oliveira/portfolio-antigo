
import React from 'react';
import '../styles/Project.css';
import trivia from '../images/trivia.png';
import wallet from '../images/wallet.png';
import adopt from '../images/adopt.png';

function Project() {

  return (
    <main id="project" className='project-container'>

      <h2 className='project-h2'>Projetos em destaque</h2>
      <div className='project-img-container'>
        <figure>
          <a href="https://trivia-liard-theta.vercel.app/" target="_blank" rel="noreferrer">
            <img
              className='project-one'
              src={trivia}
              alt="Aplicação Trivia"
              />
              </a>
            <figcaption className='project-cap'>Trivia</figcaption>
        </figure>

        <figure>
        <a href="https://wallet-rust-beta.vercel.app/" target="_blank" rel="noreferrer">
          <img
            className='project-one'
            src={wallet}
            alt="Aplicação Wallet"
          />
          </a>
          <figcaption className='project-cap'>Your Wallet</figcaption>
        </figure>

        <figure>
        <a href="https://adopt-pets-ochre.vercel.app/" target="_blank" rel="noreferrer">
          <img
            className='project-one'
            src={adopt}
            alt="Aplicação Adopt Pets"
          />
          </a>
          <figcaption className='project-cap'>Adopt Pets</figcaption>
        </figure>
      </div>
    </main>
  );
}

export default Project;