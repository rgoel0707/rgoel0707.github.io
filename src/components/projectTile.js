import React from "react";

export default function ProjectTile({ project }) {

  const handleImgErr = (e) => {
    let badImg = document.getElementById(e.target.id);
    badImg.src = './default-placeholder.png';

  }

  return (

    <div key={project.id} className="project-tile">
      <a href={project.path} target="_blank" rel="noreferrer">
        <div className="img-div">
          <img src={project.thumbnail} id={`img-${project.id}`} className="project-image" alt='thumbnail' onError={handleImgErr} />
        </div>
        <div className="title-div">
          <p className="project-name">{project.name}</p>
        </div>
        <div className="description-div">
          <p className="project-description">{project.description}</p>
        </div>
      </a>
    </div >

  )
}
