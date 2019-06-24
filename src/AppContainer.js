import React, {useState} from "react";
import Container from 'react-bootstrap/Container'

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import AppCard from "./AppCard";


const TabContent = () => {
    return (
        <Row>
            <AppCard/>
            <AppCard/>
            <AppCard/>
            <AppCard/>
            <AppCard/>
            <AppCard/>
            <AppCard/>
        </Row>
    );
};


const AppTabs = ({children}) => {
    const [show, toggleShow] = useState(true);

    return (
        <Tabs defaultActiveKey="profile" className="mt-3">
            <Tab eventKey="home" title="Home">
                <TabContent/>
            </Tab>
            <Tab eventKey="profile" title="Profile">
                <TabContent/>
            </Tab>
            <Tab eventKey="contact" title={<i className="fas fa-plus"></i>} disabled>
                <TabContent/>
            </Tab>
        </Tabs>
    );
};

const AppContainer = () => (

    <Container fluid>


        <AppTabs/>


    </Container>

);

export default AppContainer;