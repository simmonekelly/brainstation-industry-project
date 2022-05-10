import React from "react";
import { Link } from "react-router-dom";
import { FaAngleRight } from 'react-icons/fa';


function DocsComponent(props) {
  const { documents } = props;

  return !documents ? null : (
    <div className="faq-and-docs_docs">
      <h2>Top Documents</h2>
      {documents.map((document, index) => (
        <Link to="/" key={`${document}${index}`}>
          <div
            className="faq-and-docs_docs-doc"
          >
            <div>
            <p className="faq-and-docs_docs-doc_title">{document.title}</p>
            {/* <p>{document.snippet}</p> */}
            <p>{document.date}</p>
            </div>
            <FaAngleRight /> 
          </div>
        </Link>
      ))}
    </div>
  );
}

export default DocsComponent;
