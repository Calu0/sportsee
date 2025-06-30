import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


const Layout = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Header />
            <Sidebar />
            <main className="pl-[117px]">
                {children}
            </main>
        </div>
    );
};

export default Layout; 