import React from 'react';

const BannerCard = ({card}) => {
    return (
        <div className="flex flex-col p-3 bg-fuchsia-200 rounded w-full">
            <div className="text-2xl font-semibold text-center">{card.title}</div>
            <div className="text-center"> {card.desc}</div>
        </div>
    );
};

export default BannerCard;