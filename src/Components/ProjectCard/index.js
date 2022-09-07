import './index.scss';

function ProjectCard({ picture, alt, title, description, url, stacks }) {
  return (
    <div className="project-card">
      <a href={url} target="_blank" title={title}>
        <img src={picture} alt={alt} />
        <p className='project-card__title'>{title}</p>
        <p>{description}</p>
        <p>{stacks}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
