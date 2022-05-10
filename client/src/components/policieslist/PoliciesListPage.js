import React, { Component } from 'react';
import axios from 'axios';
import './PoliciesList.scss'
import PolicyCardComponent from './PolicyCardComponent';

export default class PoliciesListPage extends Component {
    state = {
        policies:"",
        category:""
      };
    
      componentDidMount(){
          const category = this.props.match.params.category
        axios
          .get(`http://localhost:8080/resources/${category}`)
          .then((response) => {
            this.setState({
              policies: response.data.policies,
              category: response.data.category
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
      
      componentDidUpdate() {
      }
    
      render() {
          const {policies, category} = this.state;
          console.log(policies)
          
        return (!policies ? null :
            <section className="policies">
                {policies.map((policy,index) => (
                    <PolicyCardComponent
                        policy={policy}
                        category={category}
                        key={`${policy}${index}`}
                        routerProps={this.props}
                         />
                ))}
          </section>
        );
          
      }
}
