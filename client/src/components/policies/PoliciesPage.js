import React, { Component } from 'react'
import FaqListComponent from './FaqListComponent'
import TopArticlesComponent from './TopArticlesComponent'
import './Policies.scss'
import axios from "axios"

export default class PoliciesPage extends Component {

    state = {
        
    }

    componentDidMount() {
        console.log("policies mounted")
    }

    componentDidUpdate() {
        console.log("policies updated")
    }

    render() {
        return (
            <section className="policies">
                <h1>Hybrid Work Policies</h1>
                <FaqListComponent />
                <TopArticlesComponent />
            </section>
        )
    }
}
