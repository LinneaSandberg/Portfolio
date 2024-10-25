import ImageList from "../ImageList";

const AboutSection = () => {
    return (
        <section className="section-wrapper about-section" id="section-About">
            <div className="about-wrapper">
                <div className="about-text-wrapper">
                    <h2 className="about-title">About me</h2>
                    <p>Hello! My name is Linnea Sandberg, and I am a junior Frontend Developer.
                    </p>
                    <p>For the past year, I have been studying at Medieinstitutet in Malmö to become a Frontend Developer.From the very first week of the program, I knew that this was the right field for me.
                    </p>
                    <p>Since then, I have not hesitated for a moment.What drives me is the constant opportunity to explore new areas and the continuous evolution of the field.I find motivation and satisfaction in knowing that there is always something new to learn.
                    </p>
                    <p>That’s why I’m happy to be a junior, as it simply means that I have so much more exciting stuff left to explore!</p>
                </div>
                <div className="imageslist">
                    <ImageList />
                </div>
            </div>
        </section>
    )
}

export default AboutSection;