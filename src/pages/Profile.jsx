import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUserMainData, getUserActivity, getUserAverageSessions, getUserPerformance, userExists } from '../services/dataService';
import UserSelector from '../components/UserSelector';
import ActivityChart from '../components/ActivityChart';
import AverageSessionsChart from '../components/AverageSessionsChart';
import PerformanceChart from '../components/PerformanceChart';
import ScoreChart from '../components/ScoreChart';
import NutritionCard from '../components/NutritionCard';
import NotFound from './NotFound';

const Profile = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [userId, setUserId] = useState(() => {
        return id ? parseInt(id, 10) : 12;
    });
    const [userData, setUserData] = useState(null);
    const [activityData, setActivityData] = useState(null);
    const [sessionsData, setSessionsData] = useState(null);
    const [performanceData, setPerformanceData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [userNotFound, setUserNotFound] = useState(false);

    // Mettre à jour userId quand l'ID dans l'URL change
    useEffect(() => {
        if (id) {
            const newUserId = parseInt(id, 10);
            if (isNaN(newUserId)) {
                setUserNotFound(true);
                setLoading(false);
                return;
            }
            if (newUserId !== userId) {
                setUserId(newUserId);
            }
        }
    }, [id, userId]);

    const handleUserChange = (newUserId) => {
        if (newUserId !== userId) {
            navigate(`/profil/${newUserId}`);
        }
    };

    useEffect(() => {
        // Récupérer les données de l'utilisateur
        const fetchData = async () => {
            try {
                const userExistsResponse = await userExists(userId);
                if (!userExistsResponse) {
                    setUserNotFound(true);
                    setLoading(false);
                    return;
                }

                const userResponse = await getUserMainData(userId);
                setUserData(userResponse.data);
                console.log(userResponse)

                const activityResponse = await getUserActivity(userId);
                setActivityData(activityResponse.data.sessions);

                const sessionsResponse = await getUserAverageSessions(userId);
                setSessionsData(sessionsResponse.data.sessions);

                const performanceResponse = await getUserPerformance(userId);
                setPerformanceData(performanceResponse.data);

                setLoading(false);
                setUserNotFound(false);

            } catch (err) {
                console.error(err);
                setUserNotFound(true);
                setLoading(false);
            }
        };

        // Réinitialiser les états avant de charger
        setUserNotFound(false);
        setLoading(true);
        fetchData();
    }, [userId]);

    if (loading) return <div className="flex justify-center items-center h-[50vh] text-xl">Chargement des données...</div>;

    // Afficher la page NotFound si l'utilisateur n'existe pas ou si l'ID est invalide
    if (userNotFound) return <NotFound />;

    // Affichage en cas d'absence de données
    if (!userData) return <NotFound />;

    return (
        <div className="px-8 pt-[100px] pb-10">
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
                            <ScoreChart score={userData.todayScore} />
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
            <UserSelector currentUserId={userId} onUserSelect={handleUserChange} />
        </div>
    );
};

export default Profile; 