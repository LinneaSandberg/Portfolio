import profile from "../assets/images/profile-pic.jpeg";
const SectionIds = ["section-About", "section-Projects", "section-Contact"];
// , "section-Skills"

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
                    const color = ["pink", "purple", "yellow"][index];
                    //"red"
                    return (
                        <li key={sectionId}>
                            <span className="text" title={sectionName}>{sectionName}</span>
                            <a href={`#${sectionId}`} data-title={sectionName} className={color}></a>
                        </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default Navigation;