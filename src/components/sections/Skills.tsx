import reactLogo from '../../assets/images/react-tur.svg';
import javascriptLogo from '../../assets/images/javascript.svg';

const SkillsSection = () => {

    return (
        <section className="section-wrapper skills-wrapper" id="section-skills">
            <h2 className='skills-title'>Skills</h2>
            <div className='skill-box'>
                <h3>React</h3>
                <img src={reactLogo} alt="React logo" width={200} />
            </div>
            <div className='skill-box'>
                <h3>React</h3>
                <img src={javascriptLogo} alt="React logo" width={200} />
            </div>
            <div className='skill-box'>
                <h3>React</h3>
                <img src={reactLogo} alt="React logo" width={200} />
            </div>
        </section >
    )
}

export default SkillsSection;