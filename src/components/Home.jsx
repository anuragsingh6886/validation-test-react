import React from 'react';
import LoginForm from './Forms/LoginForm';
import HeroBanner from './HeroBanner';
import DetailCard from './DetailCard';

const Home = () => {
    return (
        <>
            <HeroBanner />
            <LoginForm />
            <DetailCard />
        </>
    );
}

export default Home;