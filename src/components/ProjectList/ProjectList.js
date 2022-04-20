import React, { useEffect, useState } from "react";
import "./ProjectList.css";
const ProjectList = (props) => {
  return (
    <React.Fragment>
      <h2>Proyectos</h2>
      <section className="ProjectList">
        <ul className="ul">{props.projects.map(props.render)}</ul>
      </section>
    </React.Fragment>
  );
};
export default ProjectList;
