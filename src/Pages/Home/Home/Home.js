import React from 'react';
import useTitle from '../../../hooks/useTitle';
import Banner from '../Banner/Banner';

const Home = () => {
    useTitle('');
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;