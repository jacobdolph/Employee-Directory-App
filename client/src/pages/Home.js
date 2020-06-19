import React from 'react';
import { Col, Row, Container } from '../components/Grid';
import EmployeeList from '../components/EmployeeList';

function Home() {
    return (
        <Container fluid>
            <Row>
                <Col size='md-6'>
                    <EmployeeList />
                </Col>
            </Row>
        </Container>
    )
}
export default Home;