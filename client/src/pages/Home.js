import React from 'react';
import { Col, Row, Container } from '../components/Grid';
import EmployeeList from '../components/EmployeeList';
import SideNav from '../components/SideNav';


function Home() {
    return (

        <Container fluid >
            <Row>
                <Col size='md-2'>
                    <SideNav></SideNav>
                </Col>
                <Col size='md-8'>

                </Col>
            </Row>
        </Container>
    )
}

export default Home;