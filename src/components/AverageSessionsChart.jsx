import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Rectangle } from 'recharts';
import { formatAverageSessionsData } from '../services/dataFormatter';


const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-white text-black p-[5px_10px] text-[10px] font-medium text-center">
                <p>{`${payload[0].value} min`}</p>
            </div>
        );
    }
    return null;
};

// Effet assombrissement de la card lors du survol
const CustomCursor = ({ points }) => {
    if (!points || points.length === 0) return null;
    const { x } = points[0];

    return (
        <Rectangle
            fill="#000000"
            fillOpacity={0.1}
            x={x}
            y={0}
            width={2000}
            height={500}
        />
    );
};

const AverageSessionsChart = ({ data }) => {
    const extendedData = formatAverageSessionsData(data);

    return (
        <div className="w-full h-[263px] bg-primary rounded-md overflow-hidden relative">
            <h3 className="text-[rgba(255,255,255,0.6)] text-[15px] font-medium absolute top-5 left-5 max-w-[150px] z-10">
                Durée moyenne des sessions
            </h3>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    data={extendedData}
                    margin={{ top: 50, right: 0, left: 0, bottom: 20 }}
                >
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.4)" />
                            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
                        </linearGradient>
                    </defs>
                    <XAxis
                        dataKey="dayLetter"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: 'rgba(255, 255, 255, 0.6)', fontSize: 12 }}
                        dy={15}
                        tickFormatter={(value) => value === '' ? '' : value}
                    />
                    <YAxis
                        hide
                        domain={['dataMin-10', 'dataMax+10']}
                    />
                    <Tooltip
                        content={<CustomTooltip />}
                        cursor={<CustomCursor />}
                        wrapperStyle={{ outline: 'none' }}
                    />
                    <Line
                        type="natural"
                        dataKey="sessionLength"
                        stroke="url(#lineGradient)"
                        strokeWidth={2}
                        dot={false}
                        activeDot={{ r: 4, fill: '#FFF', stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AverageSessionsChart; 