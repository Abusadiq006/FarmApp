import React from "react"
import "../index.css"

const About = () => {
  return (
    <div className="about-page fade-in">
      {/* Hero Section */}
      <section className="hero-section relative h-[60vh] bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: "url('/images/hero.webp')" }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <h1 className="relative text-white text-5xl md:text-6xl font-bold z-10 text-center drop-shadow-lg">
          About Our Farm
        </h1>
      </section>

      {/* Mission Section */}
      <section className="section">
        <h2 className="section-title">Our Mission</h2>
        <p className="section-text">
          Our mission is to revolutionize agriculture through modern farming practices,
          technology integration, and community-driven sustainability. We aim to provide
          high-quality produce and livestock while empowering local farmers with tools
          and knowledge to increase productivity and maintain ecological balance.
        </p>
      </section>

      {/* Vision Section */}
      <section className="section">
        <h2 className="section-title">Our Vision</h2>
        <p className="section-text">
          We envision a future where every farmer has access to modern resources,
          digital tools, and education to cultivate a greener, healthier, and more
          productive agricultural ecosystem for future generations.
        </p>
      </section>

      {/* Meet the Farmers */}
      <section className="section">
        <h2 className="section-title">Meet the Farmers</h2>
        <p className="teleading-relaxed max-w-3xl mx-auto">
          Behind every harvest is a team of dedicated farmers who work tirelessly to
          nurture the soil, care for the livestock, and ensure that every crop and animal
          is raised with integrity and passion. Our farmers are the heart of our mission —
          innovators, caretakers, and stewards of nature.
        </p>
      </section>

      {/* Sustainability Goals */}
      <section className="section">
        <h2 className="section-title">Sustainability Goals</h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          We prioritize sustainable farming methods by reducing chemical use, promoting
          organic fertilizers, and conserving water resources. Our long-term goal is to
          establish a self-sufficient ecosystem where innovation meets tradition —
          ensuring food security and environmental preservation.
        </p>
      </section>


      {/* Contact Section */}
      <section className="section contact-section">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-text">
          We’d love to hear from you! Reach out to our farm team for inquiries,
          partnerships, or to schedule a visit.
        </p>


        <div className="contact-info">
        <p><strong>Address:</strong> Green Valley Farm Estate, Kaduna, Nigeria</p>
        <p><strong>Email:</strong> {" "}
          <a href="mailto:info@maitashi005@gmail.com" 
          className="text-green-700 hover:underline">
            Maitashi005@gmail.com</a> 
        </p>
        <p>
          <strong>Phone:</strong> {" "} 
            <a href="tel:+2348106209122" 
            className="text-green-700 hover:underline">
              +234 8106 209 122
            </a>
        </p>

        {/* Social Links */}

        <div className="mt-4">
          <p className="font-semibold">Follow Us:</p>
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/maitashi005"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover:text-green-900 transition-all duration-300">
              Instagram
            </a>
          </div>
          <div className="mt-4">  
            <a href="https://www.tiktok.com/@maitashi00"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-700 hover-text-green-900 transition-all duration-300">
              TikTok
            </a>
          
          </div>
        </div>

      </div>
      </section>
      
    </div>
  )
}

export default About
