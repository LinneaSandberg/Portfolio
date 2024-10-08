import React, { useState } from 'react';
import Card from './CardCaru';

interface items {
    icon: string,
    title: string,
    btn1Text?: string,
    btn1Link?: string,
}

interface CarouselProps {
    items: items[],
    sendInteraction: (label: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({ items, sendInteraction }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const handlePrevClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const carouselStyle = {
        transform: `translateX(-${currentIndex * 100}%)`,
    };

    return (
        <div className="carousel-wrapper">
            <div className="buttons-wrapper">
                <button onClick={handlePrevClick} className="carousel-button carousel-prev">
                    <span>&lsaquo;</span>
                </button>
                <button onClick={handleNextClick} className="carousel-button carousel-next">
                    <span>&#8250;</span>
                </button>
            </div>
            <ul className="carousel" style={carouselStyle}>
                {items.map((item, index) => (
                    <Card
                        key={index}
                        icon={item.icon}
                        title={item.title}
                        btn1Text={item.btn1Text ? item.btn1Text : ''}
                        btn1Link={item.btn1Link ? item.btn1Link : ''}
                        sendInteraction={sendInteraction}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Carousel;