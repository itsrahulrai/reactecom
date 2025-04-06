import { Card, Typography, Tag } from "antd";
import { motion } from "framer-motion";
import { AiOutlineRead } from "react-icons/ai";
import { Link } from "react-router-dom";

const { Title, Text } = Typography;

const BlogCard = ({ blog }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl shadow-lg overflow-hidden transition-all duration-500"
        >
            <Card
                className="border-0 p-0 bg-gradient-to-b from-[#1a1a1a] to-[#121212] rounded-2xl transition-all duration-500 h-full"
                cover={
                    <Link to={`/blogs/${blog.slug}`}>
                        <div className="relative h-64 sm:h-72 md:h-80">
                            <motion.img
                                src={blog.image}
                                alt="Blog"
                                className="w-full h-full object-cover transition-all duration-500"
                                whileHover={{ scale: 1.02 }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>
                    </Link>
                }
            >
                <div className="absolute top-4 left-4 flex items-center gap-2 z-10">
                    <AiOutlineRead size={18} className="text-[#EF2853]" />
                    <Tag className="bg-[#EF2853]/20 border-[#EF2853]/30 text-[#EF2853] px-3 py-0.5 font-semibold backdrop-blur-md rounded-md">
                        Blog
                    </Tag>
                </div>

                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="absolute bottom-5 left-4 right-4 sm:left-5 sm:right-5 bg-[#EF2853] backdrop-blur-xl p-4 sm:p-5 md:p-6 rounded-xl border border-white/20 shadow-xl transition-all duration-300 z-10"
                >
                    <Link to={`/blogs/${blog.slug}`}>
                        <Title
                            level={5}
                            style={{ color: "white" }}
                            className="text-base sm:text-lg leading-tight mb-1"
                        >
                            {blog.title}
                        </Title>
                    </Link>
                    <Text style={{ color: "white" }} className="text-xs sm:text-sm">
                        {blog.author} · {blog.date}
                    </Text>
                </motion.div>
            </Card>
        </motion.div>
    );
};

export default BlogCard;
