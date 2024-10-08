interface CardProps {
    title: string,
    icon: string,
    btn1Text?: string,
    btn1Link?: string,
    sendInteraction?: (label: string) => void;
}

const Card: React.FC<CardProps> = ({ icon, btn1Text, btn1Link, sendInteraction }) => {

    const openUrl = (url: string, label: string) => {
        window.open(url, '_blank');
        if (sendInteraction && label) {
            sendInteraction(label);
        }
    }

    return (
        <li className="carousel-card">
            <img src={icon} className='carousel-icon projects-img' alt="Icon" />

            {btn1Text && btn1Link &&
                <a className="carousel-card-outline" href='#'
                    onClick={() => openUrl(btn1Link, btn1Text)}>
                    <span>&#8250; {btn1Text}</span>
                </a>}
        </li>
    )
}

export default Card;
