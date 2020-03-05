import React from 'react';
import Navbar from 'react-bootstrap/Navbar';


class Header extends React.Component{
    render(){
        return(
            
        <Navbar expand='lg' bg="primary" variant="dark">
            <div className='ml-auto'>
            <Navbar.Toggle/>
            <Navbar.Collapse className="justify-content-end">
            <Navbar.Brand href='/pages/Notesection'>Notes</Navbar.Brand>
            <Navbar.Brand href='/pages/login'>Upload</Navbar.Brand>
            </Navbar.Collapse>
            </div>
        </Navbar>
        );
    }
}

export default Header;