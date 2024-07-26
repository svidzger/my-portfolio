import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaCode } from 'react-icons/fa6';
import '../styles/components/navbar.css';

const Navbar = () => {
  return (
    <IconContext.Provider
      value={{ className: 'social-media-icons', size: '2em' }}
    >
      <nav className='navbar'>
        <FaCode className='logo' />
        <ul className='links'>
          <li>
            <Link to='/'>About me</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='social-media'>
          <a
            href='https://github.com/svidzger'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub />
          </a>
          <a
            href='https://www.linkedin.com/in/german-svidzinskij-12553ab5/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin />
          </a>
        </div>
      </nav>
    </IconContext.Provider>
  );
};

export default Navbar;
