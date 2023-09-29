import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthContextProviders';

const Home = () => {
    const user = useContext(AuthContext)
    return (
        <div>
            <h1>{user.displayName}</h1>
        </div>
    );
};

export default Home;