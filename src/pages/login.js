import React, { useState } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import axios from 'axios';
import { Router ,Route ,Redirect} from "react-router-dom";
import {Link} from 'react-router-dom';
import newnote from './newnote';
import '../App.css';

let redirect = false;
class login extends React.Component{
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };
    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  changepage(){
      return(
    axios.get('/getauth').then (response => {
        console.log(response.data)
      
              if (response.data === true ){
              redirect = true
              console.log("true")
                
            }
        })
  
      )

        
    
    }
    
    shouldredirect(){
           console.log("IT SHOULD REDIRECT!"); 
          return  redirect?(()=>({newnote})):(<Redirect to='/login'/>)      
           
        
    };

    async senddata(email,password) {
        console.log(email + password);
      axios.post('/user', {
          email: {email},
          password: {password}
        })

      }

 async handleSubmit(evt) {
    evt.preventDefault();
    
    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    await this.senddata(this.state.username , this.state.password);
    await this.changepage();
    
    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div>
        <div>
        {<newnote/>}
      </div>
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          {
            this.state.error &&
            <h3 data-test="error" onClick={this.dismissError}>
              <button onClick={this.dismissError}>✖</button>
              {this.state.error}
            </h3>
          }
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

          <input type="submit" value="Log In" data-test="submit" />
        </form>
        
      </div>
      
      </div>
    );
    
  }
}

export default login;