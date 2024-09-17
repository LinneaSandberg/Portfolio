import quiz from "../../assets/images/projects/Quiz.png";
import movieDB from "../../assets/images/projects/MovieDB.png"
import starWars from "../../assets/images/projects/StarWars.png";
import sulten from "../../assets/images/projects/Sulten.png";
import Carousel from "../Carousel";
import React from "react";

const ProjectsSection: React.FC = () => {

    const items = [
        {
            icon: sulten,
            title: "Sulten",
            text: "We developed a web application using React and TypeScript, where all data was stored in Firestore and all authentication was handled with Firebase Authentication. Users could view nearby dining establishments on an interactive map and in a list, and access detailed information and images in a gallery. The app used GPS to show the user's and the establishments' locations and offered search functionality via a dropdown or Google Maps City-selector. Administrators could create, update, and delete restaurants and manage user-submitted tips. The system supported uploading multiple images simultaneously and displayed data in sortable tables using React Table. Full browser integration ensured that the back and forward buttons functioned correctly.",
            btn1Text: "Sulten",
            btn1Link: "https://sulten.netlify.app/",
        },
        {
            icon: movieDB,
            title: "The Movie DB",
            text: "",
            btn1Text: "The Movie DB",
            btn1Link: "https://thebestmoviepage.netlify.app/ ",
        },
        {
            icon: starWars,
            title: "Star Wars Encyclopedia",
            text: "The Star Wars Encyclopedia application was built using React and TypeScript, utilizing key features such as useState, useEffect, and Fetch or Axios for data fetching. React Router provided smooth navigation, with a component-based design ensuring modularity. Robust loading and error handling were implemented, and the code was version-controlled with Git. Users could browse various Star Wars resources using pagination and perform universal searches across different entities. Results included comprehensive details and links to related resources, supported by URLSearchParams for seamless navigation and efficient browsing.",
            btn1Text: "Star Wars Encyclopedia",
            btn1Link: "https://starwarsencyclopia.netlify.app/",
        },
        {
            icon: quiz,
            title: "Flag Quiz Game",
            text: "",
            btn1Text: "Flag Quiz Game",
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