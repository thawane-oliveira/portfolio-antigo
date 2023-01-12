import '../styles/Footer.css';


function Footer() {

  return (
    <footer className='footer-container' id='contact'>
      <h3 className="footer-title">Contato</h3>
      <ul className='footer-ul'>
        <li><a
          className='footer-contact'
          href='mailto:thawaneapoliveira@gmail.com'
          target="_blank"
          rel="noreferrer">
          E-mail
        </a>
        </li>
        <li>
          <a
            className='footer-contact'
            href='https://www.linkedin.com/in/thawane'
            target='_blank'
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            className='footer-contact'
            href='https://github.com/thawane-oliveira'
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className='footer-contact'
            href='https://instagram.com/chicharroralado'
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;