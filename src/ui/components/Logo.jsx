import React from 'react';

const Logo = ({fill = "fill-fuchsia-700", text = "fill-gray-50"}) => {
    return (
        <div className="flex w-8 h-8 gap-3 items-center">
            <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                className={`w-12 h-12 ${fill}`}
            >
                <circle
                    cx="12"
                    cy="12"
                    r="11"

                    strokeWidth="3"

                />
                <text
                    className={text}
                    x="50%"
                    y="55%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fontSize="16"
                    fontFamily="Arial"
                >S
                </text>
            </svg>

        </div>
    );
};

export default Logo;