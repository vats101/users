import React from 'react'
import ButtonContainer from '../components/ButtonContainer';
import { useEffect,useState } from 'react';
import Loader from '../components/Loader';
const Home = () => {
    var [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        async function getUsers() {
            const response = await fetch('https://reqres.in/api/users');
            const users = await response.json();
            setData(users.data);
            data = users.data;
        }
        getUsers();
        console.log(data);
        setLoading(false);
    }, [])
    return (
        <>
            {loading && <Loader />}
            {!loading && <ButtonContainer users={data}></ButtonContainer>}
        </>
    )
}

export default Home