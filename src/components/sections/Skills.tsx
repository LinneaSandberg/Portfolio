import reactLogo from '../../assets/images/react-tur.svg';
import javascriptLogo from '../../assets/images/javascript.svg';

const SkillsSection = () => {

    return (
        <section className="section-wrapper skills-wrapper" id="section-skills">
            <h2 className='skills-title'>Skills</h2>
            <div className='skill-box'>
                <h3>React</h3>
                <img src={reactLogo} alt="React logo" width={200} />
                <p className='skill-text'>
                    During diffrent projects I have worked with React. I have experience with React hooks, React Router, Context API, Redux, and Redux Toolkit.
                </p>
            </div>
            <div className='skill-box'>
                <h3>React</h3>
                <img src={javascriptLogo} alt="React logo" width={200} />
                <p className='skill-text'>
                    I have experience with JavaScript ES6, and I have worked with JavaScript libraries such as Axios, Lodash, and Moment.js.
                </p>
            </div>
            <div className='skill-box'>
                <h3>React</h3>
                <img src={reactLogo} alt="React logo" width={200} />
                <p className='skill-text'>
                    During almost my hole eduction we been using TypeScript when lerning both JavaScript and React. From day one using TypeScript I felt that it made more sence to me than JavaScript. It gives me a better understanding of the code and makes it easier to read and understand.
                </p>
            </div>
        </section >
    )
}

export default SkillsSection;