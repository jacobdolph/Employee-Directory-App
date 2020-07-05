import React from 'react';
import { Col, Container, Row } from '../Grid';
import DashboardCard from '../DashboardCard';
import Title from '../Title';

function Dashboard() {
    return (

        <Container>
            <br />
            <Title>Dashboard</Title>
            <Row >
                <DashboardCard
                    title='hello'
                    text='world'
                />
                <DashboardCard />
                <DashboardCard />
            </Row>
        </Container>
    )
}

export default Dashboard;