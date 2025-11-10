import React from "react";
import "../index.css"; // optional if you want extra style control later

const Dashboard = () => {
  const farmData = {
    crops: [
      { name: "Rice", img: "/crops/ricecrop.jpeg", desc: "Golden rice grown in sustainable paddies." },
      { name: "Tomatoes", img: "/crops/Tomatoes.jpg", desc: "Organic red tomatoes rich in flavor." },
      { name: "Sweet Corn", img: "/crops/sweetcorn.jpeg", desc: "Juicy sweet corn harvested in season." },
      { name: "Sweet Potatoes", img: "/crops/sweetpotatoes.jpg", desc: "Fresh Irish potatoes from our highlands." },
      { name: "Cucumber", img: "/crops/cucumber.jpg", desc: "Crisp cucumbers for salads and pickles." },
      { name: "Carrots", img: "/crops/carrot.jpg", desc: "Bright orange carrots full of vitamins." },
      { name: "Bell Pepper", img: "/crops/bellpepper.jpg", desc: "Hot and mild peppers for every recipe." },
      { name: "millet", img: "/crops/milletcrop.webp", desc: "Protein-packed green beans for nutrition." },
      { name: "Cassava", img: "/crops/cassava.jpg", desc: "Freshly harvested onions with rich aroma." },
      { name: "Habanero", img: "/crops/habanero.jpg",}
    ],
    flowers: [
      { name: "Rose", img: "/flowers/rose.jpeg", desc: "Classic red roses for romance and beauty." },
      { name: "Sunflower", img: "/flowers/sunflower.jpeg", desc: "Tall bright sunflowers symbolizing warmth." },
      { name: "Lily", img: "/flowers/lily.jpeg", desc: "Graceful lilies for elegant gardens." },
      { name: "Daisy", img: "/flowers/daisy.webp", desc: "Pure white daisies that brighten the farm." },
      { name: "Tulip", img: "/flowers/tulip.jpeg", desc: "Colorful tulips grown in natural beds." },
      { name: "Orchid", img: "/flowers/orchid.webp", desc: "Exotic orchids with delicate petals." },
      { name: "Hibiscus", img: "/flowers/hibiscus.webp", desc: "Vibrant hibiscus flowers loved by bees." },
      { name: "Lavender", img: "/flowers/lavender.avif", desc: "Fragrant lavender fields in bloom." },
      { name: "Marigold", img: "/flowers/marigold.jpg", desc: "Golden marigolds for ornamental use." },
      { name: "Jasmine", img: "/flowers/Jasmine.webp", desc: "Sweet-smelling jasmine vines." },
    ],
    chickens: [
      { name: "Broiler", img: "/chickens/broilers.jpg", desc: "Fast-growing chickens for meat." },
      { name: "Layer", img: "/chickens/layers.webp", desc: "Egg-laying hens producing daily eggs." },
      { name: "Cockerel", img: "/chickens/cockerel.webp", desc: "Strong cockerels for breeding." },
      { name: "Local Chicken", img: "/chickens/local.webp", desc: "Native breeds with rich taste." },
    ],
    fishes: [
      { name: "Catfish", img: "/fishes/catfish.avif", desc: "African catfish raised in ponds." },
      { name: "Tilapia", img: "/fishes/tilapia.jpg", desc: "Mild-flavored tilapia for aquaculture." },
      { name: "Goldfish", img: "/fishes/goldfish.jpg", desc: "Decorative goldfish for ponds." },
      { name: "Carp", img: "/fishes/Carp.jpg", desc: "Common carp for farming and consumption." },
    ],
    cows: [
      { name: "Holstein", img: "/cows/holstein.jpeg", desc: "High milk-yield dairy cow breed." },
      { name: "Brahman", img: "/cows/brahman.jpg", desc: "Strong and heat-tolerant breed." },
      { name: "Hereford", img: "/cows/hereford.jpg", desc: "Beef cattle known for quality meat." },
      { name: "Jersey", img: "/cows/jersey.jpg", desc: "Small, efficient dairy cows." },
    ],
    sheep: [
      { name: "Dorper", img: "/sheep/dorper.jpg", desc: "Hardy meat sheep with thick wool." },
      { name: "Merino", img: "/sheep/merino.jpeg", desc: "Soft wool breed for textiles." },
      { name: "Suffolk", img: "/sheep/Suffolk.webp", desc: "Heavyweight sheep ideal for mutton." },
      { name: "West African Dwarf", img: "/sheep/wad.jpg", desc: "Resilient local breed in Africa." },
    ],
    horses: [
      { name: "Arabian", img: "/horses/arabian.jpg", desc: "Elegant and fast horses." },
      { name: "Thoroughbred", img: "/horses/Thoroughbred.jpg", desc: "Strong and agile racing breed." },
      { name: "Friesian", img: "/horses/friesian.webp", desc: "Majestic black horses for shows." },
      { name: "Appaloosa", img: "/horses/Appaloosa.jpg", desc: "Spotted horses known for endurance." },
    ],
    farmhouses: [
      { name: "Cottage Farm", img: "/farmhouses/cottage.webp", desc: "A cozy cottage-style farmhouse." },
      { name: "Eco Green Farm", img: "/farmhouses/ecofarm.webp", desc: "Sustainable farmhouse with solar panels." },
      { name: "Modern Barn", img: "/farmhouses/modernbarn.jpg", desc: "High-tech barn with smart controls." },
      { name: "Ranch Estate", img: "/farmhouses/ranchfarmhouse.jpg", desc: "Large-scale ranch-style farmhouse." },
      { name: "Organic Valley", img: "/farmhouses/organicvalley.webp", desc: "Fully organic family-run farm." },
      { name: "GreenHouse", img: "/farmhouses/greenhouse.webp", desc: "Fully organic family-run farm." },
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
