import AboutSection from "../components/sections/About";
import ContactSection from "../components/sections/Contact";
import ProjectsSection from "../components/sections/Projects";
import SkillsSection from "../components/sections/Skills";
import profile from "../assets/images/profile-pic.jpeg";
import Navigation from "../components/Navigation";
import HeroSection from "../components/sections/Hero";

const Home = () => {

    return (
        <div className="homePage">
            <header>
                <a href="#home" className="logo-pic">
                    <img src={profile} alt="Profile picture" />
                </a>
                <Navigation></Navigation>
            </header>

            <main>
                <HeroSection></HeroSection>


                <AboutSection></AboutSection>

                <ContactSection></ContactSection>

                <SkillsSection></SkillsSection>

                <ProjectsSection></ProjectsSection>
            </main >


            <footer>
                <p>&copy; 2024 by Linnea Sandberg</p>
            </footer>
        </div >
    )
}

export default Home;