import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavItem from "react-bootstrap/NavItem";
import Dropdown from "react-bootstrap/Dropdown";

import "./MyNavbar.css";
import CustomToggle from "./CustomToggle";

const MyNavbar = () => (
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>

        <Nav className="mr-auto">
            <NavDropdown title="Asset 1" id="basic-nav-dropdown">
                <NavDropdown.Item href="#a1" active>Asset 1</NavDropdown.Item>
                <NavDropdown.Item href="#a2">Asset 2</NavDropdown.Item>
                <NavDropdown.Item href="#a3">Asset 3</NavDropdown.Item>
                <NavDropdown.Item href="#a4">Asset 4</NavDropdown.Item>
                <NavDropdown.Item href="#a5">Asset 5</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">/</Nav.Link>

            <NavDropdown title="Template 3" id="basic-nav-dropdown">
                <NavDropdown.Item href="#t1">Template 1</NavDropdown.Item>
                <NavDropdown.Item href="#t2">Template 2</NavDropdown.Item>
                <NavDropdown.Item href="#t3" active>Template 3</NavDropdown.Item>
                <NavDropdown.Item href="#t4">Template 4</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#">/</Nav.Link>

            <NavDropdown title="Card 2">
                <NavDropdown.Item eventKey="c1">Card 1</NavDropdown.Item>
                <NavDropdown.Item eventKey="c2" active>Card 2</NavDropdown.Item>
                <NavDropdown.Item eventKey="c3">Card 3</NavDropdown.Item>
                <NavDropdown.Item eventKey="c4">Card 4</NavDropdown.Item>
            </NavDropdown>


        </Nav>

        <Nav>


            <NavItem>
                <Dropdown alignRight>
                    <Dropdown.Toggle as={CustomToggle}>
                        <Nav.Link href="#link"><i className="fas fa-diagnoses"></i></Nav.Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </NavItem>

            <NavItem>
                <Dropdown alignRight>
                    <Dropdown.Toggle as={CustomToggle}>
                        <Nav.Link href="#link"><i className="fas fa-ellipsis-v"></i></Nav.Link>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </NavItem>

        </Nav>
    </Navbar>
);

export default MyNavbar;
