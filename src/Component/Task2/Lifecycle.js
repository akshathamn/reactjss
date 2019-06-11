import React,{Component} from 'react';
import './Lifecycle.css';
class Lifecycle extends Component{
    constructor(props){
        super(props)
        this.state={
            name:'akshatha'
        }
        console.log('lifecycleA initialization')
}

componentDidMount(){
    console.log('lifecycleA ComponentDidMount')
}
componentWillMount(){
    console.log('lifecycleA ComponentWillMount')
}
render(){
    console.log('lifecycleA render')
    return(
        <div>
            <div className="App1">
      <form>
        <h1>Signup</h1>
        <div className='align1'>Name</div>
        <input className="pos1" type="text" name="name" /><br /><br />
        <div className='align1'>Email</div>
        <input className="pos1" type="text" name="name" /><br /><br />
        <div className='align3'>Password</div>
        <input className="pos1" type="text" name="name" /><br /><br />
        <div className='align2'>Confirmation</div>
        <input className="pos1" type="text" name="name" /><br /><br />
        <div><input className="pos5" type="text" name="name" value="Create my Account" /></div>
      </form>
    </div>
        </div>
    )
}
}
export default Lifecycle;