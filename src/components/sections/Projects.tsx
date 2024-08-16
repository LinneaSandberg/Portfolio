// import placeholder from "../../assets/images/placeholder.webp";
// import { gsap } from "gsap";
// import { useGSAP } from "@gsap/react";

const ProjectsSection = () => {

    return (
        <section className="section-wrapper project-section" id="section-projects">
            <h2>Projects</h2>
            <div className="boxes-wrapper">
                <div className="box project-box">
                    <p>Project 1</p>
                    {/* <figure>
                        <img className="circle" src={placeholder} alt="placeholder"></img>
                    </figure> */}
                </div>
                <div className="box project-box">
                    <p>Project 2</p>
                    {/* <figure>
                        <img className="circle" src={placeholder} alt="placeholder"></img>
                    </figure> */}
                </div>
                <div className="box project-box">
                    <p>Project 3</p>
                    {/* <figure>
                        <img className="circle" src={placeholder} alt="placeholder"></img>
                    </figure> */}
                </div>
                <div className="box project-box">
                    <p>Project 4</p>
                    {/* <figure>
                        <img className="circle" src={placeholder} alt="placeholder"></img>
                    </figure> */}
                </div>
            </div>
        </section>
    )
}

export default ProjectsSection;