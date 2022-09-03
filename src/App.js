import './styles/main.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Components/Header';
import ProfileCard from './Components/ProfileCard';
import ProjectCard from './Components/ProjectCard';
import projectsData from "./projects.json";
import { Carousel } from 'react-responsive-carousel';

function App() {
  return (
    <div className="home">
      <Header />
      <Container>
        <Row>
          <Col md="3">
            <ProfileCard
              avatar="/mehmet-buber.jpg"
              alt="Mehmet Büber Front End"
            />
          </Col>
          <Col md="9">
            <section>
              <h3>Front End Developer</h3>
              <article id="about">
                <h3>Ben Kimim?</h3>
                <p>
                  1995 İstanbul doğumluyum.Lise eğitimimi bilişim teknolojileri temelleri bölümünde tamamladım.Lise eğitimimden sonra
                  Kırklareli Üniversitesi Pınarhisar Meslek Yüksek Okulu Bilgisayar Programcılığı üzerine eğitimimi tamamladım. Bir süre ara vermek zorunda kaldığım
                  yazılım sektörüne tekrardan giriş yaptım.Öncelikle kendimi Front End sektöründe ilerlemek için HTML5 öğrendim. HTML5 öğrendikten sonra kullanıcıya
                  daha güzel bir arayüz ekranı göstermek için Css öğrenmeye başladım.Kendimi Javascript alanında geliştirmeye ve bu arada Javascript ile birlikte React öğrenmeye başladım.
                </p>
              </article>

              <article>
                <h3>Eğitim</h3>
                <p>Magna nulla anim sit occaecat do aliquip laborum est. Adipisicing anim culpa veniam sit commodo duis dolore laboris eu. Commodo aliqua minim irure aute aliquip nulla culpa. Aute occaecat incididunt nulla in enim. Ad eu ea incididunt pariatur anim veniam eiusmod sint proident ea.
                </p>
              </article>

              <article id="skills">
                <h3>Yetenekler</h3>
                <p>Magna nulla anim sit occaecat do aliquip laborum est. Adipisicing anim culpa veniam sit commodo duis dolore laboris eu. Commodo aliqua minim irure aute aliquip nulla culpa. Aute occaecat incididunt nulla in enim. Ad eu ea incididunt pariatur anim veniam eiusmod sint proident ea.
                </p>
              </article>

              <div id="projects">
                <Carousel
                  autoPlay
                  infiniteLoop
                  interval={1500}
                  swipeable
                  emulateTouch
                >
                  {projectsData.map((item) =>
                    <ProjectCard
                      key={item.id}
                      alt={item.title}
                      description={item.description}
                      picture={item.image}
                      title={item.title}
                      stacks={item.stacks}
                    />
                  )}
                </Carousel>
              </div>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
