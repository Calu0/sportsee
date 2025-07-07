import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { getAvailableUserIds } from '../services/dataService';

const ProfileRedirect = () => {
    const [redirectPath, setRedirectPath] = useState(null);

    useEffect(() => {
        const getFirstUser = async () => {
            try {
                const userIds = await getAvailableUserIds();
                if (userIds && userIds.length > 0) {
                    setRedirectPath(`/profil/${userIds[0]}`);
                } else {
                    console.error('Aucun utilisateur disponible');

                    setRedirectPath('/404');
                }
            } catch (err) {
                console.error('Erreur lors de la récupération des utilisateurs');
                console.error(err);

                setRedirectPath('/404');
            }
        };

        getFirstUser();
    }, []);

    // Redirection vers la page profil du premier utilisateur
    if (redirectPath) {
        return <Navigate to={redirectPath} replace />;
    }

    return (
        <div className="flex justify-center items-center h-[50vh] text-xl">
            Chargement du profil...
        </div>
    );
};

export default ProfileRedirect; 