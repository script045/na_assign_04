import React from 'react';

const AboutCard = ({cardText}) => {

    let classes = "";
    if (cardText.selected) {
        classes = "flex flex-col gap-2 bg-white border-l-6 border-fuchsia-700  shadow text-gray-900 p-4 rounded"
    } else {
        classes = "flex flex-col gap-2 bg-white shadow text-gray-900 p-4 rounded"
    }

    return (
        <div className={classes}>
            <h1 className="text-2xl font-semibold">{cardText.title}</h1>
            <p>{cardText.desc}</p>
        </div>
    );
};

export default AboutCard;