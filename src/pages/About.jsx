import TechList from '../components/TechList';
import '../styles/pages/about.css';

const About = () => {
  return (
    <div className='main-container'>
      <div className='page-container'>
        <section className='about-section'>
          <div className='about-content'>
            <div>
              <h1 className='header-text'>About me</h1>
              <p className='about-text'>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Primis mi
                tempus parturient gravida pulvinar; lectus finibus lectus.
                Himenaeos ridiculus urna, ipsum magna malesuada viverra.
                Interdum ultrices natoque gravida sed mus, urna leo. Netus
                varius ultricies ad, hac hac sagittis molestie. Natoque gravida
                vestibulum dictum phasellus phasellus; commodo nisl est. Tortor
                curabitur sapien habitant orci mus sociosqu ultricies. Praesent
                vehicula luctus quisque phasellus habitant.
                <br />
                <br />
                Habitasse inceptos nulla id a facilisi aenean curae. Nunc
                parturient blandit porta rhoncus quam, augue sociosqu enim.
                Commodo magnis nam dignissim auctor hac nullam per. Velit odio
                lacinia montes vel tempor sit quisque. Curae est natoque velit
                aptent id dui justo non eros. Ad fames rutrum augue ultrices
                aenean. Duis tincidunt laoreet ullamcorper vivamus euismod
                etiam. In per facilisi scelerisque scelerisque mollis nostra
                nisl tempor molestie.
                <br />
                <br />
                Ad hac odio etiam elit natoque nulla eget scelerisque at. Vel
                consequat senectus platea orci est; neque amet luctus integer.
                Dui leo rutrum vitae erat molestie quis. Bibendum arcu porta
                pulvinar aliquam taciti vivamus. Habitant nunc lectus magnis
                ornare sagittis molestie eleifend. Non iaculis aliquam inceptos
                eget aliquet elementum pharetra. Phasellus ligula primis euismod
                vestibulum sit; cursus dis. Tortor pellentesque orci ipsum
                ornare ante.
              </p>
            </div>
            <img
              src='https://picsum.photos/400/600'
              alt='Me'
              className='about-image'
            />
          </div>
        </section>
        <section className='tech-section'>
          <div className='tech-content'>
            <div>
              <h2 className='header-text'>Technologies</h2>
              <TechList />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
