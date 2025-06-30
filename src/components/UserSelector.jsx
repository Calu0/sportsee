import React, { useState, useEffect } from 'react';
import { getAvailableUserIds } from '../services/dataService';


const UserSelector = ({ currentUserId, onUserSelect }) => {
    const [userIds, setUserIds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserIds = async () => {
            try {
                const ids = await getAvailableUserIds();
                setUserIds(ids);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des IDs utilisateurs:', error);
                setLoading(false);
            }
        };

        fetchUserIds();
    }, []);

    if (loading) {
        return <div className="text-center my-5 text-[#74798C]">Chargement des utilisateurs...</div>;
    }

    return (
        <div className="my-5 flex flex-col items-center">
            <p className="mb-2.5 text-base text-[#74798C]">Sélectionner un utilisateur:</p>
            <div className="flex gap-2.5">
                {userIds.map(id => (
                    <button
                        key={id}
                        onClick={() => onUserSelect(id)}
                        className={`px-4 py-2 bg-background-light border ${currentUserId === id
                            ? 'bg-primary text-white border-primary'
                            : 'border-[#E0E0E0] hover:bg-gray-100 hover:border-[#D0D0D0]'
                            } rounded-md text-sm transition-all duration-300`}
                    >
                        Utilisateur {id}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default UserSelector; 