import './index.scss';

function ProjectCard({ picture, alt, title, description, url, stacks }) {
  return (
    <div className="project-card">
      <a href={url}>
        <img src={picture} alt={alt} />
        <p>{title}</p>
        <p>{description}</p>
        <p>{stacks}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
