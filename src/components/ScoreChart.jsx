import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';


const ScoreChart = ({ score }) => {

    const scorePercentage = score * 100;
    const data = [
        { name: 'score', value: scorePercentage },
        { name: 'total', value: 100 - scorePercentage }
    ];

    return (
        <div className="w-full h-[263px] bg-background-light rounded-md p-5 shadow-sm relative">
            <h3 className="text-[#20253A] text-[15px] font-medium absolute top-5 left-5">Score</h3>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
                <span className="text-[#282D30] text-[26px] font-bold block mb-1">{`${scorePercentage}%`}</span>
                <p className="text-[#74798C] text-base font-medium max-w-[80px] mx-auto">de votre objectif</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius="70%"
                        outerRadius="80%"
                        startAngle={90}
                        endAngle={450}
                        dataKey="value"
                    >
                        <Cell key="score" fill="#FF0000" />
                        <Cell key="total" fill="transparent" />
                    </Pie>
                    <Pie
                        data={[{ name: 'background', value: 100 }]}
                        cx="50%"
                        cy="50%"
                        innerRadius="0%"
                        outerRadius="70%"
                        dataKey="value"
                    >
                        <Cell fill="white" />
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ScoreChart; 