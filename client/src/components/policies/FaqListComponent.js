import React from 'react'
import FaqComponent from "./FaqComponent";

function FaqListComponent(props) {
    const { faqs } = props
    return (!faqs ? null :
        <div className="faq-and-docs_faqs">
          <h2>FAQ</h2>
          {faqs.map((question, index) => (
            <FaqComponent
              question={question}
              key={`${question}${index}`}
            />
          ))}
        </div>
    )
}

export default FaqListComponent