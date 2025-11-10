import React from "react"
import "../index.css"

const About = () => {
  return (
    <div className="about-page fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: "url('/images/farmhero.jpg')" }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <h1 className="relative text-white text-5xl md:text-6xl font-bold z-10 text-center">
          About Our Farm
        </h1>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-6 md:px-16 text-center bg-white">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Our mission is to revolutionize agriculture through modern farming practices,
          technology integration, and community-driven sustainability. We aim to provide
          high-quality produce and livestock while empowering local farmers with tools
          and knowledge to increase productivity and maintain ecological balance.
        </p>
      </section>

      {/* Vision Section */}
      <section className="py-12 px-6 md:px-16 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We envision a future where every farmer has access to modern resources,
          digital tools, and education to cultivate a greener, healthier, and more
          productive agricultural ecosystem for future generations.
        </p>
      </section>

      {/* Meet the Farmers */}
      <section className="py-12 px-6 md:px-16 text-center bg-white">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Meet the Farmers</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Behind every harvest is a team of dedicated farmers who work tirelessly to
          nurture the soil, care for the livestock, and ensure that every crop and animal
          is raised with integrity and passion. Our farmers are the heart of our mission —
          innovators, caretakers, and stewards of nature.
        </p>
      </section>

      {/* Sustainability Goals */}
      <section className="py-12 px-6 md:px-16 bg-green-50 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">Sustainability Goals</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We prioritize sustainable farming methods by reducing chemical use, promoting
          organic fertilizers, and conserving water resources. Our long-term goal is to
          establish a self-sufficient ecosystem where innovation meets tradition —
          ensuring food security and environmental preservation.
        </p>
      </section>
    </div>
  )
}

export default About
