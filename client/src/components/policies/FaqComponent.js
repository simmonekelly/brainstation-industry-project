import React from "react";

function FaqComponent(props) {
    const { question } = props
  return (
    <div className="faq">
      <div>
        <h4>{question.question}</h4>
        <p>
          {question.answer}
        </p>
      </div>
      icons
    </div>
  );
}

export default FaqComponent;
