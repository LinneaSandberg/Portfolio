import { SubmitHandler, useForm } from 'react-hook-form';
import githubLogo from '../../assets/images/github.png';
import linkedinLogo from '../../assets/images/linkedin.svg';

interface Inputs {
    Firstname: string;
    Lastname: string;
    Email: string;
    Phone: string;
    Subject: string;
    Message: string;
}

const ContactSection = () => {

    const {
        register,
        handleSubmit,
        // watch,
        // formState: { errors },
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async ({ Firstname, Lastname, Email, Phone, Subject, Message
    }) => {
        console.log(Firstname, Lastname, Email, Phone, Subject, Message);
    }




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
            <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="input-wrapper">
                    <div className="inputs input-size">
                        <input
                            type="text"
                            id="Firstname"
                            placeholder="FIRST NAME *"
                            className="input-field"
                            {...register("Firstname", { required: true })}
                        />
                    </div>
                    <div className="inputs input-size">
                        <input
                            type="text"
                            id="Lastname"
                            placeholder="LAST NAME *"
                            className="input-field"
                            {...register("Lastname", { required: true })}
                        />
                    </div>
                </div>

                <div className="input-wrapper">
                    <div className="inputs input-size">
                        <input
                            type="email"
                            id="email"
                            placeholder="EMAIL *"
                            className="input-field"
                            {...register("Email", { required: true })}
                        />
                    </div>

                    <div className="inputs input-size">
                        <input
                            type="text"
                            id="Phone"
                            placeholder="PHONE"
                            className="input-field"
                            {...register("Phone")}

                        />
                    </div>
                </div>

                <div className="input-wrapper inputs">
                    <input
                        type="text"
                        id="Subject"
                        placeholder="SUBJECT *"
                        className="input-field"
                        {...register("Subject", { required: true })}
                    />
                </div>

                <div className="input-wrapper inputs">
                    <textarea
                        id="Message"
                        placeholder="MESSAGE *"
                        className="input-field message"
                        {...register("Message", { required: true })}
                    ></textarea>
                </div>

                <div className="input-wrapper">
                    <button type="submit" className="submit-button">SEND</button>
                </div>

            </form>
        </section>
    )
}

export default ContactSection;