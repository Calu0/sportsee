import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { formatActivityData, getActivityLegendLabel } from '../services/dataFormatter';



const CustomLegend = (props) => {
    const { payload } = props;

    return (
        <div className="flex justify-between w-full px-5 absolute top-0 left-0">
            <h3 className="text-[15px] font-medium text-[#20253A]">Activité quotidienne</h3>
            <div className="flex gap-8">
                {payload.map((data, index) => (
                    <div key={`item-${index}`} className="flex items-center gap-2.5">
                        <span className="w-2 h-2 rounded-full" style={{ backgroundColor: data.color }}></span>
                        <span className="text-[14px] text-[#74798C]">
                            {getActivityLegendLabel(data.value)}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-primary text-white p-2.5 text-[10px] text-center w-[60px]">
                <p className="my-1">{`${payload[0].value}kg`}</p>
                <p className="my-1">{`${payload[1].value}kCal`}</p>
            </div>
        );
    }
    return null;
};


const ActivityChart = ({ data }) => {

    const formattedData = formatActivityData(data);

    return (
        <div className="w-full h-[320px] bg-background-light rounded-md p-5 shadow-sm relative">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    data={formattedData}
                    margin={{ top: 60, right: 30, left: 20, bottom: 20 }}
                    barGap={8}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis
                        dataKey="day"
                        tickLine={false}
                        axisLine={{ stroke: '#DEDEDE' }}
                        tick={{ fill: '#9B9EAC', fontSize: 14 }}
                        dy={15}
                    />
                    <YAxis
                        yAxisId="left"
                        orientation="left"
                        stroke="#8884d8"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9B9EAC', fontSize: 14 }}
                        dx={-15}
                        hide
                    />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#82ca9d"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#9B9EAC', fontSize: 14 }}
                        dx={15}
                        domain={[0, 90]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend content={<CustomLegend />} verticalAlign="top" height={80} />
                    <Bar
                        yAxisId="right"
                        dataKey="kilogram"
                        fill="#282D30"
                        radius={[10, 10, 0, 0]}
                        barSize={7}
                    />
                    <Bar
                        yAxisId="left"
                        dataKey="calories"
                        fill="#E60000"
                        radius={[10, 10, 0, 0]}
                        barSize={7}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ActivityChart; 