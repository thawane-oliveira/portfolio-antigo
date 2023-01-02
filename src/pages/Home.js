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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
              <aside className='home-aside'>
              <img src={clefairy} alt="alt da img" className='home-img'/>
              </aside>
              </main>
              </>
        );
}

export default Home;