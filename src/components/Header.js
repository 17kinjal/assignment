import DeepsyncLogo from '../assets/deepsync.png';
import '../assets/styles/header.scss';

const Footer = () => {
  return (
    <header className='header-container'>
      <img src={DeepsyncLogo} className="deepsync-logo" alt='deepsynclogo' />
    </header>
  )
}

export default Footer;