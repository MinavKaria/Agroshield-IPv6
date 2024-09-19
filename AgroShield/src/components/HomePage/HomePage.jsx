// src/HomePage.jsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-4 shadow-md">
        <div className="text-3xl font-bold text-green-600">FarmWise</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#home" className="hover:text-green-600">Home</a></li>
            <li><a href="#about" className="hover:text-green-600">About Us</a></li>
            <li><a href="#services" className="hover:text-green-600">Services</a></li>
            <li><a href="#contact" className="hover:text-green-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center py-20 bg-green-100">
        <h1 className="text-5xl font-bold text-green-800 mb-4">Efficient Farm Management</h1>
        <p className="text-lg text-gray-700 mb-8">Streamline your farming operations with FarmWise tools and insights.</p>
        <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700">Get Started</button>
      </section>

      {/* Features Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Dashboard</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Crop Monitoring</h3>
              <p className="text-gray-600">Monitor crop health and yield with our advanced AI tools.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Weather Forecasting</h3>
              <p className="text-gray-600">Get real-time weather updates for better decision-making.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Resource Management</h3>
              <p className="text-gray-600">Manage farm resources efficiently and reduce waste.</p>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 bg-green-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Crop Monitoring</h3>
              <p className="text-gray-600">Monitor crop health and yield with our advanced AI tools.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Weather Forecasting</h3>
              <p className="text-gray-600">Get real-time weather updates for better decision-making.</p>
            </div>
            <div className="p-6 bg-green-50 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Resource Management</h3>
              <p className="text-gray-600">Manage farm resources efficiently and reduce waste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 py-6">
        <div className="container mx-auto text-center text-white">
          <p>&copy; 2024 FarmWise. All rights reserved.</p>
          <div className="flex justify-center mt-4 space-x-6">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
