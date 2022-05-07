import React, { Component } from 'react'
import FaqListComponent from './FaqListComponent'
import TopArticlesComponent from './TopArticlesComponent'
import './Policies.scss'
import axios from "axios"

export default class PoliciesPage extends Component {

    state = {
        faqs: ""
    }

    componentDidMount() {
        console.log("policies mounted")
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
        console.log(this.state.faqs)
        return (
            <section className="policies">
                <h1>Hybrid Work Policies</h1>
                <FaqListComponent
                    faqs={this.state.faqs} />
                <TopArticlesComponent />
            </section>
        )
    }
}
