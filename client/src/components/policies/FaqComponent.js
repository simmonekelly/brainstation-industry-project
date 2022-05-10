import React, { Component } from "react";

export default class FaqComponent extends Component {
  state = {
      isActive: false
  };

  toggleFaq = (e) => {

    if (this.state.isActive) {
        this.setState({
            isActive: false
        })
    } else{
        this.setState({
            isActive: true
        })
    }
    
  };

  render() {
    const { question } = this.props;
    return (
      <div className="faq-and-docs_faqs-faq">
        <div >
          <p className="faq-and-docs_faqs-faq_question">{question.question}</p>
          {this.state.isActive ? <p className="faq-and-docs_faqs-faq_answer">{question.answer}</p> : null}
        </div>
        <div onClick={(e) => this.toggleFaq(e)}>
            {this.state.isActive? <p>minus</p> : <p>plus</p>}</div>
      </div>
    );
  }
}
