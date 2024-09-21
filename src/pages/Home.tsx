import AboutSection from "../components/sections/About";
import ContactSection from "../components/sections/Contact";
import ProjectsSection from "../components/sections/Projects";
import SkillsSection from "../components/sections/Skills";
// import profile from "../assets/images/profile-pic.jpeg";
import Navigation from "../components/Navigation";
import HeroSection from "../components/sections/Hero";
import Footer from "../components/sections/Footer";

const Home = () => {

    return (
        <div id="Home" className="homePage">
            <header>
                {/* <a href="#home" className="logo-pic">
                    <img src={profile} alt="Profile picture" />
                </a> */}
                <Navigation></Navigation>
            </header>

            <main>
                <HeroSection></HeroSection>


                <AboutSection></AboutSection>

                <SkillsSection></SkillsSection>

                <ProjectsSection></ProjectsSection>

                <ContactSection></ContactSection>

            </main >

            <footer>
                <Footer></Footer>
            </footer>
        </div >
    )
}

export default Home;