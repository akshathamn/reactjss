import React, { Component } from 'react';
import './Events.css';
class Events extends Component {
    state = {
        input: "",
        text: 'Hello'
      };
       handleChange = event => {
        const value = event.target.value;
        this.setState({
          input: value
        });
      };
    
      onClickButton1 = () => {
        this.setState({
          text: 'Hii'
        });
      }
      render() {
        return (
          <React.Fragment>
              <div className="center">
             <div>
               <h1>Text: {this.state.input}</h1>
              </div>
              <div>
                <input className="large"
                  type="text"
                  value={this.state.input}
                  onChange={this.handleChange}
                  placeholder="Enter a text"/><br/><br/>
                <div>
                <h1>{this.state.text}</h1>
                <input className="large" type="text"
                placeholder="Hello"/><br/><br/>
                <button className="color" onClick={this.onClickButton1}>click me to see response</button>
                </div>
              </div>
              </div>
          </React.Fragment>
        );
      }
    }


export default Events;