import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";

import CustomToggle from "./CustomToggle";


const AppCard = () => (
    <Col sm={4} className="py-2">
    <Card className="shadow">
        <Card.Header className="border-0 d-flex">

            <h4 className="mb-0 mr-auto">Card1</h4>

            <Dropdown alignRight>
                <Dropdown.Toggle as={CustomToggle}>
                    <i className="fas fa-cog"></i>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>

        </Card.Header>
        <Card.Body>
            <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit longer.
            </Card.Text>
            <div>
                <small className=" text-muted">9 mins</small>
            </div>
        </Card.Body>
    </Card>
    </Col>
);

export default AppCard;