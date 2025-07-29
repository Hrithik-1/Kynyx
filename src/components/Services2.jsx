import React from "react";

const cardStyle = "bg-[#1b1b2e] rounded-xl p-6 flex flex-col justify-between shadow-md";
const sectionTitle = "text-2xl font-semibold text-white mb-4";

const Services2 = () => {
  return (
    <div className="min-h-screen bg-[#0f0f1a] text-white px-6 md:px-16 py-16 font-sans">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Full Suite of <br />Digital Services</h1>
        <button className="bg-gradient-to-r from-[#5e2f6e] to-[#e43fe4] px-6 py-2 rounded-full text-white font-semibold mt-4 hover:opacity-90">
          Explore Services
        </button>
      </div>

      {/* Services Section */}
      <section>
        <h2 className={sectionTitle}>Our Core Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Website Development */}
          <div className={cardStyle}>
            <div>
              <h3 className="text-xl font-bold mb-2">Website Development</h3>
              <p className="text-gray-400 mb-4 text-sm">
                We build responsive, secure, and user-friendly websites tailored to your business needs. From landing pages to full-stack web platforms, we deliver scalable solutions.
              </p>
            </div>
            <div className="h-32 bg-gradient-to-tr from-[#3a88a4] to-[#873d87] rounded-lg flex items-center justify-center">
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">🌐</div>
            </div>
          </div>

          {/* Mobile App Development */}
          <div className={cardStyle}>
            <div>
              <h3 className="text-xl font-bold mb-2">Mobile App Development</h3>
              <p className="text-gray-400 mb-4 text-sm">
                We craft seamless and high-performing mobile applications for Android & iOS. Native, hybrid, or cross-platform — we build apps that engage and perform.
              </p>
            </div>
            <div className="h-32 bg-gradient-to-tr from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">📱</div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing Section */}
      <section className="mt-16">
        <h2 className={sectionTitle}>Digital Marketing</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Digital Marketing Card */}
          <div className={cardStyle}>
            <div>
              <h3 className="text-xl font-bold mb-2">Result-Driven Campaigns</h3>
              <p className="text-gray-400 mb-4 text-sm">
                We help you reach and engage your target audience through SEO, social media, content marketing, PPC, and more. Grow visibility and drive real ROI.
              </p>
            </div>
            <div className="h-32 bg-cyan-400 rounded-lg flex items-center justify-center">
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center rounded-full">📈</div>
            </div>
          </div>

          {/* Supporting Chart/Visual */}
          <div className="bg-[#1b1b2e] rounded-xl p-6 flex items-center justify-center">
            <div className="w-full h-32 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Add-On Services Section */}
      <section className="mt-16">
        <h2 className={sectionTitle}>Additional Services</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Cards */}
          <div className="grid grid-cols-1 gap-6">
            <div className={cardStyle}>
              <h3 className="text-xl font-bold mb-2">UI/UX Design</h3>
              <p className="text-gray-400 text-sm mb-4">
                Delight your users with elegant, functional designs. We design intuitive interfaces that enhance user experience across all devices.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
                Learn More
              </button>
            </div>

            <div className={cardStyle}>
              <h3 className="text-xl font-bold mb-2">Branding & Strategy</h3>
              <p className="text-gray-400 text-sm mb-4">
                From logo design to complete brand identity systems, we help you build a memorable brand that stands out in a competitive market.
              </p>
              <button className="bg-gradient-to-r from-purple-500 to-cyan-400 px-4 py-2 rounded-full text-sm font-medium">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="bg-[#1b1b2e] rounded-xl p-6 flex items-center justify-center">
            <div className="w-full h-48 bg-purple-500 rounded-lg"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services2;
