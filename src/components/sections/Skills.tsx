import reactLogo from '../../assets/images/react.svg';
import javascriptLogo from '../../assets/images/javascript.svg';
import React from 'react';
import Carousel from '../Carousel';
import vue from "../../assets/images/vue.svg"
import placeHolder from '../../assets/images/placeholder.webp';

const SkillsSection: React.FC = () => {

    const items = [
        {
            icon: reactLogo,
            title: "React",
            text: "During different projects, I have worked with React. I have experience with React Hooks, React Router, Context API, Redux, and Redux Toolkit.",
            btn1Text: "The Movie DB",
            btn1Link: "https://thebestmoviepage.netlify.app/ ",
        },
        {
            icon: javascriptLogo,
            title: "JavaScript",
            text: "During my education, we gained a comprehensive understanding of programming concepts in general and developed skills specifically in JavaScript/EcmaScript and related areas. This enabled us to create interactive, user-centered websites individually and collaboratively. The course aimed to ensure that we understood general programming concepts and had a solid foundational knowledge of JavaScript, DOM manipulation, and event-driven programming, providing us with a holistic understanding of the components that make up a website and the ability to develop functional, interactive web applications as front-end developers.",
            btn1Text: "Flags Quiz",
            btn1Link: "https://quizwithflags.netlify.app/",
        },
        {
            icon: placeHolder,
            title: "TypeScript",
            text: "During almost my whole education, we have been using TypeScript when learning both JavaScript and React. From day one of using TypeScript, I felt that it made more sense to me than JavaScript. It gives me a better understanding of the code and makes it easier to read and understand.",
            btn1Text: "Sulten",
            btn1Link: "https://sulten.netlify.app/",
        },
        {
            icon: vue,
            title: "Vue",
            text: "During my internship, I worked with Vue.js. I have experience with Vue Router, Vuex, and Vue CLI.",
            btn1Text: "",
            btn1Link: "",
        }
    ];

    const handleInteraction = (label: string) => {
        console.log(`Interaction with: ${label}`);
    };

    return (
        <section className="section-wrapper skills-wrapper carousel-section" id="section-Skills">
            <h2 className='skills-title'>Skills</h2>
            <Carousel items={items} sendInteraction={handleInteraction} />
        </section >
    )
}

export default SkillsSection;