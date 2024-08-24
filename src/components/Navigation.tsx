

const Navigation = () => {
    return (
        <div className="menu">
            <ul>
                <li><span title="About"></span>
                    <a href="#section-about" data-title="About" className="pink"></a>
                </li>
                <li><span title="Skills"></span>
                    <a href="#section-contact" data-title="Skills" className="yellow"></a>
                </li>
                <li><span title="Projects"></span>
                    <a href="#section-skills" data-title="Projects" className="purple"></a>
                </li>
                <li><span title="Contact"></span>
                    <a href="#section-projects" data-title="Contact" className="red"></a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;