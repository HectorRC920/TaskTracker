import React from "react";
import "./ProjectList.css";
const ProjectList = (props) => {
  return (
    <React.Fragment>
      <h2>Proyectos</h2>
      {props.error.length > 0 && props.error.length <= 0 && <h2>{props.error}</h2>}
      {props.projects.length >= 0 && props.error.length <= 0 && 
      <section className="ProjectList">
        <ul className="ul">{props.projects.map(props.render)}</ul>
      </section>}
    </React.Fragment>
  );
};
export default ProjectList;
