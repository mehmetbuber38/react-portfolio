import { Button } from 'react-bootstrap';
import './index.css';

function Header() {
  return (
    <header className="header">
      <Button variant="primary">Hakkımda</Button>
      <Button variant="primary">Yetenekler</Button>
      <Button variant="primary">Projeler</Button>
      <Button variant="primary">Iletişim</Button>
    </header>
  );
}

export default Header;
