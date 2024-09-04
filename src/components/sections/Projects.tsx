// import placeholder from "../../assets/images/placeholder.webp";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";
import quiz from "../../assets/images/projects/quiz.png";
import movieDB from "../../assets/images/projects/movieDB.png"
import starWars from "../../assets/images/projects/starWars.png";
import sulten from "../../assets/images/projects/sulten.png";

const ProjectsSection = () => {

    return (
        <section className="section-wrapper project-section" id="section-projects">
            <h2 className="projects-title">Projects</h2>
            <div className="boxes-wrapper">
                <div className="project-box">
                    <p>Project 1</p>
                    <figure className="project-figure">
                        <img className="circle" src={quiz} alt="quiz game"></img>
                    </figure>
                </div>
                <div className="project-box">
                    <p>Project 2</p>
                    <figure className="project-figure">
                        <img className="circle" src={movieDB} alt="Movie DB"></img>
                    </figure>
                </div>
                <div className="project-box">
                    <p>Project 3</p>
                    <figure className="project-figure">
                        <img className="circle" src={starWars} alt="Star Wars"></img>
                    </figure>
                </div>
                <div className="project-box">
                    <p>Project 4</p>
                    <figure className="project-figure">
                        <img className="circle" src={sulten} alt="Sulten"></img>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;