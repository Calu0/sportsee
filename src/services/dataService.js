import { apiService } from './apiService';
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from './mockData';

// Définir si on utilise les données mockées ou l'API
const USE_MOCKED_DATA = false;

export const getUserMainData = async (userId) => {
    if (USE_MOCKED_DATA) {
        const userData = USER_MAIN_DATA.find(user => user.id === userId);
        if (!userData) {
            throw new Error(`Utilisateur avec l'ID ${userId} non trouvé`);
        }
        return { data: userData };
    } else {
        return apiService.getUserMainData(userId);
    }
}

export const getUserActivity = async (userId) => {
    if (USE_MOCKED_DATA) {
        const activityData = USER_ACTIVITY.find(activity => activity.userId === userId);
        if (!activityData) {
            throw new Error(`Données d'activité pour l'utilisateur avec l'ID ${userId} non trouvées`);
        }
        return { data: activityData };
    } else {
        return apiService.getUserActivity(userId);
    }
}

export const getUserAverageSessions = async (userId) => {
    if (USE_MOCKED_DATA) {
        const sessionsData = USER_AVERAGE_SESSIONS.find(session => session.userId === userId);
        if (!sessionsData) {
            throw new Error(`Données de sessions pour l'utilisateur avec l'ID ${userId} non trouvées`);
        }
        return { data: sessionsData };
    } else {
        return apiService.getUserAverageSessions(userId);
    }
}

export const getUserPerformance = async (userId) => {
    if (USE_MOCKED_DATA) {
        const performanceData = USER_PERFORMANCE.find(performance => performance.userId === userId);
        if (!performanceData) {
            throw new Error(`Données de performance pour l'utilisateur avec l'ID ${userId} non trouvées`);
        }
        return { data: performanceData };
    } else {
        return apiService.getUserPerformance(userId);
    }
}

export const userExists = async (userId) => {
    try {
        if (USE_MOCKED_DATA) {
            return !!USER_MAIN_DATA.find(user => user.id === userId);
        } else {
            const response = await apiService.getUserMainData(userId);
            return !!response.data;
        }
    } catch {
        return false;
    }
}

export const getAvailableUserIds = async () => {
    if (USE_MOCKED_DATA) {
        return USER_MAIN_DATA.map(user => user.id);
    } else {
        return [12, 18];
    }
}
