import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen w-full sm:mt-[68px] mt-0 bg-gray-50 ">

      <div className="relative bg-red-950 text-white py-16">
        <div className=" mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Shri Gopal Plywood & Hardware</h1>
          <p className="text-xl mb-8">Your Complete Solution for Construction and Interior Materials</p>
        </div>
      </div>

      <div className=" mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-6">Excellence in Selling Quality Assured Materials</h2>
          <p className="text-gray-600 text-lg">
            Shri Gopal Plywood & Hardware has been a trusted name
            in providing high-quality construction materials and hardware solutions to both
            contractors and homeowners.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3 text-red-900">🏆</span>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
            </div>
            <p className="text-gray-600">
              We source only the finest materials from trusted manufacturers to ensure lasting durability.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3 text-red-900">👥</span>
              <h3 className="text-xl font-semibold">Expert Guidance</h3>
            </div>
            <p className="text-gray-600">
              Our experienced staff provides professional advice for all your construction needs.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-sm">
            <div className="flex items-center mb-4">
              <span className="text-2xl mr-3 text-red-900">🚚</span>
              <h3 className="text-xl font-semibold">Timely Delivery</h3>
            </div>
            <p className="text-gray-600">
              We ensure prompt delivery of materials to keep your projects on schedule.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Our Products & Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              ["Plywood Solutions", "Premium quality plywood in various grades and thicknesses for all applications."],
              ["Glass & Aluminum Works", "Custom glass solutions and aluminum fabrication for modern architectural needs."],
              ["Lamination Services", "Wide range of laminates and professional lamination services for furniture."],
              ["Hardware Collection", "Comprehensive range of construction and furniture hardware."],
              ["Interior Solutions", "Complete interior materials including false ceiling, flooring, and wall panels."],
              ["Custom Services", "Tailored solutions to meet your specific project requirements."]
            ].map(([title, description]) => (
              <ProductCard key={title} title={title} description={description} />
            ))}
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="text-xl text-red-900">⏰</span>
            <p className="text-lg">Open Monday to Saturday: 9:00 AM - 8:00 PM</p>
          </div>
          <div className="flex justify-center items-center gap-4 mb-6">
            <span className="text-xl text-red-900">📞</span>
            <p className="text-lg">Contact: +91-9305828230</p>
          </div>
          <div className="flex justify-center items-center gap-4">
            <span className="text-xl text-red-900">🏢</span>
            <p className="text-lg">
              GT Road Gerai, Gopiganj Uttar Pradesh 221303
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ title, description }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AboutPage;