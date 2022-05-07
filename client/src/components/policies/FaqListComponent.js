import React, { Component } from 'react'
import FaqComponent from "./FaqComponent";
import axios from "axios"

export default class FaqListComponent extends Component {
    state = {
        faqs: ""
    }

    componentDidMount() {
        console.log("faqs mounted")

        axios.get("http://localhost:8080/policies")
        .then(response => {
            this.setState({
                faqs: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {

        return (!this.state.faqs ? null :
            <div className="policies-faq">
              <h3>FAQ</h3>
              {this.state.faqs.map((question, index) => (
                <FaqComponent
                  question={question}
                  key={`${question}${index}`}
                />
              ))}
            </div>
        )
    }
}