import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from './components';

const Layout: React.FC = () => {  
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
};

export { Layout };