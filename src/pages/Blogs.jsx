import { useState } from "react";
import BlogCard from "../components/BlogCard";
import Paginations from "../components/Pagination";
import Footer from "../components/Footer";
const blogs = [
    {
        id: 1,
        title: "Start Fresh: Simple Morning Rituals for a Productive Day",
        slug: "start-fresh-simple-morning-rituals-for-a-productive-day",
        author: "Rahul Rai",
        date: "May 20, 2024",
        image: "https://ciseco-nextjs.vercel.app/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F10343245%2Fpexels-photo-10343245.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D600%26lazy%3Dload&w=640&q=75", // Calm morning with coffee, journal, and sun
    },

    {
        id: 2,
        title: "Freshly Squeezed: The Power of Citrus for Your Health",
        slug: "freshly-squeezed-the-power-of-citrus-for-your-health",
        author: "Rahul Rai",
        date: "May 20, 2024",
        image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600", // Citrus
    },
    {
        id: 3,
        title: "Home Vibes: Transform Your Space with Cozy Essentials",
        slug: "home-vibes-transform-your-space-with-cozy-essentials",
        author: "Rahul Rai",
        date: "May 20, 2024",
        image: "https://images.pexels.com/photos/2988860/pexels-photo-2988860.jpeg?auto=compress&cs=tinysrgb&w=600", // Cozy interior
    },
    {
        id: 4,
        title: "Master the Brew: Barista Tips for the Perfect Coffee",
        slug: "master-the-brew-barista-tips-for-the-perfect-coffee",
        author: "Rahul Rai",
        date: "May 20, 2024",
        image: "https://images.pexels.com/photos/585753/pexels-photo-585753.jpeg?auto=compress&cs=tinysrgb&w=600", // Coffee art
    },
    {
        id: 5,
        title: "Sip and Smile: Morning Drinks That Boost Your Mood",
        slug: "sip-and-smile-morning-drinks-that-boost-your-mood",
        author: "Rahul Rai",
        date: "May 20, 2024",
        image: "https://images.pexels.com/photos/374885/pexels-photo-374885.jpeg?auto=compress&cs=tinysrgb&w=600", // Bright coffee scene
    },
    {
        id: 6,
        title: "Fragrance Therapy: Scents That Energize Your Day",
        slug: "fragrance-therapy-scents-that-energize-your-day",
        author: "Rahul Rai",
        date: "May 20, 2024",
        image: "https://images.pexels.com/photos/965990/pexels-photo-965990.jpeg?auto=compress&cs=tinysrgb&w=600", // Aromatic candles/oils
    },
    {
        id: 7,
        title: "From Dull to Delightful: Simple Morning Makeovers",
        slug: "from-dull-to-delightful-simple-morning-makeovers",
        author: "Rahul Rai",
        date: "May 20, 2024",
        image: "https://images.pexels.com/photos/4051763/pexels-photo-4051763.jpeg?auto=compress&cs=tinysrgb&w=600", // Fresh start
    },
    {
        id: 8,
        title: "Green Sips: Exploring the Magic of Herbal Teas",
        slug: "green-sips-exploring-the-magic-of-herbal-teas",
        author: "Rahul Rai",
        date: "May 21, 2024",
        image: "https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=600", // Herbal tea
    },
];


const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 4;

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <div className="rounded mt-12 bg-gradient-to-r from-pink-500 to-red-500 text-white py-12 text-center shadow-md">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Discover Stories That Inspire, <br />
          <span className="block mt-4 text-2xl md:text-5xl font-serif leading-tight">
            Curated Stories, Tips & Trends
          </span>
        </h1>

        <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg">
          Dive into our latest blogs to discover helpful tips, trending insights, and thoughtful perspectives crafted just for you.
          Whether you're here to learn, get inspired, or stay updated—there's something fresh waiting for you in every post.
        </p>
      </div>

      <div className="mt-10 px-4 sm:px-6 md:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {currentBlogs.map((blog) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

        <Paginations
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
