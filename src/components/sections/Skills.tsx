import reactLogo from '../../assets/images/react-tur.svg';
import javascriptLogo from '../../assets/images/javascript.svg';
import React from 'react';
import Carousel from '../Carousel';

const SkillsSection: React.FC = () => {

    const items = [
        {
            icon: reactLogo,
            title: "React",
            text: "During diffrent projects I have worked with React. I have experience with React hooks, React Router, Context API, Redux, and Redux Toolkit.",
            btn1Text: "The Movie DB",
            btn1Link: "https://thebestmoviepage.netlify.app/ ",
            // btn2Text: "Sulten",
            // btn2Link: "https://sulten.netlify.app/  ",
        },
        {
            icon: javascriptLogo,
            title: "JavaScript",
            text: "I have experience with JavaScript ES6, and I have worked with JavaScript libraries such as Axios, Lodash, and Moment.js.",
            btn1Text: "Flags Quiz",
            btn1Link: "https://quizwithflags.netlify.app/",
        },
        {
            icon: javascriptLogo,
            title: "TypeScript",
            text: "During almost my hole eduction we been using TypeScript when lerning both JavaScript and React. From day one using TypeScript I felt that it made more sence to me than JavaScript. It gives me a better understanding of the code and makes it easier to read and understand.",
            btn1Text: "Sulten",
            btn1Link: "https://sulten.netlify.app/",
        },
        {
            icon: javascriptLogo,
            title: "Vue",
            text: "Under my internship I worked with Vue.js. I have experience with Vue Router, Vuex, and Vue CLI.",
            btn1Text: "",
            btn1Link: "",
        }
    ];

    const handleInteraction = (label: string) => {
        console.log(`Interaction with: ${label}`);
    };

    return (
        <section className="section-wrapper skills-wrapper" id="section-skills">
            <h2 className='skills-title'>Skills</h2>
            <Carousel items={items} sendInteraction={handleInteraction} />
        </section >
    )
}

export default SkillsSection;

{/* <div className='skill-box'>
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
            </div> */}