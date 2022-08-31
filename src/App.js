import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import ProfileCard from './Components/ProfileCard';
import ProjectCard from './Components/ProjectCard';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col md="3">
            <ProfileCard
              avatar="https://picsum.photos/id/1/200/300"
              alt="Mehmet Büber"
            />
          </Col>
          <Col md="9">
            <ProjectCard
              picture="https://picsum.photos/id/1/200/300"
              alt="Proje"
              title="Title"
              description="mehmet büber naslsınız ben ıyiyim mustafa bana react js öğretiyor."
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
