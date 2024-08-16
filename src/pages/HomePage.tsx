import AboutSection from "../components/sections/About";
import ContactSection from "../components/sections/Contact";
import ProjectsSection from "../components/sections/Projects";
import SkillsSection from "../components/sections/Skills";
import profile from "../assets/images/profile-pic.jpeg";
import Navigation from "../components/Navigation";

const HomePage = () => {

    return (
        <div className="homePage">
            <h1 className="homeHeader">Home</h1>
            <div>
                <figure className="logo-pic">
                    <img src={profile} alt="Profile picture" />
                </figure>
            </div>
            <Navigation></Navigation>

            <AboutSection></AboutSection>

            <ContactSection></ContactSection>

            <SkillsSection></SkillsSection>

            <ProjectsSection></ProjectsSection>

        </div>
    )
}

export default HomePage;