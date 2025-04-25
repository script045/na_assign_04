import React from 'react';
import ProcessCard from "./components/ProcessCard.jsx";

const Process = () => {
    const cards = [
        {
            img: "/process/education.svg",
            title: "1. Research",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
            selected: true
        },
        {
            img: "/process/pencil.svg",
            title: "2. Design",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
            selected: false
        },
        {
            img: "/process/graph.svg",
            title: "3. Analyze",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
            selected: false
        },
        {
            img: "/process/computer.svg",
            title: "4. Launch",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu.",
            selected: false
        }
    ]
    return (
        <div className="flex bg-gray-200 container py-12">
            <div className="flex  w-1/2 items-center justify-center">
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl font-semibold">Work Process</h1>
                    <p className="w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu,
                        varius
                        eget velit non,
                        laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                    <p className="w-4/5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu,
                        varius
                        eget velit non.</p>
                </div>
            </div>
            <div className="flex w-1/2 gap-4">
                <div className="flex flex-col gap-4 ">
                    <ProcessCard card={cards[0]}/>
                    <ProcessCard card={cards[1]}/>
                </div>
                <div className="flex flex-col gap-4 pt-4">
                    <ProcessCard card={cards[2]}/>
                    <ProcessCard card={cards[3]}/>
                </div>

            </div>
        </div>
    );
};

export default Process;