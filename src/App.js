import React from 'react';
// import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom';
import './App.css';
import Names from './Component/Names';
import Places from './Component/Places';
import Dobs from './Component/Dobs';
import Lifecycle from './Component/Lifecycle';
import Signup from './Component/Task1/Signup';
import Signin from './Component/Task1/Signin';

 function App(){
    return(<Router>
      <Switch>
        <Route exact path='/' component={Names}></Route>
        <Route exact path='/Places' component={Places}></Route>
        <Route exact path='/Dobs' component={Dobs}></Route>
        <Route exact path='/Lifecycle' component={Lifecycle}></Route>
        <Route exact path='/Signin' component={Signin}></Route>
        <Route exact path='/Signup' component={Signup}></Route>

      </Switch>
    </Router>
    )  

}

export default App;
