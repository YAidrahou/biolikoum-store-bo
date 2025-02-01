import { JSX } from "react";

interface FeatureHomeButtonProps {
    title: string;
    description: string;
    icon: JSX.Element;
}
const FeatureButton = ({icon, title, description}:FeatureHomeButtonProps) => {
    return (
        <div className="flex flex-row items-center justify-center p-4 bg-white rounded-lg h-[150px] border border-gray-500 cursor-pointer  hover:border-primary ">
            {icon}
            <div className="flex flex-col jusify-between items-start ml-4">
                <span className="font-semibold text-lg">{title}</span>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
            
        </div>
    );
}

export default FeatureButton;