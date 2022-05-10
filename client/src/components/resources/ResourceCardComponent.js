import React from "react";
import { Link } from "react-router-dom";

const baseUrl = "http://localhost:8080/";

function ResourceCardComponent(props) {
  const { resource } = props;

  return (
    <Link to={`/resources/${resource.category}`}>
      <div className="resources-container">
        <img src={`${baseUrl}/images/icons/Legal_Icon_Screen2.svg`} />
        <div className="resources-content">
          <h2>{resource.title}</h2>
          <p>{resource.description}</p>
        </div>
      </div>
    </Link>
  );
}

export default ResourceCardComponent;
