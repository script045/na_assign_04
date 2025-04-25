import React from 'react';

const LinkButton = ({lnk}) => {
    let classes = ""
    if (lnk.selected) {
        classes = "rounded bg-fuchsia-600 text-white"
    }

    return (
        <div
            className={`cursor-pointer font-semibold px-3 py-1 ${classes}`}
        >
            {lnk.title}
        </div>
    );
};

export default LinkButton;