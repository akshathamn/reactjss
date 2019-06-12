import React, { Component } from 'react';
import './Arithmeticoperation.css';
class Arithmeticoperation extends Component {
    constructor(props){
        super(props)
        this.state={
            num1:10,
            num2:10,
            num3:10
    
        }
        this.add=this.add.bind(this);
        this.subtract=this.subtract.bind(this);
        this.multiply=this.multiply.bind(this);
        }
        add(){
            debugger;
            this.setState({num1:this.state.num1 + 5});
            console.log(this.state.num1);
        }
        subtract(){
            if(this.state.num2 == 0){
                this.setState({
                    num2:0
                });
            }else{
            this.setState({num2:this.state.num2 - 5});
        }
    }
        multiply(){
            this.setState({num3:this.state.num3*5});
        }

    render() {
        return (
            <div>
                <div className="b1">
               <h1 >{this.state.num1}</h1> 
               <button onClick={this.add}>addition</button>
               </div>
               <div className="b2">
               <h1>{this.state.num2}</h1> 
               <button onClick={this.subtract}>subtraction</button></div>
               <div className="b3">
               <h1>{this.state.num3}</h1>
               <button onClick={this.multiply}>multiplication</button>
               </div>
            </div>
        );
    }
}

export default Arithmeticoperation;


