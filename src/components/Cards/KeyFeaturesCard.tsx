import React from 'react';


interface KeyFeaturesCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode; // Optional icon prop
}

const KeyFeaturesCard: React.FC<KeyFeaturesCardProps> = ({ title, description, icon }) => {
    return (
        <div className="bg-[#0E1117]  rounded-xl p-4 shadow-md text-white w-full mx-auto py-10">
            <div className="flex items-center mb-2 space-x-2">
                {icon && <span className="text-white text-lg">{icon}</span>}
                <h3 className="text-lg font-semibold">{title}</h3>
            </div>
            <p className="text-base text-gray-400">{description}</p>
        </div>
    );
};

export default KeyFeaturesCard;
