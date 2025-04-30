import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-md">
       
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Contact Us
        </h2>

    
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your message here..."
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

     
        <div className="mt-8 text-sm text-gray-600 text-center">
          <p>
            📍 <strong>Address:</strong>  Amaran Morbi , Gujrat, India
          </p>
          <p>📞 <strong>Phone:</strong> +91 98765 43210</p>
          <p>📧 <strong>Email:</strong> support@clothstore.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
