// components/Navbar.jsx
import '../styles/components/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='links'>
        <li>Home</li>
        <li>Projects</li>
        <li>About</li>
        <li>Contact</li>
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
    </div>
  );
};

export default Navbar;
