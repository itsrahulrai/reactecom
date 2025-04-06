import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaCalendarAlt, FaClock } from "react-icons/fa";
import { HiOutlineCalendar, HiOutlineUser, HiOutlineClock } from "react-icons/hi";
import Footer from "../components/Footer";

const tagColors = [
  'bg-pink-200',
  'bg-blue-200',
  'bg-green-200',
  'bg-yellow-200',
  'bg-purple-200',
  'bg-red-200',
  'bg-indigo-200',
];

const BlogDetails = () => {
  return (
    <>
      <div className="rounded mt-12 bg-gradient-to-r from-pink-500 to-red-500 text-white py-12 text-center shadow-md">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Dive Deeper into Every Detail, <br />
          <span className="block mt-4 text-2xl md:text-5xl font-serif leading-tight">
            Insightful Stories. Expert Perspectives.
          </span>
        </h1>

        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg">
          Welcome to the heart of our content—where ideas unfold, trends are explored, and voices are heard.
          Discover the full story behind every post and enrich your knowledge with thoughtfully written articles crafted for curious minds like yours.
        </p>
      </div>

      <div className="pt-24 px-4 sm:px-6 md:px-10 bg-white text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 pb-20">
          {/* Blog Content */}
          <div className="lg:col-span-8 space-y-10">
            <img
              src="https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg"
              alt="Main"
              className="w-full h-[200px] sm:h-[500px] object-cover rounded shadow-2xl"
            />

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight tracking-tight mb-4"
            >
              Traveling Makes You More Intelligent and More Energetic
            </motion.h1>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between text-sm text-gray-500 border-b pb-5 gap-4">
              {/* Post Meta Info */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
                <span className="flex items-center gap-1">
                  <HiOutlineCalendar className="text-base" />
                  <span>April 5, 2025</span>
                </span>
                <span className="flex items-center gap-1">
                  <HiOutlineUser className="text-base" />
                  <span>Rahul Rai</span>
                </span>
                <span className="flex items-center gap-1">
                  <HiOutlineClock className="text-base" />
                  <span>5 min read</span>
                </span>
              </div>
            </div>

            <div className="text-gray-700 text-lg space-y-10 leading-relaxed text-justify">
              <p>
                Storytelling through travel is about blending emotions with visuals. A simple alleyway with street vendors or an early morning sunrise over hills can communicate much more than words. These authentic moments are what truly connect with readers.
              </p>


              <blockquote className="border-l-4 border-[#EF2853] pl-6 italic bg-gray-50 py-4 px-6 rounded-xl shadow-sm">
                "Combined with a handful of mindful strategies, traveling generates positive energy, enhances creativity and boosts emotional resilience."
              </blockquote>
              <p>
                When you walk through the bustling lanes of a foreign city, every sound, smell, and smile tells a story. The sizzle of street food, the laughter of children playing in narrow alleys, the quiet murmur of prayers in ancient temples—these are the raw, unscripted snippets of real life that no guidebook can capture. They make you pause and realize how beautifully diverse the world is.
              </p>

              <p>
                What makes travel stories truly memorable isn't the luxury hotels or the famous landmarks, but those fleeting, intimate encounters—sharing tea with a local artisan, getting lost in a chaotic marketplace, or witnessing a breathtaking sunset in a remote village. These stories go beyond the surface. They reflect cultural depth, human connection, and personal growth.
              </p>

              <p>
                As a traveler and a storyteller, your role is to observe, absorb, and translate those moments into something your readers can feel. It's not about how many countries you've visited; it's about how deeply you've connected with each one. Travel writing should be honest, immersive, and heartfelt—inviting the reader to walk in your shoes and see the world through your eyes.
              </p>

              <img
                src="https://images.pexels.com/photos/672358/pexels-photo-672358.jpeg"
                alt="Cultural Experience"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />

              <p>
                Ultimately, the purpose of travel isn’t just to escape. It’s to discover new dimensions of life, unlock creativity, and return home transformed. So grab your backpack, follow the road less traveled, and let the world shape your story.
              </p>

              {/* Social Share & Tags */}
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center pt-6 border-t mt-6 gap-4">

                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <span className="text-base font-semibold text-gray-700">Tags:</span>
                  {["Travel", "Inspiration", "Adventure", "Culture"].map((tag, i) => {
                    const tagColors = ["bg-rose-200", "bg-blue-200", "bg-green-200", "bg-yellow-200"];
                    return (
                      <span
                        key={i}
                        className={`px-3 py-1 text-dark text-sm rounded font-medium hover:opacity-90 transition ${tagColors[i % tagColors.length]}`}
                      >
                        {tag}
                      </span>
                    );
                  })}
                </div>

                <div className="flex gap-4 text-xl text-[#EF2853]">
                  <span className="text-base font-semibold text-gray-700">Share:</span>
                  <FaFacebookF className="cursor-pointer hover:text-gray-700 transition" />
                  <FaTwitter className="cursor-pointer hover:text-gray-700 transition" />
                  <FaLinkedinIn className="cursor-pointer hover:text-gray-700 transition" />
                </div>
              </div>
            </div>


            {/* Prev / Next */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-10 border-t mt-8">
              <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl hover:shadow transition cursor-pointer">
                <img src="https://images.pexels.com/photos/323503/pexels-photo-323503.jpeg" className="w-20 h-20 rounded-lg object-cover" alt="Previous" />
                <div>
                  <p className="text-sm text-gray-500">Previous Post</p>
                  <h4 className="font-semibold text-[#EF2853] hover:underline">Why Minimal Design is Powerful</h4>
                </div>
              </div>
              <div className="flex gap-4 items-center bg-gray-50 p-4 rounded-xl hover:shadow transition cursor-pointer justify-end text-right">
                <div>
                  <p className="text-sm text-gray-500">Next Post</p>
                  <h4 className="font-semibold text-[#EF2853] hover:underline">The Future of Travel Blogging</h4>
                </div>
                <img src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg" className="w-20 h-20 rounded-lg object-cover" alt="Next" />
              </div>
            </div>

            {/* Comments */}
            <div className="mt-14 space-y-10">
              <h2 className="text-2xl font-bold">02 Comments</h2>
              <ul className="space-y-6">
                {[
                  {
                    name: 'Shivam Pal',
                    date: '27 August, 2025',
                    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
                    comment:
                      'Finanapreciate Your Trust Greatly Our Clients Choose Dentace Ducts Because Know We Are The Best Area Aavantagens Realty.',
                  },
                  {
                    name: 'Manish Sharma',
                    date: '27 August, 2025',
                    avatar: 'https://randomuser.me/api/portraits/men/65.jpg',
                    comment:
                      'Finanapreciate Your Trust Greatly Our Clients Choose Dentace Ducts Because Know We Are The Best Area Aavantagens Realty.',
                  },
                ].map((c, idx) => (
                  <li key={idx} className="border-b pb-6">
                    <div className="flex gap-4">
                      <img
                        src={c.avatar}
                        alt={c.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#EF2853]"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-center flex-wrap">
                          <h4 className="font-semibold text-gray-800">{c.name}</h4>
                          <span className="text-sm text-gray-400">{c.date}</span>
                        </div>
                        <p className="text-gray-600 mt-2 text-sm">{c.comment}</p>
                        <button className="mt-3 px-4 py-1 text-xs font-semibold bg-[#EF2853] text-white rounded hover:bg-[#d91e49] transition">
                          REPLY
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Comment Form */}
              <div className="bg-white p-6 rounded shadow-xl border border-gray-100">
                <h3 className="text-xl font-bold mb-4">Post A Comment</h3>
                <p className="text-gray-500 text-sm mb-4">
                  Your email address will not be published. Required fields are marked *
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <input type="text" placeholder="Name" className="border border-gray-300 rounded p-2" />
                  <input type="email" placeholder="Email" className="border border-gray-300 rounded p-2" />
                  <input type="text" placeholder="Website" className="border border-gray-300 rounded p-2" />
                </div>
                <textarea
                  rows={4}
                  placeholder="Comment"
                  className="w-full border border-gray-300 rounded p-3 mb-4"
                />

                <div className="flex items-center gap-2 mb-4">
                  <input type="checkbox" id="saveInfo" />
                  <label htmlFor="saveInfo" className="text-sm text-gray-600">
                    Save my name, email, and website in this browser for the next time I comment.
                  </label>
                </div>
                <button className="bg-[#EF2853] text-white px-6 py-2 rounded hover:bg-[#d91e49] transition font-semibold">
                  Submit
                </button>
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            {/* Profile Card */}
            <div className="rounded bg-gradient-to-br from-white via-gray-50 to-gray-100 p-6 shadow-2xl text-center hover:shadow-[#EF2853]/30 transition-shadow duration-300 border border-gray-100">
              <div className="relative w-28 h-28 mx-auto">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="Admin"
                  className="rounded-full w-full h-full object-cover border-[5px] border-[#EF2853] shadow-lg"
                />
                <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-white rounded-full shadow" title="Online"></span>
              </div>

              <h3 className="text-2xl font-bold mt-4 text-gray-800">Rahul Rai</h3>
              <p className="text-gray-500 text-sm mt-1">Blogger · Developer · Designer</p>

              <div className="flex justify-center gap-4 mt-4">
                {[FaFacebookF, FaTwitter, FaLinkedinIn].map((Icon, i) => (
                  <Icon
                    key={i}
                    className="text-white bg-[#EF2853] w-9 h-9 p-2 rounded-full hover:bg-gray-800 transition duration-300 shadow-md cursor-pointer"
                  />
                ))}
              </div>

              <div className="mt-6 px-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sharing thoughts, tech tips, travel tales, and design ideas to inspire and connect with curious minds.
                </p>
              </div>
            </div>

            {/* Related Posts */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <h3 className="text-lg w-full font-bold text-white bg-[#EF2853] px-5 py-2 rounded-md shadow-md inline-block tracking-wide">
                Latest Posts
              </h3>

              {[
                {
                  title: 'Inspiring Web Design Trends 2025',
                  date: 'August 27, 2024',
                  time: '20 Mins',
                  category: 'Design',
                  img: 'https://images.pexels.com/photos/4051763/pexels-photo-4051763.jpeg',
                },
                {
                  title: 'How to Travel on a Budget',
                  date: 'July 12, 2024',
                  time: '15 Mins',
                  category: 'Travel',
                  img: 'https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg',
                },
                {
                  title: 'Mastering Minimalist Lifestyle in 2025',
                  date: 'June 18, 2024',
                  time: '10 Mins',
                  category: 'Lifestyle',
                  img: 'https://images.pexels.com/photos/4215116/pexels-photo-4215116.jpeg',
                },
              ]
                .map((post, i) => (
                  <div key={i} className="flex gap-4 mb-4 mt-4">
                    <img
                      src={post.img}
                      className="w-20 h-20 object-cover rounded"
                      alt="Recent"
                    />

                    <div>
                      <div className="flex flex-col justify-center space-y-2">
                        <span className="text-xs text-white bg-[#EF2853] px-2 py-1 rounded font-semibold w-fit">
                          {post.category}
                        </span>
                        <p className="text-dark font-semibold hover:underline cursor-pointer text-sm">
                          {post.title}
                        </p>
                      </div>

                      <div className="flex items-center text-xs text-gray-400 mt-1 gap-4">
                        <span className="flex items-center gap-1">
                          <FaCalendarAlt className="text-[13px]" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <FaClock className="text-[13px]" />
                          {post.time}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Categories */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <h3 className="text-lg w-full font-bold text-white bg-[#EF2853] px-5 py-2 rounded-md shadow-md inline-block tracking-wide">
                Categories
              </h3>

              <ul className="space-y-4">
                {[
                  { name: 'Lifestyle', bg: 'bg-blue-100', },
                  { name: 'Fashion', bg: 'bg-pink-100', },
                  { name: 'Photography', bg: 'bg-yellow-100', },
                  { name: 'Travel', bg: 'bg-green-100', },
                  { name: 'Technology', bg: 'bg-purple-100', }
                ].map((cat, i) => (
                  <li
                    key={i}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer shadow-sm hover:shadow-md transition duration-300 group ${cat.bg}`}
                  >
                    <span className={`font-semibold ${cat.text}`}>
                      {cat.name}
                    </span>
                    <span
                      className={`text-xs font-medium px-3 py-1 rounded-full bg-[#EF2853] text-white shadow-sm ${cat.text}`}
                    >
                      {Math.floor(Math.random() * 20) + 5}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-white rounded-2xl shadow-lg p-6 space-y-4">
              <h3 className="text-lg w-full font-bold text-white bg-[#EF2853] px-5 py-2 rounded-md shadow-md inline-block tracking-wide">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Travel', 'Design', 'Tips', 'Fashion', 'Food', 'Mindset', 'Coding'].map((tag, i) => (
                  <span
                    key={i}
                    className={`px-4 py-1 ${tagColors[i % tagColors.length]} text-dark rounded text-sm hover:shadow-md cursor-pointer transition`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white p-6 rounded shadow text-center">
              <h3 className="text-lg font-bold mb-2">Join Our Newsletter</h3>
              <p className="text-sm text-gray-500 mb-4">Get the latest posts and exclusive content directly in your inbox.</p>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded border border-gray-300 focus:ring-2 focus:ring-[#EF2853] mb-3"
              />
              <button className="w-full bg-[#EF2853] text-white font-semibold py-2 rounded hover:bg-[#d91e49] transition">
                Subscribe
              </button>
            </div>

            {/* Advertisement 1 */}
            <div className="bg-gradient-to-r from-[#EF2853] to-[#d91e49] text-white p-6 rounded text-center shadow">
              <h3 className="text-xl font-bold mb-2">Advertisement</h3>
              <p>Place your ad here. Reach thousands of readers!</p>
            </div>

            {/* Advertisement (Image Banner) */}
            <div className="rounded overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/4215116/pexels-photo-4215116.jpeg"
                alt="Ad Banner"
                className="w-full h-auto object-cover"
              />
            </div>

          </aside>

        </div>
      </div>
      <Footer />
    </>

  );
};

export default BlogDetails;
