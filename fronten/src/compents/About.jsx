import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 mb-6">About Us</h1>
        <p className="text-lg text-gray-700 mb-8">
          Welcome to <span className="font-semibold text-blue-600">The Cloth Bazaar</span> — your ultimate destination for modern, affordable, and sustainable fashion.
        </p>

        <div className="mt-10 space-y-10">
          <section className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700">
              Founded in 2021, The Cloth Bazaar was born from a simple idea — fashion should be expressive, inclusive, and accessible. What started as a local boutique quickly grew into a thriving online store serving fashion lovers across the country.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700">
              We’re on a mission to empower individuals to express themselves through stylish clothing while promoting sustainable fashion practices. We partner with eco-conscious suppliers and strive to reduce waste in every step of our production.
            </p>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Shop With Us?</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Trendy collections updated monthly</li>
              <li>Affordable pricing without compromising quality</li>
              <li>Eco-friendly and ethical sourcing</li>
              <li>Free shipping on orders over $50</li>
              <li>Dedicated 24/7 customer support</li>  
            </ul>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6 max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join the Movement</h2>
            <p className="text-gray-700 mb-4">
              Fashion is more than what you wear—it's a reflection of who you are. Join our growing community of fashion-forward thinkers and be part of a movement that values creativity, sustainability, and self-expression.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
              Learn More
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default About;