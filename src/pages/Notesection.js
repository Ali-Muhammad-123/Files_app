import React from 'react';
import Row from 'react-bootstrap/Row';
import Jumbotron from "react-bootstrap/Jumbotron";
import { Col } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import axios from 'axios';

const fs = require('fs');
const Path = require('path');

class Notes extends React.Component{

constructor(props){
    super(props);
    this.state = {
        
        dat : [],
    };
}
    componentDidMount =  () =>{
        

        axios.get("/getnotes").then(response =>{
            
            var alldat =[];
            
           console.log(response.data)
                alldat = response.data;
            this.setState({
                

            dat : alldat,
        });
        console.log(this.state.dat);
       
    });
}
    

    renderallnotes(a,b,c) {
        return(
            <div>
            <Row className='justify-content-center'>
            <a href={c}>
                <h1>{b}</h1>
                </a>
            </Row> 

            <Row className='justify-content-center'>
            <Col></Col>
            <Col>
            <p>{c}</p>
            </Col>
            <Col></Col>
            </Row>
            </div>
        );
    }

    render(){
        return(
            <Jumbotron>
                
                    <Col>
                    <Row className='justify-content-center'>
                <label ><h1>Available Notes</h1></label>
                </Row>
                    {this.state.dat.map((t)=>this.renderallnotes(t.id,t.filename,t.URL)) }
                    </Col>
                
            </Jumbotron>

        );
    }
}

export default Notes;