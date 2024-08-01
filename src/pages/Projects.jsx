import ProjectCard from '../components/ProjectCard';
import '../styles/pages/projects.css';

const Projects = () => {
  return (
    <div className='main-container'>
      <div className='page-container'>
        <section className='projects-section'>
          <h1 className='header-text'>Projects</h1>
          <div className='projects-content'>
            <ProjectCard
              title='Test'
              description='Lorem ipsum odor amet, consectetuer adipiscing elit. Primis mi
                tempus parturient gravida pulvinar; lectus finibus lectus.
                Himenaeos ridiculus'
              imageUrl='https://picsum.photos/400'
            />
            <ProjectCard
              title='Test'
              description='Lorem ipsum odor amet, consectetuer adipiscing elit. Primis mi
                tempus parturient gravida pulvinar; lectus finibus lectus.
                Himenaeos ridiculus'
              imageUrl='https://picsum.photos/400'
            />
            <ProjectCard
              title='Test'
              description='Lorem ipsum odor amet, consectetuer adipiscing elit. Primis mi
                tempus parturient gravida pulvinar; lectus finibus lectus.
                Himenaeos ridiculus'
              imageUrl='https://picsum.photos/400'
            />
            <ProjectCard
              title='Test'
              description='Lorem ipsum odor amet, consectetuer adipiscing elit. Primis mi
                tempus parturient gravida pulvinar; lectus finibus lectus.
                Himenaeos ridiculus'
              imageUrl='https://picsum.photos/400'
            />
            <ProjectCard
              title='Test'
              description='Lorem ipsum odor amet, consectetuer adipiscing elit. Primis mi
                tempus parturient gravida pulvinar; lectus finibus lectus.
                Himenaeos ridiculus'
              imageUrl='https://picsum.photos/400'
            />
            <ProjectCard
              title='Test'
              description='Lorem ipsum odor amet, consectetuer adipiscing elit. Primis mi
                tempus parturient gravida pulvinar; lectus finibus lectus.
                Himenaeos ridiculus'
              imageUrl='https://picsum.photos/400'
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;
