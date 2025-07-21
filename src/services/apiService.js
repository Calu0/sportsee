import axios from 'axios';

const API_URL = 'http://localhost:3000';

// Service pour récupérer les données depuis l'API
export const apiService = {
    getUserMainData: async (userId) => {
        try {
            const response = await axios.get(`${API_URL}/user/${userId}`);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des données utilisateur:', error);
            throw error;
        }
    },

    getUserActivity: async (userId) => {
        try {
            const response = await axios.get(`${API_URL}/user/${userId}/activity`);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des données d\'activité:', error);
            throw error;
        }
    },

    getUserAverageSessions: async (userId) => {
        try {
            const response = await axios.get(`${API_URL}/user/${userId}/average-sessions`);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des sessions moyennes:', error);
            throw error;
        }
    },

    getUserPerformance: async (userId) => {
        try {
            const response = await axios.get(`${API_URL}/user/${userId}/performance`);
            return response.data;
        } catch (error) {
            console.error('Erreur lors de la récupération des données de performance:', error);
            throw error;
        }
    }
}; 