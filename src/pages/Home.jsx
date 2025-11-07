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
                <li className="home">
                    *SweetCorn*
                </li>
                    <li className="home">
                        *Tomatoes*
                    </li>
                
                <li className="home">
                    *Bell Pepper*
                </li>
                <li className="home">
                    *Hebanero*
                </li>
                <li className="home">
                        *Sweet Patatoes*
                </li>
                <li className="home">
                       *Maize*
                </li>
            </div>

            <div style={{ marginTop: "3rem"}}>
                <button>Explore Our Farms</button>
            </div>
        </section>
    )
}

export default Home