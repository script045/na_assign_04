import React from 'react';

const LogoName = ({text = "Santosh", textFill="fill-gray-50"}) => {
    return (
        <div>
            <svg
                className="h-8 w-full"
                viewBox="0 0 300 100"
                width="300"
                height="100"
                xmlns="http://www.w3.org/2000/svg"
            >
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="72"
                    fontFamily="Arial"
                    fontWeight="bold"

                    className={textFill}
                >
                    {text}
                </text>
            </svg>

        </div>
    );
};

export default LogoName;