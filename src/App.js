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

            <div className='about-links'>
              <a href="https://github.com/mehmetbuber38" title="Github Mehmet Büber" target="_blank" rel='noopener'>
                <img src="github.svg" />
              </a>

              <a href="https://www.linkedin.com/in/mehmet-buber/" title="Linkedin Mehmet Büber" target="_blank" rel='noopener'>
                <img src="linkedin.svg" />
              </a>
            </div>
          </Col>

          <Col md="9">
            <section>
              <h3>Front End Developer</h3>
              <article id="about">
                <h3>Ben Kimim?</h3>
                <p>
                  1995 İstanbul doğumluyum. Kırklareli Üniversitesi Bilgisayar Programcılığı üzerine eğitimimi tamamladım. Bir süre ara vermek zorunda kaldığım
                  yazılım sektörüne tekrardan giriş yaptım.Öncelikle kendimi Front End alanına yakın hissettiğim için yazılımın bu alanına yöneldim. Front End'in en güçlü teknolojisi olan Javascript ile dinamik ve yaratıcı sayfalar yapmayı seviyorum.
                  Javascript'in güçlü ekosistemindeki kütüphaneleri ile çok daha gelişmiş ve stabil projeler geliştirmek istiyorum.
                </p>
              </article>

              <article>
                <h3>Eğitim</h3>
                <p>
                  Kırklareli Üniversitesi - Bilgisayar Programcılığı 2020

                </p>
              </article>

              <article id="skills">
                <h3>Yetenekler</h3>
                <p> HTML5, CSS3, SCSS, Javascript, React.js, Bootstrap, Tailwind.css, Git
                </p>
              </article>

              <div id="projects">
                <Carousel
                  autoPlay
                  infiniteLoop
                  interval={1800}
                  swipeable
                  emulateTouch
                >
                  {projectsData.map((item) =>
                    <ProjectCard
                      key={item.id}
                      alt={item.title}
                      description={item.description}
                      picture={item.image}
                      stacks={item.stacks}
                      title={item.title}
                      url={item.url}
                    />
                  )}
                </Carousel>
              </div>

              <article id="contact">
                <h3>Iletisim</h3>
                <p>E-mail: <a href="mailto:mehmetbuberr3895@gmail.com">mehmetbuberr3895@gmail.com</a></p>
                <p>Linkedin: <a href="https://www.linkedin.com/in/mehmet-buber/">linkedin.com/in/mehmet-buber</a></p>
              </article>
            </section>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
