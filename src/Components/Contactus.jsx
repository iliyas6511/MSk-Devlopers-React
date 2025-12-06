import React, { useState } from 'react';
import api from "./Commonurl";

const Contactus = () => {

     const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        city: '',
        message: ''
    });

    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState({ type: '', message: '' }); // success or error

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setAlert({ type: '', message: '' });

        try {
            const response = await api.post('/send-contact-email', formData);

            // Success case
            if (response.data.message === "Email sent successfully!") {
                setAlert({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
                setFormData({ name: '', mobile: '', email: '', city: '', message: '' });
            }
        } catch (error) {
            let errorMsg = "Something went wrong. Please try again.";

            if (error.response) {
                // Laravel 500 error with your exact format
                if (error.response.data.message === "Mail Error") {
                    errorMsg = error.response.data.error 
                        ? `Mail Error: ${error.response.data.error}` 
                        : "Mail Error";
                } else if (error.response.data.message) {
                    errorMsg = error.response.data.message;
                }
            } else if (!error.response) {
                errorMsg = "Network error. Please check your connection.";
            }

            setAlert({ type: 'error', message: errorMsg });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative bg-[#0d335d] bg-opacity-90 text-white py-16 px-4">
            <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
                <h2 className="text-xl md:text-[24px] font-medium text-white max-w-[600px] mx-auto">
                    Contact us today if you’d like to know more
                    about how we help buy, sell or rent your home
                </h2>
            </div>

            <div className="max-w-2xl mx-auto bg-white rounded-md shadow-md p-6 md:p-10 text-gray-800">
                <h3 className="text-lg md:text-[22px] font-semibold text-lightblack text-center mb-2">
                    Schedule a meeting with our team
                </h3>
                <p className="text-base text-center text-gray-500 mb-6 max-w-[450px] mx-auto">
                    Our experts and developers would love to contribute
                    their expertise and insights to your real estate plans.
                </p>

                {alert.message && (
                    <div
                        className={`mb-4 p-3 rounded relative text-center text-sm font-medium ${
                        alert.type === "success"
                            ? "bg-green-100 text-green-800 border border-green-300"
                            : "bg-red-100 text-red-800 border border-red-300"
                        }`}
                    >
                        {alert.message}

                        {/* Close (X) button */}
                        <button
                        onClick={() => setAlert({ message: "", type: "" })}
                        className="absolute top-1 right-2 text-xl leading-none font-bold text-gray-600 hover:text-black"
                        >
                        ×
                        </button>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-2">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-lightblue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-lightblue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-lightblue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full p-3 bg-lightblue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="4"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 bg-lightblue rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>

                    <div className="w-full group relative">
                        <button
                            type="submit"
                            disabled={loading}
                            className="relative z-10 w-full overflow-hidden border border-transparent group-hover:border-darkblue 
                                       bg-darkblue text-white font-medium py-3 px-6 rounded-sm transition-colors duration-500"
                        >
                            <span className="relative z-10 transition-colors duration-500 group-hover:text-darkblue">
                                {loading ? 'Sending...' : 'Send Email'}
                            </span>

                            <span className="absolute inset-0 z-0 bg-white scale-x-0 group-hover:scale-x-100 origin-left transition-transform 
                                             duration-500 rounded-md"></span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contactus;
