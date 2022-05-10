import React, { Component } from "react";
import FaqListComponent from "./FaqListComponent";
import DocsComponent from "./DocsComponent";
import "./Policies.scss";
import axios from "axios";

export default class FaqAndDocs extends Component {
  state = {
    faqs: "",
    documents: "",
  };

  componentDidMount() {
    console.log("policies mounted");
    const category = this.props.match.params.category
    const topic = this.props.match.params.topic

    axios
      .get(`http://localhost:8080/resources/${category}/${topic}`)
      .then((response) => {
        console.log(response)
        this.setState({
          faqs: response.data.policyFaqs,
          documents: response.data.policyDocuments,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  componentDidUpdate() {
    console.log("policies updated");
  }

  render() {
    return (
      <section className="faq-and-docs">
        <h1>Hybrid Work Policy</h1>
        <div className="faq-and-docs-container">
          <FaqListComponent faqs={this.state.faqs} />
          <DocsComponent documents={this.state.documents} />
        </div>
      </section>
    );
  }
}
