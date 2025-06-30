import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const PerformanceChart = ({ data, kind }) => {
    const kindTranslation = {
        cardio: 'Cardio',
        energie: 'Energie',
        endurance: 'Endurance',
        force: 'Force',
        vitesse: 'Vitesse',
        intensité: 'Intensité'
    };

    const formattedData = data.map(item => {
        const kindName = kind[item.kind];
        return {
            ...item,
            kind: kindName,
            kindFr: kindTranslation[kindName] || kindName
        };
    }).reverse();

    return (
        <div className="w-full h-[263px] bg-[#282D30] rounded-md p-5 shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    cx="50%"
                    cy="50%"
                    outerRadius="70%"
                    data={formattedData}
                >
                    <PolarGrid radialLines={false} />
                    <PolarAngleAxis
                        dataKey="kindFr"
                        tick={{ fill: 'white', fontSize: 12 }}
                    />
                    <Radar
                        name="Performance"
                        dataKey="value"
                        fill="#FF0101"
                        fillOpacity={0.7}
                    />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default PerformanceChart; 