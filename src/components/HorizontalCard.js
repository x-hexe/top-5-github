import React from 'react';
import { Container, Image } from 'react-bootstrap';

const HorizontalCard = ({ avatar, title, subtitle }) => {
    return (
        <Container>
            <div className="card-horizontal">
                <div className="img-square-wrapper">
                    <Image
                        className="card-img"
                        src={avatar}
                        roundedCircle
                    />
                </div>
                <div className="card-content">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-subtitle">{subtitle}</p>
                </div>
            </div>
        </Container>
    );
}

export default HorizontalCard;
