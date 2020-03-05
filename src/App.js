import React from 'react';
import Header from './Header';
import {BrowserRouter as Router, Route , Redirect } from 'react-router-dom';
import login from './pages/login';
import newnote from './pages/newnote';
import Notes from './pages/Notesection';

import './App.css';

class App extends React.Component{
  render(){
    return (
      <div>
      <Header/>
           <Router>
                
           <Route path="/pages/Notesection" component = {Notes}/>
                <Route path="/pages/login" component={login}/>
              <Route path='/pages/newnote' exact component={newnote}/>
           
            </Router>
            </div>
        
    );
    
    
  }
} 
export default App;
