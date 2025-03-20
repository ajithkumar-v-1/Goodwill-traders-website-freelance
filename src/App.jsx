import React, { useState } from "react";
import { Building2, Phone, Mail, Truck, Shield, Factory } from "lucide-react";
import { Toaster } from "react-hot-toast";
function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Toaster position="top-right" />

      {/* Hero Section */}
      <div
        className="h-screen bg-cover bg-center relative"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1587293852726-70cdb56c2866?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-display uppercase tracking-wide">
              Goodwill Traders
            </h1>
            <p className="text-lg md:text-xl mb-8 font-light tracking-wider max-w-2xl mx-auto">
              Your Premier Partner in Steel Trading & Distribution
            </p>
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 md:px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300 uppercase text-sm md:text-base tracking-wider inline-block font-display"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 font-display uppercase tracking-wide">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <ServiceCard
              icon={<Truck className="w-12 h-12 text-blue-600" />}
              title="Distribution"
              description="Nationwide delivery network ensuring timely supply of premium steel products to meet your business needs"
            />
            <ServiceCard
              icon={<Shield className="w-12 h-12 text-blue-600" />}
              title="Quality Assurance"
              description="Rigorous quality control measures ensuring every product meets international standards"
            />
            <ServiceCard
              icon={<Factory className="w-12 h-12 text-blue-600" />}
              title="Custom Solutions"
              description="Tailored steel solutions crafted to match your specific industry requirements"
            />
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 font-display uppercase tracking-wide">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8 p-6 bg-white rounded-2xl shadow-sm">
              <div className="flex items-center space-x-4">
                <Building2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-display uppercase tracking-wide text-sm text-gray-900">
                    Address
                  </h3>
                  <p className="text-gray-600">
                    No:19 9/2, Sembudoss street , George town, chennai -600001
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-display uppercase tracking-wide text-sm text-gray-900">
                    Phone
                  </h3>
                  <a
                    href="tel:+919444444352"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    9444444352{" "}
                  </a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-display uppercase tracking-wide text-sm text-gray-900">
                    Email
                  </h3>
                  <a
                    href="mailto:goodwilltrades@gmail.com"
                    className="text-gray-600 hover:text-blue-600 transition duration-300"
                  >
                    goodwilltrades2022@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6 p-6 bg-white rounded-2xl shadow-sm"
            >
              <input 
                type="hidden" 
                name="access_key" 
                value={import.meta.env.VITE_WEB3FORMS_KEY} 
              />
              <input 
                type="hidden" 
                name="subject" 
                value="New Contact Form Submission from Goodwill Traders Website" 
              />
              <input 
                type="hidden" 
                name="from_name" 
                value="Goodwill Traders Website" 
              />
              <input 
                type="checkbox" 
                name="botcheck" 
                className="hidden" 
                style={{ display: 'none' }} 
              />
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your Phone"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                  required
                ></textarea>
              </div>
              <input 
                type="hidden" 
                name="redirect" 
                value={window.location.href} 
              />
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 uppercase tracking-wider font-display text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm tracking-wide font-display uppercase">
            © 2025 Goodwill Traders. All rights reserved. 
          </p>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-gray-50 rounded-xl text-center hover:shadow-lg transition duration-300">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 font-display uppercase tracking-wide">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default App;