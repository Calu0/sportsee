import React from 'react';
import { getNutritionBgColor } from '../services/dataFormatter';

const NutritionCard = ({ icon, value, unit, name }) => {
    const bgColorClass = getNutritionBgColor(name);

    return (
        <div className="w-full h-[124px] bg-background-light rounded-md p-5 flex items-center gap-5 shadow-sm box-border">
            <div className={`w-[60px] h-[60px] ${bgColorClass} rounded-md flex items-center justify-center`}>
                <img src={icon} alt={name} className="w-5 h-5" />
            </div>
            <div className="flex flex-col gap-1">
                <p className="text-[20px] font-bold text-[#282D30]">{value}{unit}</p>
                <p className="text-sm text-[#74798C]">{name}</p>
            </div>
        </div>
    );
};

export default NutritionCard; 