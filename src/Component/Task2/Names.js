import React, { Component } from 'react';
import Name from './Name';
class Names extends Component {
    render() {
        return (
            <div>
                <h1> Name And Age</h1>
                <Name age="30">usha</Name>
                <Name age="40">janaki</Name>
                <Name age="50">rohit</Name>
                
            </div>
        );
    }
}


export default Names;