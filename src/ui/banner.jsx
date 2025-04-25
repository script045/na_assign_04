import React from 'react';
import {FilledButton} from "./components/buttons.jsx";
import BannerCard from "./components/BannerCard.jsx";

const Banner = () => {

    const cards = [
        {
            title: "1 Y.",
            desc: "Experience"
        },
        {
            title: "25+",
            desc: "Project Completed"
        },
        {
            title: "19",
            desc: "Happy Client"
        }
    ]
    return (
        <div className="container flex py-16">
            <div className=" flex flex-col justify-between w-1/2 ">
                <div className="flex flex-col gap-4 ">
                    <h1 className="text-7xl font-bold">Hello, I’m Santosh Barai</h1>
                    <p className="text-xl">I'm a Blockchain Developer based in Dhaka, Bangladesh, focused on building
                        user-centric solutions
                        across smart contracts, NFTs, and DeFi platforms.</p>
                    <div>
                        <FilledButton title="Say Hello !"/>
                    </div>

                </div>
                <div className="flex gap-2 w-full">
                    {
                        cards.map((card, index) => (
                            <BannerCard card={card} key={index}/>
                        ))
                    }
                </div>
            </div>
            <div className=" flex justify-center items-center w-1/2 py-8 ">
                <img src="/santosh.png" alt="Santosh Barai" width="350px" className="rounded-lg"/>
            </div>
        </div>
    );
};

export default Banner;