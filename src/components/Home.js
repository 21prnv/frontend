import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css';

const Home = () => {
    const [name, setName] = useState('');

    useEffect(() => {
        // Fetch the name from the backend using Axios
        axios.get('https://codehelpassignment.vercel.app/api/')
            .then(response => {
                // Update the name in the state
                setName(response.data.name);
            })
            .catch(error => {
                console.error('Error fetching name:', error);
            });
    }, []); // Empty dependency array to ensure the effect runs once on component mount

    return (
        <div className='name'>
            <h1>Hello {name}</h1>
        </div>
    );
};

export default Home;
