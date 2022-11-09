import React from 'react';
import useTitle from '../../../hooks/useTitle';

const Home = () => {
    useTitle('');
    return (
        <div>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;