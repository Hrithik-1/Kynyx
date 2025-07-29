import React from "react";

const Footer = () => (
  <footer className="bg-black text-white flex flex-wrap justify-between items-center px-10 py-6 rounded-t-2xl">
    <div className="flex gap-6">
      <a href="#" className="font-medium hover:underline">About Us</a>
      <a href="#" className="font-medium hover:underline">Contact</a>
      <a href="#" className="font-medium hover:underline">Privacy Policy</a>
    </div>
    <div className="flex gap-4 items-center mt-4 md:mt-0">
      <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" width="30" height="30" />
      </a>
      <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noreferrer">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" width="30" height="30" />
      </a>
      <a href="#">🐦</a>
      <a href="#">📘</a>
    </div>
  </footer>
);

export default Footer;
