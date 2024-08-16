import oldie from "../assets/images/oldie-pic.jpg";
import meInNature from "../assets/images/me-in-nature.jpeg";
import meCoding from "../assets/images/me-koding.jpeg";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const ImageList = () => {

    gsap.registerPlugin(useGSAP);
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.to(".box", {
            rotation: 360,
            stagger: 0.1,
        });
    }, { scope: container });


    return (
        <div className="images-wrapper">
            <div ref={container}>
                <div className="box" data-speed="0.8">
                    <img src={meInNature} alt="me in nature" width={300} />
                </div>

                <div className="box">
                    <img src={oldie} alt="old guy coding" width={300} />
                </div>

                <div className="box">
                    <img src={meCoding} alt="me coding" width={300} />
                </div>
            </div>
        </div>
    )
}

export default ImageList;