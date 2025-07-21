import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import { formatPerformanceData } from '../services/dataFormatter';

const PerformanceChart = ({ data, kind }) => {
    const formattedData = formatPerformanceData(data, kind);

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
                        dataKey="kind"
                        tick={{ fill: 'white', fontSize: 12 }}
                        tickFormatter={(value) => value.charAt(0).toUpperCase() + value.slice(1)}
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