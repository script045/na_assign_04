import React from 'react';

const FilledButton = ({title}) => {
    const classes = "px-4 py-2 text-white bg-fuchsia-800 font-bold rounded-md";
    return (

        <button className={classes}>
            {title}
        </button>


    );
};

const ImageTextButton = ({title}) => {
    return (
        <button onClick=""
                className="flex gap-2 border border-fuchsia-700 text-fuchsia-700  px-4 py-2 font-semibold rounded-md">
            {title}


            <svg className="w-6 h-6 stroke-fuchsia-800  " aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"/>
            </svg>

        </button>
    )
}
const ImageTextFilledButton = ({title}) => {
    return (
        <button onClick=""
                className="flex gap-2 bg-fuchsia-700 text-white  px-4 py-2 font-semibold rounded-md">
            {title}


            <svg className="w-6 h-6 stroke-white  " aria-hidden="true"
                 xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19 12H5m14 0-4 4m4-4-4-4"/>
            </svg>

        </button>
    )
}


export {FilledButton, ImageTextButton, ImageTextFilledButton};