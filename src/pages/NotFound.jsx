import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Page non trouvée</h2>
            <p className="text-gray-600 mb-8 max-w-md">
                Désolé, la page que vous recherchez n'existe pas ou l'utilisateur demandé est introuvable.
            </p>
            <Link
                to="/"
                className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-red-600 transition-colors duration-300"
            >
                Retour à l'accueil
            </Link>
        </div>
    );
};

export default NotFound;