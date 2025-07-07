import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-[91px] bg-secondary text-white px-8 shadow-md z-header">
            <div className="flex items-center">
                <img src={'/logo.png'} alt="SportSee Logo" className="h-14 mr-4" />
                {/* <span className="text-primary text-2xl font-bold">SportSee</span> */}
            </div>
            <nav className="flex-1">
                <ul className="flex justify-around max-w-4xl mx-auto">
                    <li><Link to="/" className="text-2xl hover:text-primary">Accueil</Link></li>
                    <li><Link to="/profil" className="text-2xl hover:text-primary">Profil</Link></li>
                    <li><Link to="/reglage" className="text-2xl hover:text-primary">Réglage</Link></li>
                    <li><Link to="/communaute" className="text-2xl hover:text-primary">Communauté</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header; 