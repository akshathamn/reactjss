import React, { Component } from 'react';
import Dob from './Dob';
class Dobs extends Component {
    render() {
        return (
            <div>
                <h1>Name  And D.O.B</h1>
                <Dob Name="2010">usha</Dob>
                <Dob Name="1990">janaki</Dob>
                <Dob Name="1885">rohit</Dob>
                
            </div>
        );
    }
}


export default Dobs;