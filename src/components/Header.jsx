import Navbar from '../components/Navbar';
import '../styles/components/header.css';
import codingIcon from '../assets/coding-icon.svg';

const Header = () => {
  return (
    <div className='header'>
      <img src={codingIcon} alt='Coding Icon' className='header-logo' />
      <Navbar />
    </div>
  );
};

export default Header;
