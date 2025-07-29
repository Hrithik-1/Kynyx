import React from 'react';

const services = [
  {
    img: "/images/digital-service.png",
    title: "A Full Suite of Digital Services",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    button: "Cloud Essasy",
  },
  {
    img: "/images/user-avatar.png",
    title: "Ander Corpotions",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    button: "Create Essasy",
  },
  {
    img: "/images/user-avatar.png",
    title: "Ander Corpotions",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    button: "Corporations",
  },
  {
    img: "/images/user-avatar.png",
    title: "Ander Corpotions",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    button: "Corporations",
  },
  {
    img: "/images/user-avatar.png",
    title: "Ander Corpotions",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    button: "Corporations",
  },
  {
    img: "/images/user-avatar.png",
    title: "Ander Corpotions",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    button: "Corporations",
  },
];

const Services = () => {
  return (
    <section className="bg-[#0f0f1a] text-white py-16 px-5 animate-fadeInUp">
      <h2 className="text-3xl font-semibold mb-10 pl-2">Services</h2>
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#1c1c2b] rounded-2xl p-6 flex flex-col items-center text-center transition-transform duration-300 hover:-translate-y-1"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-40 mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm text-gray-300 mb-4">{service.description}</p>
            <button className="bg-gradient-to-r from-[#6c63ff] to-[#60c5ea] text-white py-2 px-6 rounded-full text-sm font-medium hover:opacity-90 transition">
              {service.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
