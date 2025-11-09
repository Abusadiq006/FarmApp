import React from "react"
import "../index.css"
import bellpepper from "../assets/bellpepper.jpg"
import cucumber from "../assets/cucumber.jpg"
import habanero from "../assets/habanero.jpg"
import sweetcorn from "../assets/sweetcorn.jpeg"
import sweetpotatoes from "../assets/sweetpotatoes.jpg"
import tomatoes from "../assets/tomatoes.jpg"


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
                    <li> 
                        <img src={sweetcorn} alt="Sweet Corn" />
                        <span> *SweetCorn* </span> 
                    </li>
                    <li>
                        <img src={tomatoes} alt="Tomatoes" />
                        <span> *Tomatoes* </span>  
                    </li>
                    <li>
                        <img src={bellpepper} alt="Bell Pepper" />
                        <span> *Bell Pepper* </span> 
                    </li>
                    <li> 
                        <img src={habanero} alt="habanero" />
                        <span> *Habanero* </span> 
                    </li>
                    <li> 
                        <img src={sweetpotatoes} alt="Sweet Potatoes" />
                        <span> *Sweet Patatoes* </span> 
                    </li>
                    <li> 
                        <img src={cucumber} alt="cucumber" />
                        <span> *Cucumber* </span> 
                    </li>
                </ul>
            </div>

            <div style={{ marginTop: "3rem"}}>
                <button>Explore Our Farms</button>
            </div>
        </section>
    )
}

export default Home