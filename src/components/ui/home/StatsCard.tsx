import { JSX } from "react";

interface StatsCardProps {
    title: string;
    value: string;
    description: string;
    icon: JSX.Element;
    color: string;
    backgroundColor?: string;
}

const StatsCard = ({ title, value,  description, color, icon }: StatsCardProps) => {
    return (
        <div className={`relative flex items-center border rounded-lg border-gray-400 p-4  h-[200px]  bg-cardbg dark:bg-background `}>
            <div className="ml-3 flex flex-col text-secondary dark:text-text">
                <h3 className="text-[28px]">{title}</h3>
                <span className="text-[24px] font-bold">{value}</span>
                <p className="stats-card-description">{description}</p>
            </div>
            <div className={`flex flex-grow text-right ${color} dark:${color}`}>
                {icon}
            </div>
        </div>
    );
}

export default StatsCard;