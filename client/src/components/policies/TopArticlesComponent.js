import React from "react";
import { Link } from "react-router-dom";

function TopArticlesComponent(props) {
  const { documents } = props;
  console.log(props);
  //const topDocuments = documents.slice(0, 2);
  //console.log(topDocuments);
  return !documents ? null : (
    <div className="policies-toparticles">
      <h3>Top Documents</h3>
      {documents.map((document, index) => (
        <Link to="/" key={`${document}${index}`}>
          <div
            className="policies-toparticles_article"
          >
            <div>
            <h2>{document.title}</h2>
            {/* <p>{document.snippet}</p> */}
            <p>{document.date}</p>
            </div>
            arrow
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TopArticlesComponent;
