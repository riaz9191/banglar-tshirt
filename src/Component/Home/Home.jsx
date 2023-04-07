import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirt = useLoaderData();
    return (
        <div>
            <h2>home : {tshirt.length}</h2>
        </div>
    );
};

export default Home;