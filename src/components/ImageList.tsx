import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import oldie from "../assets/images/oldie-pic.jpg";
import meInNature from "../assets/images/me-in-nature.jpeg";
import beComputer from "../assets/images/by-computer.jpeg";
import almi from "../assets/images/almi-ui.png";

gsap.registerPlugin(ScrollTrigger);

const ImageList = () => {
    const container = useRef<HTMLDivElement>(null);
    const secondContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (container.current) {
            gsap.to(".box", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "bottom center",
                    end: "top center",
                    scrub: 1,
                },
                rotation: 180,
                duration: 1,
            });
        }

        if (secondContainer.current) {
            gsap.to(".sbox", {
                scrollTrigger: {
                    trigger: secondContainer.current,
                    start: "bottom center",
                    end: "top center",
                    scrub: 1,
                },
                rotation: -180,
                duration: 1,
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className="images-wrapper">
            <div ref={container}>
                <div className="box" data-speed="0.8">
                    <img src={meInNature} alt="me in nature" width={300} />
                </div>
                <div className="box">
                    <img src={oldie} alt="me coding" width={300} className="oldie-img" />
                </div>
            </div>
            <div ref={secondContainer}>
                <div className="sbox">
                    <img src={almi} alt="almi" width={300} />
                </div>
                <div className="sbox" data-speed="0.8">
                    <img src={beComputer} alt="greta" width={300} />
                </div>
            </div>
        </div>
    );
};

export default ImageList;