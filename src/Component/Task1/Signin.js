import React from 'react';
import './Signin.css';

function Signin() {
  return (
    <div className="App">
      <form>  
        <h1>Signin</h1>
        <div><input className="pos1" type="text" name="name" value="Email" /></div><br/><br/>
        <div><input className="pos1" type="text" name="name" value="Password" /></div><br/><br/>
        <div><input className="pos2" type="text" name="name"  value="Login" /></div>
        <p className="deco">forgot your password?</p>
      </form>
     <span>Don't have an account?Signup</span>
    </div>

  );
}

export default Signin;