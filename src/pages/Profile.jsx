import React, { useState, useEffect } from 'react';
import { getUserMainData, getUserActivity, getUserAverageSessions, getUserPerformance, userExists } from '../services/dataService';
import UserSelector from '../components/UserSelector';
import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/AverageSessionsChart';
import PerformanceChart from '../components/PerformanceChart';
import ScoreChart from '../components/ScoreChart';
import NutritionCard from '../components/NutritionCard';


const Profile = () => {

    const [userId, setUserId] = useState(12); // Par défaut, utilisateur 12
    const [userData, setUserData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [sessionsData, setSessionsData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Fonction pour changer d'utilisateur
    const handleUserChange = (newUserId) => {
        if (newUserId !== userId) {
            setUserId(newUserId);
            setLoading(true);
            setError(null);
            setUserData(null);
            setActivityData(null);
            setSessionsData(null);
            setPerformanceData(null);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Vérifier si l'utilisateur existe
                const userExistsResponse = await userExists(userId);
                if (!userExistsResponse) {
                    setError(`Utilisateur avec l'ID ${userId} non trouvé`);
                    setLoading(false);
                    return;
                }

                // Récupérer les données principales de l'utilisateur
                const userResponse = await getUserMainData(userId);
                setUserData(userResponse.data);

                // Récupérer les données d'activité
                const activityResponse = await getUserActivity(userId);
                setActivityData(activityResponse.data.sessions);

                // Récupérer les données de sessions moyennes
                const sessionsResponse = await getUserAverageSessions(userId);
                setSessionsData(sessionsResponse.data.sessions);

                // Récupérer les données de performance
                const performanceResponse = await getUserPerformance(userId);
                setPerformanceData(performanceResponse.data);

                setLoading(false);
            } catch (err) {
                setError("Erreur lors du chargement des données.");
                setLoading(false);
                console.error(err);
            }
        };

        fetchData();
    }, [userId]);

    // Affichage pendant le chargement
    if (loading) return <div className="flex justify-center items-center h-[50vh] text-xl">Chargement des données...</div>;

    // Affichage en cas d'erreur
    if (error) return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-5">
            <div className="text-primary text-xl mb-8">{error}</div>
            <UserSelector currentUserId={userId} onUserSelect={handleUserChange} />
        </div>
    );

    // Affichage en cas d'absence de données
    if (!userData) return (
        <div className="flex flex-col items-center justify-center min-h-[50vh] p-5">
            <div className="text-primary text-xl mb-8">Aucune donnée disponible</div>
            <UserSelector currentUserId={userId} onUserSelect={handleUserChange} />
        </div>
    );

    // Utiliser todayScore ou score (selon ce qui est disponible dans l'API)
    const score = userData.todayScore || userData.score || 0;

    return (
        <div className="px-8 pt-[100px] pb-10">
            <UserSelector currentUserId={userId} onUserSelect={handleUserChange} />

            <div className="mb-10">
                <h1 className="text-[48px] font-medium mb-5">
                    Bonjour <span className="text-primary">{userData.userInfos.firstName}</span>
                </h1>
                <p className="text-lg">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
            </div>

            <div className="flex flex-wrap gap-[30px]">
                <div className="flex-1 flex flex-col gap-[30px] min-w-0">
                    <div className="w-full">
                        {activityData && <ActivityChart data={activityData} />}
                    </div>

                    <div className="flex gap-[30px] h-chart-card">
                        <div className="flex-1 min-w-0">
                            {sessionsData && <AverageSessionsChart data={sessionsData} />}
                        </div>

                        <div className="flex-1 min-w-0">
                            {performanceData && (
                                <PerformanceChart
                                    data={performanceData.data}
                                    kind={performanceData.kind}
                                />
                            )}
                        </div>

                        <div className="flex-1 min-w-0">
                            <ScoreChart score={score} />
                        </div>
                    </div>
                </div>

                <div className="w-nutrition-card flex flex-col justify-between">
                    <NutritionCard
                        icon="/fire.svg"
                        value={userData.keyData.calorieCount}
                        unit="kCal"
                        name="Calories"
                    />
                    <NutritionCard
                        icon="/chicken.svg"
                        value={userData.keyData.proteinCount}
                        unit="g"
                        name="Protéines"
                    />
                    <NutritionCard
                        icon="/apple.svg"
                        value={userData.keyData.carbohydrateCount}
                        unit="g"
                        name="Glucides"
                    />
                    <NutritionCard
                        icon="/cheeseburger.svg"
                        value={userData.keyData.lipidCount}
                        unit="g"
                        name="Lipides"
                    />
                </div>
            </div>
        </div>
    );
};

export default Profile; 