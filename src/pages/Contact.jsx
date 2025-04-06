import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter, FaYoutube, FaTelegramPlane } from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <>
            <div className="rounded mt-12 bg-gradient-to-r from-pink-500 to-red-500 text-white py-12 text-center shadow-md">
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Let's Connect, <br />
                    <span className="block mt-4 text-2xl md:text-5xl font-serif leading-tight">
                        We’re Here to Help & Listen!
                    </span>
                </h1>

                <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg">
                    Got a question, feedback, or just want to say hello? We’d love to hear from you!
                    Reach out and let’s make something amazing together—because your experience matters to us.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start px-10 py-16 max-w-6xl mx-auto">
                {/* Left Section - Contact Info */}
                <div className="md:w-1/2 space-y-6">
                    <h1 className="text-4xl font-extrabold tracking-wide">Stay Connected with Us</h1>

                    {/* Address */}
                    <div className="flex items-center gap-3">
                        <FaMapMarkerAlt className="text-red-600 text-xl" />
                        <div>
                            <h2 className="font-semibold text-gray-700">ADDRESS</h2>
                            <p className="text-gray-500">916, 9th Floor, Toweer-2, Pearls Omaxe, NSP, Pitampura, Delhi-110034</p>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3">
                        <FaEnvelope className="text-blue-600 text-xl" />
                        <div>
                            <h2 className="font-semibold text-gray-700">EMAIL</h2>
                            <p className="text-gray-500">codersvox@gmail.com</p>
                        </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3">
                        <FaPhoneAlt className="text-green-600 text-xl" />
                        <div>
                            <h2 className="font-semibold text-gray-700">PHONE</h2>
                            <p className="text-gray-500">91+ 7050690034</p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h2 className="font-semibold text-gray-700 flex items-center gap-2">SOCIALS</h2>
                        <div className="flex gap-4 mt-2 text-xl">
                            <a href="#" className="text-blue-600 hover:text-blue-800"><FaFacebookF /></a>
                            <a href="#" className="text-blue-400 hover:text-blue-600"><FaTwitter /></a>
                            <a href="#" className="text-red-600 hover:text-red-800"><FaYoutube /></a>
                            <a href="#" className="text-blue-500 hover:text-blue-700"><FaTelegramPlane /></a>
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="md:w-1/2 bg-white shadow-lg p-8 rounded-xl">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-gray-700 font-medium">Name</label>
                            <input
                                type="text"
                                placeholder="Rahul"
                                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Email</label>
                            <input
                                type="email"
                                placeholder="codersvox@gmail.com"
                                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium">Message</label>
                            <textarea
                                placeholder="Your message here..."
                                className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:ring-2 focus:ring-blue-400 outline-none h-28"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#B81B3B] text-white font-bold py-3 rounded-lg shadow-md hover:bg-gray-900 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>

            {/* Google Map */}
            <div className="w-full mx-auto">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13999.874638146272!2d77.1517968!3d28.6905841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d031bd35247f5%3A0x167e7ad1ee25b7c7!2sHover%20Business%20Services%20LLP!5e0!3m2!1sen!2sin!4v1743704443855!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="shadow-md"
                ></iframe>
            </div>

            <Footer />
        </>
    );
};

export default Contact;
