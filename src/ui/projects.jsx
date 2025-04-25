import React from 'react';
import ProjectCard from "./components/projcectcard.jsx";
import {FilledButton} from "./components/buttons.jsx";

const Projects = () => {

    const projects = [
        {
            id: 1,
            img: "/project/project1.png",
            type: "Block Chain",
            title: "ChainFund",
            desc: "A decentralized crowdfunding platform powered by smart contracts.",
            buttonTxt: "Case Study"
        },
        {
            id: 2,
            img: "/project/project2.png",
            type: "Block Chain",
            title: "MetaLease",
            desc: "Blockchain-based solution for secure digital leasing and asset rentals.",
            buttonTxt: "Case Study"
        },
        {
            id: 3,
            img: "/project/project3.png",
            type: "Block Chain",
            title: "BlockCerts",
            desc: "Tamper-proof certificate issuance and verification on the blockchain..",
            buttonTxt: "Case Study"
        },
        {
            id: 4,
            img: "/project/project4.png",
            type: "Block Chain",
            title: "DeTrust Vault",
            desc: "A non-custodial DeFi wallet with built-in trustless escrow services.",
            buttonTxt: "Case Study"
        },
        {
            id: 5,
            img: "/project/project5.png",
            type: "Block Chain",
            title: "NFTicket",
            desc: "NFT-powered event ticketing system to prevent fraud and scalping.",
            buttonTxt: "Case Study"
        },
        {
            id: 6,
            img: "/project/project6.png",
            type: "Block Chain",
            title: "DAOgenda",
            desc: "A governance platform enabling transparent DAO decision-making and voting.",
            buttonTxt: "Case Study"
        }

    ]

    return (

        <div className="container flex flex-col items-center gap-16 py-32">
            <div className="flex flex-col gap-4 justify-center items-center">
                <p className="title">Projects</p>
                <p className="desc w-1/2 text-center">There are many variations of passages of Lorem Ipsum available,
                    but the majority have suffered alteration.</p>
            </div>
            <div className="flex flex-wrap gap-6">

                {
                    projects.map((p, i) => (
                        <ProjectCard key={i} project={p}/>
                    ))
                }
            </div>

                <FilledButton title="More Project"/>


        </div>
    );
};

export default Projects;