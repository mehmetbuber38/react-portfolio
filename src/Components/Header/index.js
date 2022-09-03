import { Button } from 'react-bootstrap';
import './index.scss';

function Header() {
  return (
    <header className="header">
      <a href="#about">Hakkımda</a>
      <a href="#skills">Yetenekler</a>
      <a href="#projects">Projeler</a>
      <a href="#contact">Iletişim</a>
    </header>
  );
}

export default Header;
