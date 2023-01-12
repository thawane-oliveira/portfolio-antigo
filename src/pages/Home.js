import React from 'react';
import '../styles/Home.css';
import clefairy from '../images/clefairy.png';

function Home() {
   
        return (
          <>
            <main className='home-container'>
              <h3 className='home-h3'>Desenvolvedora Full Stack</h3>
              <h1 className='home-h1'>Olá, me chamo <span className='home-name'> Thawane</span></h1>
              <p className='home-p'>
                Desenvolvedora full stack em formação por intermédio da Trybe.
                Em 2022 dei início a uma transição de carreira: trabalhava como funcionária pública do setor administrativo na Prefeitura Municipal de Osasco, e decidi seguir e unir minhas paixões por arte e tecnologia por intermédio de um curso de Desenvolvimento Web Full Stack.
                <br/>
                Como mencionado, minhas paixões são arte e tecnologia. Possuo graduação tecnóloga em Design de Moda, onde tive o primeiro contato com a união de tecnologia e arte. Já trabalhei como desenhista tradicional freelancer também.
              </p>
              <aside className='home-aside'>
              <img src={clefairy} alt="alt da img" className='home-img'/>
              </aside>
              </main>
              </>
        );
}

export default Home;