import React from 'react';
import { Col, Row, Container } from '../Grid';


function DashboardCard({ title, text }) {
    return (

        <Col size='mb 4'>
            <div class="card">
                <img src="..." class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{text}</p>
                </div>
            </div>
        </Col>
    )
}

export default DashboardCard;