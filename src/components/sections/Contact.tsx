import { SubmitHandler, useForm } from 'react-hook-form';
import githubLogo from '../../assets/images/github.png';
import linkedinLogo from '../../assets/images/linkedin.svg';
import emailjs from '@emailjs/browser';
import { Inputs } from '../../types/Input.types';
import React, { useEffect, useState } from 'react';

interface InputsFormProps {
    initialValues?: Inputs;
}

const ContactSection: React.FC<InputsFormProps> = ({ initialValues }) => {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitSuccessful }
    } = useForm<Inputs>()

    const onFormSubmit: SubmitHandler<Inputs> = async ({ Firstname, Lastname, Email, Phone, Subject, Message
    }) => {
        console.log(Firstname, Lastname, Email, Phone, Subject, Message);
        setIsLoading(true);

        try {
            const res = await emailjs.send(
                'service_496n279',
                'template_m52m9vv',
                {
                    Firstname,
                    Lastname,
                    Email,
                    Phone,
                    Subject,
                    Message
                },
                'TTN7_QfFz0BsS0pNf'
            );
            console.log('Email sent', res);
        } catch (error) {
            console.error('Failed to send email:', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        reset(initialValues);
    }, [initialValues, isSubmitSuccessful, reset]);

    return (
        <section className="section-wrapper contact-section" id="section-contact">
            <h2 className='contact-title'>Let´s connect</h2>
            <form className="contact-form" onSubmit={handleSubmit(onFormSubmit)}>
                <div className="input-wrapper">
                    <div className="inputs input-size">
                        <input
                            type="text"
                            id="Firstname"
                            placeholder="FIRSTNAME *"
                            className="input-field"
                            {...register("Firstname", { required: true })}
                        />
                    </div>
                    <div className="inputs input-size">
                        <input
                            type="text"
                            id="Lastname"
                            placeholder="LASTNAME *"
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
                    <button
                        type="submit"
                        className="submit-button"
                        disabled={isLoading}
                    >
                        {isLoading ? 'Sending...' : 'Send'}
                    </button>
                </div>

            </form>

            <div className='logos-container'>
                <a href='https://github.com/LinneaSandberg' className="github-logo">
                    <img src={githubLogo} alt="GitHub" />
                </a>
                <a href='https://www.linkedin.com/in/llinnea-sandberg/' className="linkedin-logo">
                    <img src={linkedinLogo} alt="LinkedIn" />
                </a>
            </div>
        </section>
    )
}

export default ContactSection;