import React, { Component } from "react";
import ResourceCardComponent from "./ResourceCardComponent";
import axios from "axios";
import './Resources.scss'

export default class ResourcesPage extends Component {
  state = {
    resources:""
  };

  componentDidMount(){
    axios
      .get("http://localhost:8080/resources")
      .then((response) => {
        this.setState({
          resources: response.data
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  
  componentDidUpdate() {
  }

  render() {
      const {resources} = this.state;
      
    return (
        !resources ? null :
        <section className="resources">
            {resources.map((resource,index) => (
                <ResourceCardComponent
                    resource={resource}
                    key={`${resource}${index}`}
                     />
            ))}
      </section>
    );
      
  }
}
