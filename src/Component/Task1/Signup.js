import React from 'react';
import './Signup.css';
import Signin from './Signin';

function Signup() {
  return (
    <div className="app1">
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
        <div><input className="pos6" type="text" name="name" value="Create my Account" /></div>
      </form><br/><br/><br/>
      <Signin/>
    </div>

  );
}

export default Signup;