import React from 'react';

import {BrowserRouter as Router, Route, Switch, Redirect} from'react-router-dom';
import './App.css';
import Names from './Component/Task2/Names';
import Lifecycle from './Component/Task2/Lifecycle';
import Signup from './Component/Task1/Signup';
import Arithmeticoperation from './Component/Task3/Arithmeticoperation';
import Events from './Component/Task4/Events';
 function App(){
    return(<Router>
      <Switch>
        <Route exact path='/Task2' component={Names}></Route>
        <Route exact path='/Task2' component={Lifecycle}></Route>
        <Route exact path='/Task1' component={Signup}></Route>
        <Route exact path='/Task3' component={Arithmeticoperation}></Route>
        <Route exact path='/Task4' component={Events}></Route>
      </Switch>
    </Router>
    )  

}

export default App;
