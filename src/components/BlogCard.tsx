import React from "react";

interface Props {
  image: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  desc: string;
  author: string;
  avatar?: string;
}

const BlogCard: React.FC<Props> = ({
  image,
  category,
  date,
  readTime,
  title,
  desc,
  author,
  avatar,
}) => {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative">
        <img src={image} className="w-full h-44 md:h-36 object-cover" alt={title} />
        <span className="absolute top-3 left-3 bg-white/90 text-xs text-gray-700 px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      <div className="p-4">
        <div className="text-xs text-gray-500">{date} · {readTime}</div>
        <h3 className="mt-2 text-md font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{desc}</p>

        <div className="flex items-center gap-3 mt-4">
          <img
            src={avatar || "https://via.placeholder.com/40"}
            className="w-8 h-8 rounded-full object-cover"
            alt={author}
          />
          <div className="text-sm font-medium">{author}</div>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
