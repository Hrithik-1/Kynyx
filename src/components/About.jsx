import React, { useState } from "react";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const response = await fetch("https://your-backend-api.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-[#0f0f1a] text-white min-h-screen px-4 sm:px-8 md:px-16 py-12 font-sans">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4">
          About Our Company
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
          We provide innovative digital services to help businesses grow and
          succeed in a constantly evolving digital landscape.
        </p>
        <button className="mt-6 px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full font-semibold text-white text-sm sm:text-base">
          Learn More
        </button>
      </section>

      {/* About Info */}
      <section className="mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-400 text-base">
              We are a passionate team of developers, designers, and strategists dedicated to crafting exceptional digital experiences.
            </p>
          </div>
          <div className="w-full h-56 sm:h-64 md:h-72 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-xl" />
        </div>
      </section>

      {/* Services */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold mb-10 text-center">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Service Card 1 */}
          <div className="bg-[#1a1a2e] p-6 rounded-xl hover:shadow-xl transition-all flex flex-col items-center justify-center text-center h-52">
            <h3 className="text-xl font-semibold mb-2">Web Development</h3>
            <p className="text-gray-400 text-sm">
              From simple landing pages to complex web applications.
            </p>
          </div>

          {/* Service Card 2 */}
          <div className="bg-[#1a1a2e] p-6 rounded-xl hover:shadow-xl transition-all flex flex-col items-center justify-center text-center h-52">
            <h3 className="text-xl font-semibold mb-2">UI/UX Design</h3>
            <p className="text-gray-400 text-sm">
              Crafting beautiful, user-friendly interfaces and experiences.
            </p>
          </div>

          {/* Service Card 3 */}
          <div className="bg-[#1a1a2e] p-6 rounded-xl hover:shadow-xl transition-all flex flex-col items-center justify-center text-center h-52">
            <h3 className="text-xl font-semibold mb-2">Digital Strategy</h3>
            <p className="text-gray-400 text-sm">
              Helping brands grow with smart, data-driven strategies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-2 bg-[#1a1a2e] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-cyan-400 px-6 py-2 rounded-full font-semibold text-white"
          >
            Send Message
          </button>

          {/* Status Messages */}
          {status === "loading" && <p className="text-yellow-400">Sending...</p>}
          {status === "success" && <p className="text-green-400">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-400">Something went wrong. Try again.</p>}
        </form>
      </section>
    </div>
  );
};

export default About;
