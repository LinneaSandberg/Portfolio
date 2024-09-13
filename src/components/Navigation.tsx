

const Navigation = () => {





    return (
        <div className="menu">
            <ul>
                <li>
                    <span className="text" title="About">About</span>
                    <a href="#section-about" data-title="About" className="pink"></a>
                </li>
                <li>
                    <span className="text" title="Contact">Contact</span>
                    <a href="#section-contact" data-title="Contact" className="yellow"></a>
                </li>
                <li>
                    <span className="text" title="Skills">Skills</span>
                    <a href="#section-skills" data-title="Skills" className="purple"></a>
                </li>
                <li>
                    <span className="text" title="Projects">Projects</span>
                    <a href="#section-projects" data-title="Projects" className="red"></a>
                </li>
                <li>
                    <span className="text" title="Contact">Contact</span>
                    <a href="#section-contact" data-title="Contact" className="yellow"></a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;