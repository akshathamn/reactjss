import React, { Component } from 'react';
import Rest4 from './Rest4';
class Rest3 extends Component {
  render() {
    return (
      <Rest4 hello={this.state.contacts} />
    )
  }

  state = {
    contacts: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  }
}
export default Rest3;

