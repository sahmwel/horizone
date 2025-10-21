import React from "react";

const PromoSection = () => {
  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 py-10">
      {/* Left Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200"
          alt="Explore More"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-6 text-white rounded-xl">
          <div>
            <h2 className="text-2xl font-semibold mb-2">
              Explore more to get your
              <br />
              comfort zone
            </h2>
            <p className="text-sm mb-4">
              Book your perfect stay with us.
            </p>
            <button className="bg-white text-black px-5 py-2 rounded-lg font-medium hover:bg-gray-200 transition">
              Booking Now →
            </button>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wide">Articles Available</p>
            <p className="text-3xl font-bold">78</p>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200"
          alt="Memories"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Beyond accommodation, creating
            <br />
            memories of a lifetime
          </h2>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
