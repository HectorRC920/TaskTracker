import React, { useEffect, useState } from "react";
import "./ProjectList.css";
const ProjectList = (props) => {
  return (
    <React.Fragment>
      <h2>Proyectos</h2>
      {!!props.error && !!props.projects  && <h2>{props.error}</h2>}
      {!!props.projects && !props.error && 
      <section className="ProjectList">
        <ul className="ul">{props.projects.map(props.render)}</ul>
      </section>}
    </React.Fragment>
  );
};
export default ProjectList;
