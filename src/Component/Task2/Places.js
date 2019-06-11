import React, { Component } from 'react';
import Place from './Place';
class Places extends Component {
    render() {
        return (
            <div>
                <h1>Name  And Place</h1>
                <Place Name="Raichur">usha</Place>
                <Place Name="Delhi">janaki</Place>
                <Place Name="Mumbai">rohit</Place>
                
            </div>
        );
    }
}


export default Places;