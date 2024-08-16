import reactLogo from '../../assets/images/react-tur.svg';
import javascriptLogo from '../../assets/images/javascript.svg';

const SkillsSection = () => {
    return (
        <section className="section-wrapper skills-wrapper" id="section-skills">
            <h2>Skills</h2>
            {/* Gallery of all the skills I have learned so far. */}
            <img src={reactLogo} alt="React logo" width={200} />
            <img src={javascriptLogo} alt="TypeScript logo" width={200} />

        </section>
    )
}

export default SkillsSection;