const Project = ({ projectItem }) => {
    return (
    <div className="project-tile" data-content={projectItem.dataContent}>
        <a href={projectItem.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            id={projectItem.id}
            alt={projectItem.alt} 
            className="project-img">
        <img src={projectItem.image} alt={projectItem.alt}></img>
        </a>
    </div>
    )
}

export default Project