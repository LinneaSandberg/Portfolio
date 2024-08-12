import AboutSection from "../components/sections/About";
import ContactSection from "../components/sections/Contact";
import ProjectsSection from "../components/sections/Projects";
import SkillsSection from "../components/sections/Skills";

const HomePage = () => {
    return (
        <div className="homePage">
            <h1 className="homeHeader">Home</h1>
            <div className="menu">
                <ul>
                    <li>
                        <a href="#section-about" data-title="About"></a>
                    </li>
                    <li>
                        <a href="#section-skills" data-title="Skills"></a>
                    </li>
                    <li>
                        <a href="#section-projects" data-title="Projects"></a>
                    </li>
                    <li>
                        <a href="#section-contact" data-title="Contact"></a>
                    </li>
                </ul>
            </div>

            <AboutSection></AboutSection>

            <ContactSection></ContactSection>

            <SkillsSection></SkillsSection>

            <ProjectsSection></ProjectsSection>

        </div>
    )
}

export default HomePage;