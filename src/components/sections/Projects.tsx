import quiz from "../../assets/images/projects/Quiz.png";
import movieDB from "../../assets/images/projects/MovieDB.png"
import starWars from "../../assets/images/projects/StarWars.png";
import sulten from "../../assets/images/projects/Sulten.png";
import React from "react";
import Card from "../Card";

const ProjectsSection: React.FC = () => {

    const items = [
        {
            icon: sulten,
            title: "Weather checker",
            text: "A simple weather app, to learn Vue with TypeScript. Fetching data from Open Mateo API.",
            btn1Link: "https://linneasandberg.github.io/weather-app/",

        },
        {
            icon: sulten,
            title: "Sulten",
            text: "Group project using React with TypeScript. Fetching data from Google Maps API.",
            btn1Link: "https://sulten.netlify.app/",
        },
        {
            icon: movieDB,
            title: "The Movie DB",
            text: "A React with TypeScript project. Fetching data from The Movie DB API.",
            btn1Link: "https://thebestmoviepage.netlify.app/ ",
        },
        {
            icon: starWars,
            title: "Star Wars Encyclopedia",
            text: "A React with TypeScript project. Fetching data from Star Wars API.",
            btn1Link: "https://starwarsencyclopia.netlify.app/",
        },
        {
            icon: quiz,
            title: "Flag Quiz Game",
            text: "A vanilla JavaScript project.",
            btn1Link: "https://quizwithflags.netlify.app/",
        }
    ];

    return (
        <section className="section-wrapper project-wrapper" id="section-Projects">
            <h2 className="projects-title">Projects</h2>
            <div className="cardslist">
                {items.map((item, index) => (
                    <Card key={index} icon={item.icon} title={item.title} text={item.text} btn1Link={item.btn1Link} />
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection;