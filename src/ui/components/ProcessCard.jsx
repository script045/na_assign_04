import React from 'react';

const ProcessCard = ({card}) => {
    let cls = ""
    if (card.selected) {
        cls = "bg-fuchsia-600"
    } else {
        cls = "bg-fuchsia-100"
    }
    return (
        <div className="bg-white p-6 rounded-lg flex gap-2 flex-col">
            <div className={`flex items-center justify-center rounded ${cls} w-12 h-12`}>
                <img src={card.img} alt=""/>
            </div>
            <div className="flex gap-2 flex-col">
                <h1 className="text-2xl font-semibold">{card.title}</h1>
                <p>{card.desc}</p>
            </div>
        </div>
    );
};

export default ProcessCard;