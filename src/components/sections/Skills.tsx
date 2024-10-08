import reactLogo from '../../assets/images/react.svg';
import React from 'react';
import Carousel from '../Carousel';
import vue from "../../assets/images/vue.svg"
import tsLogo from '../../assets/images/typescript.svg';
import jsLogo from '../../assets/images/js.svg';

const SkillsSection: React.FC = () => {
    const items = [
        {
            icon: reactLogo,
            title: "React",
            btn1Text: "The Movie DB",
            btn1Link: "https://thebestmoviepage.netlify.app/ ",
        },
        {
            icon: jsLogo,
            title: "JavaScript",
            btn1Text: "Flags Quiz",
            btn1Link: "https://quizwithflags.netlify.app/",
        },
        {
            icon: tsLogo,
            title: "TypeScript",
            btn1Text: "Sulten",
            btn1Link: "https://sulten.netlify.app/",
        },
        {
            icon: vue,
            title: "Vue",
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