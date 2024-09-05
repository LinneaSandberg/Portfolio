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
                    <h3 className="project-titles">Flag Quiz Game</h3>
                    <figure className="project-figure">
                        <a href="https://quizwithflags.netlify.app/">
                            <img className="circle" src={quiz} alt="quiz game"></img>
                        </a>
                    </figure>
                </div>
                <div className="project-box">
                    <h3 className="project-titles">The Movie DB</h3>
                    <figure className="project-figure">
                        <a href="https://thebestmoviepage.netlify.app/">
                            <img className="circle" src={movieDB} alt="Movie DB"></img>
                        </a>
                    </figure>
                </div>
                <div className="project-box">
                    <h3 className="project-titles">Star Wars Encyclopedia</h3>
                    <figure className="project-figure">
                        <a href="https://starwarsencyclopia.netlify.app/">
                            <img className="circle" src={starWars} alt="Star Wars"></img>
                        </a>
                    </figure>
                </div>
                <div className="project-box">
                    <h3 className="project-titles">Sulten</h3>
                    <figure className="project-figure">
                        <a href="https://sulten.netlify.app/">
                            <img className="circle" src={sulten} alt="Sulten"></img>
                        </a>
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;