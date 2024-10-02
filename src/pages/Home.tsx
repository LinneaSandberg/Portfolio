import AboutSection from "../components/sections/About";
import ContactSection from "../components/sections/Contact";
import ProjectsSection from "../components/sections/Projects";
import SkillsSection from "../components/sections/Skills";
import Navigation from "../components/Navigation";
import HeroSection from "../components/sections/Hero";
import Footer from "../components/sections/Footer";

const Home = () => {

    return (
        <div id="Home" className="homePage">
            <header>
                <Navigation></Navigation>
            </header>

            <main>
                <HeroSection></HeroSection>

                <AboutSection></AboutSection>

                <ProjectsSection></ProjectsSection>

                <SkillsSection></SkillsSection>

                <ContactSection></ContactSection>

            </main >

            <footer>
                <Footer></Footer>
            </footer>
        </div >
    )
}

export default Home;