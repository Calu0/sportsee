import React from 'react';
import logo from '../../public/logo.png';


const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 flex items-center justify-between h-[91px] bg-secondary text-white px-8 shadow-md z-header">
            <div className="flex items-center">
                <img src={logo} alt="SportSee Logo" className="h-14 mr-4" />
                {/* <span className="text-primary text-2xl font-bold">SportSee</span> */}
            </div>
            <nav className="flex-1">
                <ul className="flex justify-around max-w-4xl mx-auto">
                    <li><a href="/" className="text-2xl hover:text-primary">Accueil</a></li>
                    <li><a href="/profil" className="text-2xl hover:text-primary">Profil</a></li>
                    <li><a href="/reglage" className="text-2xl hover:text-primary">Réglage</a></li>
                    <li><a href="/communaute" className="text-2xl hover:text-primary">Communauté</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header; 