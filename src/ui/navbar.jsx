import React from 'react';
import Logo from "./components/Logo.jsx";
import LinkButton from "./components/LinkButton.jsx";

const Navbar = () => {
    const links = [
        {
            title: "Home",
            path: "/",
            selected: false
        },
        {
            title: "About",
            path: "/",
            selected: false
        },

        {
            title: "Process",
            path: "/",
            selected: false
        },
        {
            title: "Projects",
            path: "/",
            selected: false
        },
        {
            title: "Services",
            path: "/",
            selected: false
        },
        {
            title: "Contact",
            path: "/",
            selected: true
        },
    ]
    return (
        <div className="container  bg-white text-gray-900 ">
            <div className="p-6 flex justify-between items-center">
                <div className="flex w-fit gap-2 items-center">
                    <Logo/>
                    <div className="text-2xl font-bold">Santosh Barai</div>
                </div>
                <div className="flex gap-6">
                    {
                        links.map((lnk, index) => (


                            <LinkButton lnk={lnk} key={index}/>
                        ))
                    }


                </div>

            </div>
        </div>
    );
};

export default Navbar;