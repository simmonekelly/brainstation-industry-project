import React, { Component } from "react";
import FaqListComponent from "./FaqListComponent";
import TopArticlesComponent from "./TopArticlesComponent";
import "./Policies.scss";
import axios from "axios";

export default class PoliciesPage extends Component {
  state = {
    faqs: "",
    documents: "",
  };

  componentDidMount() {
    console.log("policies mounted");

    axios
      .get("http://localhost:8080/policies")
      .then((response) => {
        this.setState({
          faqs: response.data.faqs,
          documents: response.data.articles,
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
      <section className="policies">
        <h1>Hybrid Work Policy</h1>
        <div className="policies-container">
          <FaqListComponent faqs={this.state.faqs} />
          <TopArticlesComponent documents={this.state.documents} />
        </div>
      </section>
    );
  }
}
