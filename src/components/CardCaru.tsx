import { useState } from "react";

interface CardProps {
    text: string,
    title: string,
    icon: string,
    btn1Text: string,
    btn1Link: string,
    sendInteraction?: (label: string) => void;
}

const Card: React.FC<CardProps> = ({ text, icon, btn1Text, btn1Link, sendInteraction }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleTextExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    const openUrl = (url: string, label: string) => {
        window.open(url, '_blank');
        if (sendInteraction && label) {
            sendInteraction(label);
        }
    }

    const displayedText = isExpanded ? text : (text.length > 40 ? text.substring(0, 40) + '...' : text);

    return (
        <li className="carousel-card">
            <img src={icon} className='carousel-icon projects-img' alt="Icon" />
            <div onClick={toggleTextExpansion} className="carousel-card-text">
                <p className="carousel-card-text-p">{displayedText}</p>
            </div>
            <a className="carousel-card-outline" href='#'
                onClick={() => openUrl(btn1Link, btn1Text)}>
                <span>&#8250; {btn1Text}</span>
            </a>
        </li>
    )
}

export default Card;
