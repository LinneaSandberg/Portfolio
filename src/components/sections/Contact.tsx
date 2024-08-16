import githubLogo from '../../assets/images/github.png';
import linkedinLogo from '../../assets/images/linkedin.svg';


const ContactSection = () => {

    return (
        <section className="section-wrapper contact-section" id="section-contact">

            <h2>Let´s connect</h2>
            <div className='logos-container'>
                <figure className="github-logo">
                    <img src={githubLogo} alt="GitHub" />
                </figure>
                <figure className="linkedin-logo">
                    <img src={linkedinLogo} alt="LinkedIn" />
                </figure>
            </div>
            <form className="contact-form">
                <div className="input-wrapper">
                    <div className="inputs input-size">
                        <input type="text" id="Firstname" name="Firstname" placeholder="FIRST NAME *" className="input-field" required />
                    </div>
                    <div className="inputs input-size">
                        <input type="text" id="Lastname" name="Lastname" placeholder="LAST NAME *" className="input-field" required />
                    </div>
                </div>

                <div className="input-wrapper">
                    <div className="inputs input-size">
                        <input type="text" id="Email" name="Email" placeholder="EMAIL *" className="input-field" required />
                    </div>

                    <div className="inputs input-size">
                        <input type="text" id="Phone" name="Phone" placeholder="PHONE" className="input-field" required />
                    </div>
                </div>

                <div className="input-wrapper inputs">
                    <input type="text" id="Subject" name="Subject" placeholder="SUBJECT *" className="input-field" required />
                </div>

                <div className="input-wrapper inputs">
                    <textarea id="Message" name="Message" placeholder="MESSAGE *" className="input-field message" required></textarea>
                </div>

                <div className="input-wrapper">
                    <button type="submit" className="submit-button">SEND</button>
                </div>

            </form>
        </section>
    )
}

export default ContactSection;