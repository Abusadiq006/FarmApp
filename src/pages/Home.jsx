import React from "react"
import "../index.css"


const Home = () => {
    return (
        <section className="home fade-in">
            <h1>Welcome to Green Farm</h1>
            <p>
                At Green Farm, we believe in growing fresh, sustainable, and organic
        produce that nourishes both people and the planet. Our commitment is to
        eco-friendly farming practices that ensure a greener tomorrow.
            </p>

            <div className="home fade-in">
                <h1 className="home-title">Our Fresh Produce</h1>
                <ul className="produce-list">
                    <li> *SweetCorn* </li>
                    <li> *Tomatoes* </li>
                    <li> *Bell Pepper* </li>
                    <li> *Hebanero* </li>
                    <li> *Sweet Patatoes* </li>
                    <li> *Maize* </li>
                </ul>
            </div>

            <div style={{ marginTop: "3rem"}}>
                <button>Explore Our Farms</button>
            </div>
        </section>
    )
}

export default Home