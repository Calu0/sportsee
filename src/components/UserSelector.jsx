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

    const handleSelectChange = (event) => {
        const selectedUserId = parseInt(event.target.value, 10);
        onUserSelect(selectedUserId);
    };

    if (loading) {
        return <div className="text-center my-5 text-[#74798C]">Chargement des utilisateurs...</div>;
    }

    return (
        <div className="my-5 flex flex-col items-center">
            <label htmlFor="user-select" className="mb-2.5 text-base text-[#74798C]">
                Sélectionner un utilisateur:
            </label>
            <select
                id="user-select"
                value={currentUserId}
                onChange={handleSelectChange}
                className="px-4 py-2 bg-white border border-[#E0E0E0] rounded-md text-sm 
                          focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary
                          hover:border-[#D0D0D0] transition-all duration-300 cursor-pointer"
            >
                {userIds.map(id => (
                    <option key={id} value={id}>
                        Utilisateur {id}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default UserSelector; 