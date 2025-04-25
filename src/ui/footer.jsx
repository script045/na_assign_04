import React from 'react';
import Logo from "./components/Logo.jsx";
import LogoName from "./components/LogoName.jsx";


const links = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "/"
    },
    {
        title: "Services",
        path: "/"
    },
    {
        title: "Process",
        path: "/"
    },
    {
        title: "Projects",
        path: "/"
    },
    {
        title: "Blog",
        path: "/"
    },
    {
        title: "Contact",
        path: "/"
    },
]

const Footer = () => {
    return (
        <div className="container  bg-gray-800 text-gray-50 pt-16">
            <div className="p-12 flex justify-between items-center">
            <div className="flex w-fit gap-2 items-center">
                <Logo/>
                <LogoName/>
            </div>
            <div className="flex gap-2">
                {
                    links.map((lnk, index) => (
                        <div key={index}
                             className="cursor-pointer"
                        >
                            {lnk.title}
                        </div>
                    ))
                }


            </div>
            <div>
                <p>Copyright © 2025. All Rights Reserved.</p>
            </div>
            </div>
        </div>
    );
};

export default Footer;