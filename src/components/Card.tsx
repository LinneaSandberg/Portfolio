import React from "react";

interface CardProps {
    icon: string;
    title: string;
    text: string;
    btn1Link: string;
}


const Card: React.FC<CardProps> = ({ icon, title, text, btn1Link }) => {
    return (
        <div className="card">
            <a href={btn1Link}>
                <div className="card-img">
                    <img className="card-images" src={icon} alt={title + "image"} />
                </div>
                <div className="card-title">
                    <h3>
                        {title}
                    </h3>
                </div>
                <div className="card-text">
                    <p>
                        {text}
                    </p>
                </div>
                <div className="card-info">

                </div>
            </a>
        </div>
    )
}

export default Card;