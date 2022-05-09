import React from 'react'
import FaqComponent from "./FaqComponent";

function FaqListComponent(props) {
    const { faqs } = props
    return (!faqs ? null :
        <div className="policies-faqs">
          <h3>FAQ</h3>
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