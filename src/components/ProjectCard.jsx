import PropTypes from 'prop-types';
import '../styles/components/project-card.css';

const ProjectCard = ({ title, description, imageUrl }) => {
  return (
    <div className='project-card'>
      <img
        src={imageUrl}
        alt={`${title} thumbnail`}
        className='project-card-image'
      />
      <div className='project-card-content'>
        <h3 className='project-card-title'>{title}</h3>
        <p className='project-card-description'>{description}</p>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default ProjectCard;
