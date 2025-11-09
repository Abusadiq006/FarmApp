import React from "react";
import "../index.css"; // optional if you want extra style control later

const Dashboard = () => {
  const farmData = {
    crops: [
      { name: "Rice", img: "/images/ricecrop.jpeg", desc: "Golden rice grown in sustainable paddies." },
      { name: "Tomatoes", img: "/images/Tomatoes.jpg", desc: "Organic red tomatoes rich in flavor." },
      { name: "Sweet Corn", img: "/images/sweetcorn.jpeg", desc: "Juicy sweet corn harvested in season." },
      { name: "Sweet Potatoes", img: "/images/sweetpotatoes.jpg", desc: "Fresh Irish potatoes from our highlands." },
      { name: "Cucumber", img: "/images/cucumber.jpg", desc: "Crisp cucumbers for salads and pickles." },
      { name: "Carrots", img: "/images/carrot.jpg", desc: "Bright orange carrots full of vitamins." },
      { name: "Bell Pepper", img: "/images/bellpepper.jpg", desc: "Hot and mild peppers for every recipe." },
      { name: "millet", img: "/images/milletcrop.webp", desc: "Protein-packed green beans for nutrition." },
      { name: "Cassava", img: "/images/cassava.jpg", desc: "Freshly harvested onions with rich aroma." },
      { name: "Habanero", img: "/images/habanero.jpg",}
    ],
    flowers: [
      { name: "Rose", img: "/images/rose.jpg", desc: "Classic red roses for romance and beauty." },
      { name: "Sunflower", img: "/images/sunflower.jpg", desc: "Tall bright sunflowers symbolizing warmth." },
      { name: "Lily", img: "/images/lily.jpg", desc: "Graceful lilies for elegant gardens." },
      { name: "Daisy", img: "/images/daisy.jpg", desc: "Pure white daisies that brighten the farm." },
      { name: "Tulip", img: "/images/tulip.jpg", desc: "Colorful tulips grown in natural beds." },
      { name: "Orchid", img: "/images/orchid.jpg", desc: "Exotic orchids with delicate petals." },
      { name: "Hibiscus", img: "/images/hibiscus.jpg", desc: "Vibrant hibiscus flowers loved by bees." },
      { name: "Lavender", img: "/images/lavender.jpg", desc: "Fragrant lavender fields in bloom." },
      { name: "Marigold", img: "/images/marigold.jpg", desc: "Golden marigolds for ornamental use." },
      { name: "Jasmine", img: "/images/jasmine.jpg", desc: "Sweet-smelling jasmine vines." },
    ],
    chickens: [
      { name: "Broiler", img: "/images/broiler.jpg", desc: "Fast-growing chickens for meat." },
      { name: "Layer", img: "/images/layer.jpg", desc: "Egg-laying hens producing daily eggs." },
      { name: "Cockerel", img: "/images/cockerel.jpg", desc: "Strong cockerels for breeding." },
      { name: "Local Chicken", img: "/images/localchicken.jpg", desc: "Native breeds with rich taste." },
    ],
    fishes: [
      { name: "Catfish", img: "/images/catfish.jpg", desc: "African catfish raised in ponds." },
      { name: "Tilapia", img: "/images/tilapia.jpg", desc: "Mild-flavored tilapia for aquaculture." },
      { name: "Goldfish", img: "/images/goldfish.jpg", desc: "Decorative goldfish for ponds." },
      { name: "Carp", img: "/images/carp.jpg", desc: "Common carp for farming and consumption." },
    ],
    cows: [
      { name: "Holstein", img: "/images/holstein.jpg", desc: "High milk-yield dairy cow breed." },
      { name: "Brahman", img: "/images/brahman.jpg", desc: "Strong and heat-tolerant breed." },
      { name: "Hereford", img: "/images/hereford.jpg", desc: "Beef cattle known for quality meat." },
      { name: "Jersey", img: "/images/jersey.jpg", desc: "Small, efficient dairy cows." },
    ],
    sheep: [
      { name: "Dorper", img: "/images/dorper.jpg", desc: "Hardy meat sheep with thick wool." },
      { name: "Merino", img: "/images/merino.jpg", desc: "Soft wool breed for textiles." },
      { name: "Suffolk", img: "/images/suffolk.jpg", desc: "Heavyweight sheep ideal for mutton." },
      { name: "West African Dwarf", img: "/images/wad.jpg", desc: "Resilient local breed in Africa." },
    ],
    horses: [
      { name: "Arabian", img: "/images/arabian.jpg", desc: "Elegant and fast horses." },
      { name: "Thoroughbred", img: "/images/thoroughbred.jpg", desc: "Strong and agile racing breed." },
      { name: "Friesian", img: "/images/friesian.jpg", desc: "Majestic black horses for shows." },
      { name: "Appaloosa", img: "/images/appaloosa.jpg", desc: "Spotted horses known for endurance." },
    ],
    farmhouses: [
      { name: "Cottage Farm", img: "/images/cottagefarm.jpg", desc: "A cozy cottage-style farmhouse." },
      { name: "Eco Green Farm", img: "/images/ecofarm.jpg", desc: "Sustainable farmhouse with solar panels." },
      { name: "Modern Barn", img: "/images/modernbarn.jpg", desc: "High-tech barn with smart controls." },
      { name: "Ranch Estate", img: "/images/ranchestate.jpg", desc: "Large-scale ranch-style farmhouse." },
      { name: "Organic Valley", img: "/images/organicvalley.jpg", desc: "Fully organic family-run farm." },
    ],
  };

  return (
    <div className="dashboard fade-in">
      {Object.entries(farmData).map(([category, items]) => (
        <section key={category} className="farm-section">
          <h2 className="section-title">{category.toUpperCase()}</h2>
          <div className="card-grid">
            {items.map((item, index) => (
              <div key={index} className="farm-card">
                <img src={item.img} alt={item.name} />
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Dashboard;
