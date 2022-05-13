import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from './Navbar'
import HorizontalCard from "./HorizontalCard";

const Person = () => {
    const [data, setData] = useState({});
    const { name } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`https://api.github.com/users/${name}`);
            setData(data);
        }

        fetchData()
            .catch(console.error);
    }, [name])

    return (
        <>
            <Navbar showBack={true}/>
            {
                data && data.name && (
                    <HorizontalCard
                        title={data.name}
                        subtitle={data.bio}
                        avatar={data.avatar_url}
                    />
                )
            }
        </>
    );
}

export default Person;
