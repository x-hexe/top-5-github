import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Home = () => {
    const navigate = useNavigate();
    const users = ["GrahamCampbell", "fabpot", "weierophinney", "rkh", "josh"];

    return (
        <>
            <Navbar/>
            <Container className={'mt-3'}>
                <h1>Top 5 GitHub Users</h1>
                <p>Tap the username to see more information</p>
                {
                    users.map((name, index) => (
                        <Button
                            key={index}
                            onClick={() => navigate(`person/${name}`)}
                            className={'mt-4 me-2'}
                        >
                            {name}
                        </Button>
                    ))
                }
            </Container>
        </>
    );
}

export default Home;
