import quiz from "../../assets/images/projects/quiz.png";
import movieDB from "../../assets/images/projects/movieDB.png"
import starWars from "../../assets/images/projects/starWars.png";
import sulten from "../../assets/images/projects/sulten.png";
import Carousel from "../Carousel";
import React from "react";

const ProjectsSection: React.FC = () => {

    const items = [
        {
            icon: sulten,
            title: "Sulten",
            text: "",
            btn1Text: "",
            btn1Link: "https://sulten.netlify.app/",
        },
        {
            icon: movieDB,
            title: "The Movie DB",
            text: "",
            btn1Text: "Flags Quiz",
            btn1Link: "https://thebestmoviepage.netlify.app/ ",
        },
        {
            icon: starWars,
            title: "Star Wars Encyclopedia",
            text: "",
            btn1Text: "Sulten",
            btn1Link: "https://starwarsencyclopia.netlify.app/",
        },
        {
            icon: quiz,
            title: "Flag Quiz Game",
            text: "",
            btn1Text: "",
            btn1Link: "https://quizwithflags.netlify.app/",
        }
    ];

    const handleInteraction = (label: string) => {
        console.log(`Interaction with: ${label}`);
    };

    return (
        <section className="section-wrapper project-wrapper carousel-section" id="section-projects">
            <h2 className="projects-title">Projects</h2>
            <Carousel items={items} sendInteraction={handleInteraction} />
        </section>
    )
}

export default ProjectsSection;