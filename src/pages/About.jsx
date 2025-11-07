import React from "react";
import "../index.css"


const About = () => {
    return (
        <section className="about fade-in">
            <h2>About Green Farm</h2>
            <p>
                Green Farm is dedicated to sustainable agriculture and empowering local
                communities through eco-friendly farming. We believe in a balanced
                ecosystem — nurturing the soil, protecting biodiversity, and producing
                nutritious food naturally.
            </p>

            <p style={{ marginTop: "1rem" }}>
                Our mission is simple: grow healthy produce while preserving the planet
                for future generations. From seed to harvest, every step we take is
                guided by our commitment to nature.
            </p>

            <div className="about">
                Contact Us Through

                <li style={{ marginTop: "2rem"}}>Email: <a href="#mail">Abusadiq006@gmail.com </a></li>
                <li></li>
            </div>

            <div style={{ marginTop: "2rem" }}>
                <button>Learn More</button>
            </div>
        </section>
    )
}

export default About