import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const navigate = useNavigate()

  const handleBackHome = () => navigate("/")

  const farmData = {
    crops: [
      { name: "Rice", img: "/crops/ricecrop.jpeg", desc: "Golden rice grown in sustainable paddies.", lesson: "Rice thrives in flooded fields. Maintain shallow water until flowering, apply NPK fertilizer, and harvest once grains turn golden. Avoid prolonged drought or deep flooding." },
      { name: "Tomatoes", img: "/crops/Tomatoes.jpg", desc: "Organic red tomatoes rich in flavor.", lesson: "Use well-drained soil with pH 6–7. Stake the plants for support, water early in the morning, and apply potassium fertilizer at fruiting." },
      { name: "Sweet Corn", img: "/crops/sweetcorn.jpeg", desc: "Juicy sweet corn harvested in season.", lesson: "Plant in full sun. Water consistently and fertilize with nitrogen during growth. Harvest when kernels are milky and full." },
      { name: "Sweet Potatoes", img: "/crops/sweetpotatoes.jpg", desc: "Fresh Irish potatoes from our highlands.", lesson: "Grow in loose, sandy soil. Avoid waterlogging and weed frequently. Harvest after 3–4 months when leaves begin to yellow." },
      { name: "Cucumber", img: "/crops/cucumber.jpg", desc: "Crisp cucumbers for salads and pickles.", lesson: "Grow on raised beds. Train vines on trellis, water regularly, and apply compost every two weeks. Harvest when fruits are firm." },
      { name: "Carrots", img: "/crops/carrot.jpg", desc: "Bright orange carrots full of vitamins.", lesson: "Prefer sandy soil. Avoid stony ground to prevent deformed roots. Harvest after 70–80 days when tops start to yellow." },
      { name: "Bell Pepper", img: "/crops/bellpepper.jpg", desc: "Hot and mild peppers for every recipe.", lesson: "Needs warm temperature and full sunlight. Fertilize at flowering and harvest once color fully develops." },
      { name: "Millet", img: "/crops/milletcrop.webp", desc: "Protein-packed grains for nutrition.", lesson: "Grows in semi-arid zones. Minimal watering required. Harvest when grains harden and dry well before storage." },
      { name: "Cassava", img: "/crops/cassava.jpg", desc: "Starch-rich root crop.", lesson: "Plant stem cuttings 1m apart. Weed every 4 weeks. Harvest after 10–12 months when leaves start yellowing." },
      { name: "Habanero", img: "/crops/habanero.jpg", desc: "Spicy pepper variety for flavoring.", lesson: "Requires consistent watering and sunlight. Remove excess leaves to promote fruiting. Harvest when pods turn red or orange." },
    ],

    flowers: [
      { name: "Rose", img: "/flowers/rose.jpeg", desc: "Classic red roses for romance and beauty.", lesson: "Plant roses in loamy soil. Water deeply twice weekly and prune dead stems to encourage new blooms." },
      { name: "Sunflower", img: "/flowers/sunflower.jpeg", desc: "Tall bright sunflowers symbolizing warmth.", lesson: "Full sun is essential. Water at the base, not overhead, and harvest seeds once the head dries out." },
      { name: "Lily", img: "/flowers/lily.jpeg", desc: "Graceful lilies for elegant gardens.", lesson: "Plant bulbs in spring. Keep soil moist, and protect from frost. Remove wilted flowers promptly." },
      { name: "Daisy", img: "/flowers/daisy.webp", desc: "Pure white daisies that brighten the farm.", lesson: "Grows in full sun and rich soil. Deadhead spent blooms for continuous flowering." },
      { name: "Tulip", img: "/flowers/tulip.jpeg", desc: "Colorful tulips grown in natural beds.", lesson: "Plant bulbs before winter frost. Avoid excess watering and allow leaves to die naturally after flowering." },
      { name: "Orchid", img: "/flowers/orchid.webp", desc: "Exotic orchids with delicate petals.", lesson: "Keep humidity high, water sparingly, and use orchid bark mix. Avoid direct sunlight." },
      { name: "Hibiscus", img: "/flowers/hibiscus.webp", desc: "Vibrant hibiscus flowers loved by bees.", lesson: "Needs warm climate and full sunlight. Prune regularly to maintain shape and improve blooming." },
      { name: "Lavender", img: "/flowers/lavender.avif", desc: "Fragrant lavender fields in bloom.", lesson: "Prefers well-drained sandy soil. Minimal watering required. Harvest just before full bloom for fragrance." },
      { name: "Marigold", img: "/flowers/marigold.jpg", desc: "Golden marigolds for ornamental use.", lesson: "Easy to grow in sunny locations. Remove dead flowers to extend blooming period." },
      { name: "Jasmine", img: "/flowers/Jasmine.webp", desc: "Sweet-smelling jasmine vines.", lesson: "Thrives in warm climates. Train vines and water regularly. Prune after flowering to encourage growth." },
    ],

    chickens: [
      { name: "Broiler", img: "/chickens/broilers.jpg", desc: "Fast-growing chickens for meat.", lesson: "Provide protein-rich feed and maintain temperature at 32°C initially, reducing weekly. Vaccinate regularly." },
      { name: "Layer", img: "/chickens/layers.webp", desc: "Egg-laying hens producing daily eggs.", lesson: "Feed calcium-rich diet for strong eggshells. Maintain lighting for 16 hours daily for consistent laying." },
      { name: "Cockerel", img: "/chickens/cockerel.webp", desc: "Strong cockerels for breeding.", lesson: "Separate males to avoid fights. Provide adequate space and balanced feed." },
      { name: "Local Chicken", img: "/chickens/local.webp", desc: "Native breeds with rich taste.", lesson: "Allow free-range grazing. Supplement with grains and ensure clean water supply." },
    ],

    fishes: [
      { name: "Catfish", img: "/fishes/catfish.avif", desc: "African catfish raised in ponds.", lesson: "Maintain pond oxygen level and feed twice daily. Harvest after 5–6 months when fish reach 1kg." },
      { name: "Tilapia", img: "/fishes/tilapia.jpg", desc: "Mild-flavored tilapia for aquaculture.", lesson: "Stock with 5 fish/m². Use organic feed and maintain water pH around 7. Harvest after 6 months." },
      { name: "Goldfish", img: "/fishes/goldfish.jpg", desc: "Decorative goldfish for ponds.", lesson: "Use clean, filtered water. Feed small portions twice daily and maintain consistent temperature." },
      { name: "Carp", img: "/fishes/Carp.jpg", desc: "Common carp for farming and consumption.", lesson: "Feed pellet diet and change pond water regularly. Ideal for large-scale aquaculture." },
    ],

    cows: [
      { name: "Holstein", img: "/cows/holstein.jpeg", desc: "High milk-yield dairy cow breed.", lesson: "Feed with green fodder and silage. Maintain hygiene during milking. Vaccinate yearly." },
      { name: "Brahman", img: "/cows/brahman.jpg", desc: "Strong and heat-tolerant breed.", lesson: "Best suited for tropical climates. Provide shade and mineral supplements." },
      { name: "Hereford", img: "/cows/hereford.jpg", desc: "Beef cattle known for quality meat.", lesson: "Feed balanced protein diet and maintain clean housing. Ideal for meat production." },
      { name: "Jersey", img: "/cows/jersey.jpg", desc: "Small, efficient dairy cows.", lesson: "Feed quality hay and grains. Jersey milk is high in butterfat—good for cheese making." },
    ],

    sheep: [
      { name: "Dorper", img: "/sheep/dorper.jpg", desc: "Hardy meat sheep with thick wool.", lesson: "Adaptable to dry regions. Feed pasture grass and supplement with mineral blocks." },
      { name: "Merino", img: "/sheep/merino.jpeg", desc: "Soft wool breed for textiles.", lesson: "Shear twice yearly. Provide shelter from rain to preserve wool quality." },
      { name: "Suffolk", img: "/sheep/Suffolk.webp", desc: "Heavyweight sheep ideal for mutton.", lesson: "Ensure protein-rich diet and clean bedding. Ideal for fast meat production." },
      { name: "West African Dwarf", img: "/sheep/wad.jpg", desc: "Resilient local breed in Africa.", lesson: "Well-suited for humid regions. Requires minimal feed input and resistant to parasites." },
    ],

    horses: [
      { name: "Arabian", img: "/horses/arabian.jpg", desc: "Elegant and fast horses.", lesson: "Feed oats and alfalfa. Exercise daily and groom regularly for a shiny coat." },
      { name: "Thoroughbred", img: "/horses/Thoroughbred.jpg", desc: "Strong and agile racing breed.", lesson: "Provide regular exercise and protein feed. Avoid overtraining." },
      { name: "Friesian", img: "/horses/friesian.webp", desc: "Majestic black horses for shows.", lesson: "Maintain long mane with daily brushing. Ideal for cooler climates." },
      { name: "Appaloosa", img: "/horses/Appaloosa.jpg", desc: "Spotted horses known for endurance.", lesson: "Balanced diet and open field exercise help maintain stamina." },
    ],

    farmhouses: [
      { name: "Cottage Farm", img: "/farmhouses/cottage.webp", desc: "A cozy cottage-style farmhouse.", lesson: "Ideal for small-scale farming. Incorporate natural ventilation and garden spaces." },
      { name: "Eco Green Farm", img: "/farmhouses/ecofarm.webp", desc: "Sustainable farmhouse with solar panels.", lesson: "Use renewable energy, recycle farm waste, and collect rainwater for irrigation." },
      { name: "Modern Barn", img: "/farmhouses/modernbarn.jpg", desc: "High-tech barn with smart controls.", lesson: "Automate lighting, temperature, and feeding systems to enhance productivity." },
      { name: "Ranch Estate", img: "/farmhouses/ranchfarmhouse.jpg", desc: "Large-scale ranch-style farmhouse.", lesson: "Design includes grazing land, stables, and feed storage units." },
      { name: "Organic Valley", img: "/farmhouses/organicvalley.webp", desc: "Fully organic family-run farm.", lesson: "Focus on composting, pesticide-free farming, and biodiversity conservation." },
      { name: "GreenHouse", img: "/farmhouses/greenhouse.webp", desc: "Climate-controlled farming house.", lesson: "Maintain temperature and humidity levels to optimize plant growth year-round." },
    ],
  };

  return (
    <div className="dashboard fade-in p-6 relative">
        {/* Back To Home Button */}
        <button
            onClick={handleBackHome}
            className="fixed top-6 right-6 bg-green-700 text-white 
            font-semibold px-5 py-2 rounded-lg shadow-md hover:bg-green-800 
            transition-all duration-300 z-50">
                ← Back to Home
            </button>
      {Object.entries(farmData).map(([category, items]) => (
        <section key={category} className="farm-section mb-10">
          <h2 className="section-title text-3xl font-bold mb-4 text-green-700">{category.toUpperCase()}</h2>
          <div className="card-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <div
                key={index}
                className="farm-card bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-2xl"
                onClick={() => setSelectedItem(item)}
              >
                <img src={item.img} alt={item.name} className="h-48 w-full object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-green-800">{item.name}</h3>
                  <p className="text-gray-600 text-sm mt-2">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Lesson Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-white rounded-xl max-w-lg w-full p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-2xl"
              onClick={() => setSelectedItem(null)}
            >
              &times;
            </button>
            <img src={selectedItem.img} alt={selectedItem.name} className="w-full h-56 object-cover rounded-lg mb-4" />
            <h3 className="text-2xl font-bold text-green-700 mb-2">{selectedItem.name}</h3>
            <p className="text-gray-700 mb-3">{selectedItem.desc}</p>
            <p className="text-gray-600 text-sm leading-relaxed">{selectedItem.lesson}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
