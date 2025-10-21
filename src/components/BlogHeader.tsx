import React, { useState } from "react";

const categories = ["All", "Destinations", "Culture", "Lifestyle", "Tips & Hacks"];

const BlogHeader: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [sortOption, setSortOption] = useState("Newest");

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Title + Description */}
        <div>
          <h2 className="text-3xl font-bold mb-2">Blog</h2>
          <p className="text-gray-600">
            Here, we share travel tips, destination guides, and stories that inspire your next adventure.
          </p>
        </div>

        {/* Sort Option */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600 text-sm">Sort by:</span>
          <select
            className="border border-gray-300 rounded-lg py-2 px-3 text-sm outline-none cursor-pointer"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option>Newest</option>
            <option>Oldest</option>
            <option>Most Popular</option>
          </select>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex gap-4 mt-6 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`py-2 px-4 rounded-full text-sm transition ${
              activeCategory === cat
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </section>
  );
};

export default BlogHeader;
