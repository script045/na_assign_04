import React from 'react';
import {FilledButton} from "./components/buttons.jsx";
import AboutCard from "./components/AboutCard.jsx";

const About = () => {

    const cardTexts = [
        {
            id: 1,
            title: "User Experience (UX)",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
            selected: true
        },
        {
            id: 2,
            title: "User Interface (UI)",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
            selected: false
        },
        {
            id: 3,
            title: "Web Development",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non, laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum.",
            selected: false
        }
    ]

    return (
        <div className="flex container gap-8 bg-gray-200 py-32">
            <div className="flex justify-center items-center">
                <div className="flex flex-col gap-6 w-4/5">
                    <h1 className="text-4xl font-semibold">What I do?</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit non,
                        laoreet imperdiet orci. Mauris ultrices eget lorem ac vestibulum. Suspendis imperdiet,</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla purus arcu, varius eget velit
                        non.</p>
                    <div>
                        <FilledButton title="Say Hello!"/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-6 ">
                {
                    cardTexts.map((card, index) => (
                        <AboutCard key={index} cardText={card}/>
                    ))
                }

            </div>
        </div>
    );
};

export default About;