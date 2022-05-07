import React, { Component } from "react";

export default class FaqComponent extends Component {
  state = {
      isActive: false
  };

  toggleFaq = (e) => {
    console.log(e);
    console.log("clicked");

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
      <div className="faq">
        <div>
          <h4>{question.question}</h4>
          {this.state.isActive ? <p>{question.answer}</p> : null}
        </div>
        <div onClick={(e) => this.toggleFaq(e)}>
            {this.state.isActive? <p>minus</p> : <p>plus</p>}</div>
      </div>
    );
  }
}
