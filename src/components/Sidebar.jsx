import React from 'react';


const Sidebar = () => {
    return (
        <aside className="fixed  left-0 top-0 h-screen w-[117px] bg-secondary text-white flex flex-col items-center justify-between py-5 z-sidebar">
            <div className="flex flex-col gap-5 mt-[280px]">
                <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center cursor-pointer">
                    <img src="/zen.svg" alt="Méditation" className="w-8 h-8" />
                </div>
                <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center cursor-pointer">
                    <img src="/swim.svg" alt="Natation" className="w-8 h-8" />
                </div>
                <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center cursor-pointer">
                    <img src="/bike.svg" alt="Cyclisme" className="w-8 h-8" />
                </div>
                <div className="w-16 h-16 bg-white rounded-md flex items-center justify-center cursor-pointer">
                    <img src="/muscu.svg" alt="Musculation" className="w-8 h-8" />
                </div>
            </div>
            <div className="[writing-mode:vertical-rl] rotate-180 text-xs">
                <p>Copyright, SportSee 2020</p>
            </div>
        </aside>
    );
};

export default Sidebar; 