import React, { Component } from 'react';
import Restfultask2 from './Restfultask2';
class Restfultask1 extends Component{
    render() {
        return (
          <Restfultask2 hello={this.state.contacts} />
        )
      }
   
    state = {
        contacts: ''
      };
      componentDidMount() {
        fetch('https://api.github.com/users/KrunalLathiya')
        .then(res => res.json())
        .then((data) => {
          this.setState({ contacts: data })
        })
        .catch(console.log)
      }
    }
    export default Restfultask1;

    