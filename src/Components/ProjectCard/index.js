function ProjectCard({ picture, alt, title, description }) {
  return (
    <div>
      <a href="#">
        <img src={picture} alt={alt} />
        <p>{title}</p>
        <p>{description}</p>
      </a>
    </div>
  );
}

export default ProjectCard;
