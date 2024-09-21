import profile from "../assets/images/profile-pic.jpeg";
export const SectionIds = ["section-About", "section-Skills", "section-Projects", "section-Contact"];

const Navigation = () => {

    return (
        <div className="menu">
            <ul>
                <li>
                    <a href="#Home" className="logo-pic">
                        <span className="text" title="Home">Home</span>
                        <img src={profile} alt="Profile picture" />
                    </a>
                </li>
                {SectionIds.map((sectionId, index) => {
                    const sectionName = sectionId.split("-")[1];
                    const color = ["pink", "purple", "red", "yellow"][index];
                    return (
                        <li key={sectionId}>
                            <span className="text" title={sectionName}>{sectionName}</span>
                            <a href={`#${sectionId}`} data-title={sectionName} className={color}></a>
                        </li>
                    )

                })
                }
            </ul>
            {/* <li>
                    <span className="text" title="About">About</span>
                    <a href="#section-about" data-title="About" className="pink"></a>
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
                </li> */}
        </div>
    )
}

export default Navigation;