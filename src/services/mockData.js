
export const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: 'Thomas',
            lastName: 'Dupont',
            age: 31,
        },
        todayScore: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    {
        id: 18,
        userInfos: {
            firstName: 'Sophie',
            lastName: 'Martin',
            age: 27,
        },
        todayScore: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
];

export const USER_ACTIVITY = [
    {
        userId: 12,
        sessions: [
            {
                day: '2023-07-01',
                kilogram: 69,
                calories: 240
            },
            {
                day: '2023-07-02',
                kilogram: 70,
                calories: 220
            },
            {
                day: '2023-07-03',
                kilogram: 71,
                calories: 280
            },
            {
                day: '2023-07-04',
                kilogram: 70,
                calories: 250
            },
            {
                day: '2023-07-05',
                kilogram: 70,
                calories: 220
            },
            {
                day: '2023-07-06',
                kilogram: 69,
                calories: 230
            },
            {
                day: '2023-07-07',
                kilogram: 70,
                calories: 260
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: '2023-07-01',
                kilogram: 67,
                calories: 240
            },
            {
                day: '2023-07-02',
                kilogram: 66,
                calories: 220
            },
            {
                day: '2023-07-03',
                kilogram: 66,
                calories: 280
            },
            {
                day: '2023-07-04',
                kilogram: 67,
                calories: 250
            },
            {
                day: '2023-07-05',
                kilogram: 68,
                calories: 220
            },
            {
                day: '2023-07-06',
                kilogram: 67,
                calories: 230
            },
            {
                day: '2023-07-07',
                kilogram: 67,
                calories: 260
            }
        ]
    }
];

export const USER_AVERAGE_SESSIONS = [
    {
        userId: 12,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 40
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 30
            },
            {
                day: 5,
                sessionLength: 30
            },
            {
                day: 6,
                sessionLength: 50
            },
            {
                day: 7,
                sessionLength: 40
            }
        ]
    },
    {
        userId: 18,
        sessions: [
            {
                day: 1,
                sessionLength: 30
            },
            {
                day: 2,
                sessionLength: 40
            },
            {
                day: 3,
                sessionLength: 50
            },
            {
                day: 4,
                sessionLength: 30
            },
            {
                day: 5,
                sessionLength: 30
            },
            {
                day: 6,
                sessionLength: 50
            },
            {
                day: 7,
                sessionLength: 60
            }
        ]
    }
];

export const USER_PERFORMANCE = [
    {
        userId: 12,
        kind: {
            1: 'cardio',
            2: 'energie',
            3: 'endurance',
            4: 'force',
            5: 'vitesse',
            6: 'intensité'
        },
        data: [
            {
                value: 80,
                kind: 1
            },
            {
                value: 70,
                kind: 2
            },
            {
                value: 70,
                kind: 3
            },
            {
                value: 50,
                kind: 4
            },
            {
                value: 90,
                kind: 5
            },
            {
                value: 80,
                kind: 6
            }
        ]
    },
    {
        userId: 18,
        kind: {
            1: 'cardio',
            2: 'energie',
            3: 'endurance',
            4: 'force',
            5: 'vitesse',
            6: 'intensité'
        },
        data: [
            {
                value: 70,
                kind: 1
            },
            {
                value: 80,
                kind: 2
            },
            {
                value: 60,
                kind: 3
            },
            {
                value: 70,
                kind: 4
            },
            {
                value: 80,
                kind: 5
            },
            {
                value: 90,
                kind: 6
            }
        ]
    }
]; 