


const DAYS_MAP = {
    1: 'L',
    2: 'M',
    3: 'M',
    4: 'J',
    5: 'V',
    6: 'S',
    7: 'D'
};

export const formatActivityData = (data) => {
    return data.map((item, index) => ({
        ...item,
        day: index + 1
    }));
};

export const formatAverageSessionsData = (data) => {
    const formattedData = data.map(session => ({
        ...session,
        dayLetter: DAYS_MAP[session.day] || ''
    }));

    // Points supplémentaires pour l'effet visuel de ligne prolongée
    const extendedData = [
        {
            ...formattedData[0],
            dayLetter: '',
            sessionLength: formattedData[0].sessionLength
        },
        ...formattedData,
        {
            ...formattedData[formattedData.length - 1],
            dayLetter: '',
            sessionLength: formattedData[formattedData.length - 1].sessionLength
        }
    ];

    return extendedData;
};

export const formatPerformanceData = (data, kind) => {
    return data.map(item => {
        const kindName = kind[item.kind];
        return {
            ...item,
            kind: kindName
        };
    }).reverse();
};

export const formatScoreData = (score) => {
    const scorePercentage = score * 100;
    return {
        scorePercentage,
        data: [
            { name: 'score', value: scorePercentage },
            { name: 'total', value: 100 - scorePercentage }
        ]
    };
};

export const getNutritionBgColor = (nutritionType) => {
    if (nutritionType === 'Calories') {
        return 'bg-[#FF00001A]';
    } else if (nutritionType === 'Protéines') {
        return 'bg-[#4AB8FF1A]';
    } else if (nutritionType === 'Glucides') {
        return 'bg-[#FDCC0C1A]';
    } else if (nutritionType === 'Lipides') {
        return 'bg-[#FD51811A]';
    }
};

export const getActivityLegendLabel = (dataKey) => {
    if (dataKey === 'kilogram') {
        return 'Poids (kg)';
    } else if (dataKey === 'calories') {
        return 'Calories brûlées (kCal)';
    }

    return dataKey;
}; 