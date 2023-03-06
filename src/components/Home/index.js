import React from 'react'
import { Link } from "react-router-dom";

function Home() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
        }}>Home
            <Link to="/auth">Auth</Link>
            <Link to="/profile">Profile</Link>
        </div>
    );
}

export default Home;
