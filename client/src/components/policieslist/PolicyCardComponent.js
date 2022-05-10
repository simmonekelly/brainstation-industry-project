import React from 'react';
import { Link } from "react-router-dom"

const baseUrl = "http://localhost:8080/";

function PolicyCardComponent(props) {
    const { policy, category } = props;

    return (
        <Link to={`/resources/${category}/${policy.policyTopic}`}>
            <div className="policies-container">
                <img src={`${baseUrl}/images/icons/Legal_Icon_Screen2.svg`} />
                <div className="policies-content">
                    <h2>{policy.policyTitle}</h2>
                    <p>{policy.policyDescription}</p>
                </div>
            </div>
        </Link>
        
    )
}

export default PolicyCardComponent
