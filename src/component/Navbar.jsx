import React, { useEffect, useState } from 'react'
import { Container, Form, Nav, Navbar} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchUser } from '../features/userDetails';
const Header = () => {
  const[text, setText]= useState('')
  const dispatch= useDispatch()
  const{user}= useSelector((state)=>{return state.app})
  const leng= user.length
  // console.log(leng)
  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  
  };
  useEffect(()=>{
    dispatch(searchUser(text));
  },[dispatch, text])
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to={"/"}>Create User</Nav.Link>
          <Nav.Link as={Link} to={"/read"}>All User{`(${leng})`}</Nav.Link>
          {/* <Nav.Link as={Link} to={"/read"}>All User</Nav.Link> */}
          
        </Nav>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
              value={text}
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header