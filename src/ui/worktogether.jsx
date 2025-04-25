import React from 'react';
import {ImageTextFilledButton} from "./components/buttons.jsx";

const WorkTogether = () => {
    return (
        <div className="flex flex-col gap-8 items-center bg-gray-900 container text-white py-36">
            <h1 className="text-4xl font-semibold w-1/2 text-center">Do you have Project Idea?
                Let's discuss your project! </h1>
            <p className="w-1/2 text-center text-gray-100">There are many variations of passages of Lorem Ipsum
                available,
                but the majority have suffered alteration.</p>

            <div>


                <ImageTextFilledButton title="Let’s work Together"/>
            </div>
        </div>
    );
};

export default WorkTogether;