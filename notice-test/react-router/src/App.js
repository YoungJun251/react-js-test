import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import About from './About';
import Home from './Home';
import Memo from './Memo';

class App extends Component{
  render(){
    return(
      <div>
        <BrowserRouter>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/memo" exact component={Memo} />
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
