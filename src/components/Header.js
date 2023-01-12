import '../styles/Header.css';

function Header() {

    return (
        <header className='header-header'>
            <ul className='header-ul'>
            <li><a  className='header-about' href='#about'>Sobre</a></li>
            <li><a  className='header-projects' href='#project'>Projetos</a></li>
            <li><a  className='header-contact' href='#contact'>Contato</a></li>
            </ul>
        </header>
    );
}

export default Header;