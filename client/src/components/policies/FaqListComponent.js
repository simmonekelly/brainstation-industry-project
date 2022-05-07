import React from "react";
import FaqComponent from "./FaqComponent";

function FaqListComponent(props) {
  const { faqs } = props;
  console.log(faqs);
  return (!faqs ? null :
    <div className="policies-faq">
      <h3>FAQ</h3>
      {faqs.map((question, index) => (
        <FaqComponent
          question={question}
          key={`${question}${index}`}
        />
      ))}
    </div>
  );
}

export default FaqListComponent;
