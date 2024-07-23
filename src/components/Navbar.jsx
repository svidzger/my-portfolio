import { Link } from 'react-router-dom';
import codingIcon from '../assets/coding-icon.svg';
import '../styles/components/navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={codingIcon} alt='Coding Icon' className='logo' />
      <ul className='links'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/projects'>Projects</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
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
          GitHub
        </a>
        <a
          href='https://www.linkedin.com/in/german-svidzinskij-12553ab5/'
          target='_blank'
          rel='noopener noreferrer'
        >
          LinkedIn
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
