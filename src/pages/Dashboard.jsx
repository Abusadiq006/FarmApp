import React from "react";
import "../index.css"


const Dashboard = () => {
 const crops = [
    { name: "Sweet Corn", img: "/images/sweetcorn.jpg" },
    { name: "Tomatoes", img: "/images/tomatoes.jpg" },
    { name: "Bell Pepper", img: "/images/bellpepper.jpg" },
    { name: "Habanero Pepper", img: "/images/habanero.jpg" },
    { name: "Sweet Potatoes", img: "/images/sweetpotatoes.jpg" },
    { name: "Cucumber", img: "/images/cucumber.jpg" },
    { name: "Cassava", img: "/images/cassava.jpg" },
    { name: "Rice", img: "/images/rice.jpg" },
    { name: "Millet", img: "/images/millet.jpg" },
    { name: "Carrot", img: "/images/carrot.jpg" },
  ];
    ]
    return (
        <section className="dashboard fade-in">
            <h2>Welcome to Your Green Farm Dashboard </h2>
            <p>Monitor your farm’s growth, manage produce, and explore new insights.</p>

            <div className="dashboard-content">
                <div className="dashboard-card">
                    <h3> Farm Overview</h3>
                    <p>View crop performance, health and sustainability metrics</p>
                </div>

                <div className="dashboard-card">
                    <h3> Equipment </h3>
                    <p>Track water usage, irrigation timing and efficiency levels.</p>
                </div>

                <div className="dashboard-card">
                    <h3> Reports</h3>
                    <p>Access performance insights, yield history and monthly data.</p>
                </div>
            </div>
        </section>
    )
}

export default Dashboard