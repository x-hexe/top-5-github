import React, { useState, useCallback } from 'react';
import { Container, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import _debounce from 'lodash/debounce';
import Navbar from './Navbar';
import axios from "axios";

const Home = () => {
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);

    const getApiData = async (user) => {
        const { data } = await axios.get(`https://api.github.com/search/users?q=${user}`);
        return data.items || [];
    };

    const handleSearch = async (event) => {
        try {
            const response = await getApiData(event.target.value);
            setUsers(response.map((user) => user.login))
        } catch (error) {
            console.error(error);
        }
    };

    const handleSearchDebounce = useCallback(_debounce(handleSearch, 650), []);

    return (
        <>
            <Navbar/>
            <Container className={'mt-3'}>
                <h1>GitHub Users</h1>
                <p>Search username to see more information</p>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Please enter a Github username"
                        onChange={handleSearchDebounce}
                    />
                </InputGroup>
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
