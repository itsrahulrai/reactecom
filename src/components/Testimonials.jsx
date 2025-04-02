const testimonials = [
  {
    id: 1,
    name: "@Rahul",
    text: "Outstanding results and exceptional service",
    bg: "bg-blue-100",
    image: "https://glamics.temptics.com/assets/img/category-1.jpg",
    size: "col-span-1 row-span-1",
  },
  {
    id: 2,
    name: "@Manish",
    text: "Efficient, professional, and dedicated. I was truly impressed by their attention to detail and ability to understand my needs. They went above and beyond to deliver an outstanding experience.",
    bg: "bg-yellow-100",
    image: "https://glamics.temptics.com/assets/img/category-6.jpg",
    size: "col-span-2 row-span-1",
  },
  {
    id: 3,
    name: "@Kavita",
    text: "Consistently outstanding service!!",
    bg: "bg-green-100",
    image: "https://glamics.temptics.com/assets/img/category-2.jpg",
    size: "col-span-1 row-span-1",
  },
  {
    id: 4,
    name: "@Vinay",
    text: '"Exceptional designs, unmatched quality." Their innovative approach and eye for detail ensured that every aspect of the project was executed flawlessly. It was a pleasure collaborating with them!',
    bg: "bg-gray-100",
    image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    size: "col-span-2 row-span-1",
  },
  {
    id: 5,
    name: "@Shivam",
    text: "Sleek designs, exceptional service",
    bg: "bg-purple-100",
    image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    size: "col-span-1 row-span-1",
  },
  {
    id: 6,
    name: "@Sumit",
    text: "Exceeds expectations every time! I have worked with many teams, but this one stands out for its dedication, creativity, and ability to turn vision into reality. Their passion is clearly reflected in their work.",
    bg: "bg-red-100",
    image: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    size: "col-span-2 row-span-1",
  },

];

const Testimonials = () => {
  return (
    <div className="w-full mx-auto py-12 px-6">
      <div className="p-10 drop-shadow-lg shadow mb-10">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <p className="font-medium text-[#EF2853] uppercase tracking-widest">
              Words That Inspire Trust
            </p>
            <h2 className="text-4xl font-bold text-gray-900 font-[Playfair Display]">
              What People Say
            </h2>
          </div>

          <a href="#" className="text-gray-600 hover:text-gray-900 flex items-center gap-1">
            Read All Reviews →
          </a>
        </div>
        <div className="grid grid-cols-3 auto-rows-auto gap-6">
          {testimonials.map((item, index) => (
            <div
              key={item.id}
              className={`p-6 rounded-xl shadow-md ${item.bg} flex items-center gap-4 
                          transition-transform transform hover:-translate-y-2 hover:shadow-lg
                          ${item.size} animate-fade-in`}
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: "both",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full border border-gray-300"
              />
              <p className="text-gray-800 text-sm">
                {item.text} - <span className="font-semibold">{item.name}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
