

const Navigation = () => {
    return (
        <div className="menu">
            <ul>
                <li>
                    <a href="#section-about" data-title="About" className="pink"></a>
                </li>
                <li>
                    <a href="#section-contact" data-title="Skills" className="yellow"></a>
                </li>
                <li>
                    <a href="#section-skills" data-title="Projects" className="purple"></a>
                </li>
                <li>
                    <a href="#section-projects" data-title="Contact" className="red"></a>
                </li>
            </ul>
        </div>
    )
}

export default Navigation;