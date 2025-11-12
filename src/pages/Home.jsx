import React from "react"
import { useNavigate } from "react-router-dom"
import "../index.css"


const Home = () => {
    const navigate = useNavigate()

    const handleExplore = () => {
        navigate("/signup")
    }

    const sections = [
        { title: "Farming", video: "/videos/crops.mp4", desc: "Sustainable crop cultivation for a greener world."},
        { title: "chicken", video: "/videos/chicken.mp4", desc: "Free-range poultry farming with ethical care." },
        { title: "cows", video: "/videos/cows.mp4", desc: "Healthy livestock grazing on open pastures." },
        { title: "farmhouse", video: "/videos/farmhouse.mp4", desc: "Dairy and beef farming driven by sustainability." },
        { title: "fish", video: "/videos/fish.mp4", desc: "Modern aquaculture practices for clean waters." },
        { title: "flowers", video: "/videos/flowers.mp4",  desc: "Vibrant blossoms cultivated with precision." },
        { title: "horse", video: "/videos/horse.mp4", desc: "Graceful horses raised with care and passion." },
        {title: "sheeps", video: "/videos/sheeps.mp4",  desc: "Eco-friendly living spaces in harmony with nature." }
    ]
    
    return (
        <section className="home fade-in">
            <div className="intro-section">
                <div className="intro-content">
                    <h1 className="intro-title">Welcome to Green Valley Farm Estate</h1>
                        <p className="intro-text">
                        At Green Farm, we believe in growing fresh, sustainable, and organic
                        produce that nourishes both people and the planet. Our commitment is to
                        eco-friendly farming practices that ensure a greener tomorrow.
                    </p>
                    <div className="explore-section">
                <button className="explore-btn"
                onClick={handleExplore}>Explore Our Farms</button>
            
            </div>  
                </div>
                
            </div>

            <div className="video-section">
                <div className="video-grid">
                    {sections.map((item, index) => (
                        <div key={index} 
                        className={`video-card diagonal delay-${index}`}>
                            <video 
                            src={item.video}
                            muted 
                            loop
                            preload="none"
                            className="video-element"
                            onMouseEnter={(e) => e.target.play()}
                            onMouseLeave={(e) => e.target.pause()}></video>
                            <div className="overlay"></div>
                            <div className="video-content">
                                <h2>{item.title}</h2>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
                     <div className="explore-section">
                <button className="explore-btn"
                onClick={handleExplore}>Explore Our Farms</button>
            
            </div>  
              
            </section>
    )
}

export default Home