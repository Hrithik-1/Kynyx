import React from "react";

const LearnMore = () => {
  return (
    <div className="bg-[#0f0f1a] text-white min-h-screen px-6 md:px-16 py-12 font-sans">
      
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
          Learn More About What We Do
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          We go beyond the basics to provide scalable, efficient, and user-focused digital solutions that bring real value to our clients.
        </p>
      </section>

      {/* Info Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-24">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Process</h2>
          <p className="text-gray-400 text-md mb-6">
            We follow a proven step-by-step process that combines strategy, creativity, and technology to deliver amazing results.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Research & Discovery</li>
            <li>Wireframes & Prototypes</li>
            <li>Development & Integration</li>
            <li>Testing & Optimization</li>
          </ul>
        </div>
        <div className="w-full h-64 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-xl shadow-lg"></div>
      </section>

      {/* Features Section */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold mb-10 text-center">Why Choose Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-[#1a1a2e] p-6 rounded-xl hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2">Experienced Team</h3>
            <p className="text-gray-400 text-sm">
              Skilled professionals with expertise in multiple domains.
            </p>
          </div>
          <div className="bg-[#1a1a2e] p-6 rounded-xl hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2">Client-Centered</h3>
            <p className="text-gray-400 text-sm">
              Your goals are our priorities, always.
            </p>
          </div>
          <div className="bg-[#1a1a2e] p-6 rounded-xl hover:shadow-xl transition-all">
            <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
            <p className="text-gray-400 text-sm">
              Designed to grow with your business needs.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
        <p className="text-gray-400 mb-6">
          Let's turn your ideas into powerful digital experiences.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full text-white font-semibold">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default LearnMore;
