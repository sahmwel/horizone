import React from "react";
import BlogCard from "./BlogCard";

/* We'll create 9 cards to match grid density in your screenshot.
   Using the uploaded images and fallbacks for variety.
*/
const posts = [
  {
    image: "/images/destination-1.jpg",
    category: "Destination",
    date: "30 Jan 2024",
    readTime: "10 mins read",
    title: "Unveiling the Secrets Beyond the Tourist Trails",
    desc: "Dive into the local culture, discover hidden spots, and experience the authentic charm that often...",
    author: "Seraphina Isabella",
    avatar: "/images/cards-2.jpg",
  },
  {
    image: "/images/lifestyle-1.jpg",
    category: "Lifestyle",
    date: "29 Jan 2024",
    readTime: "5 mins read",
    title: "A Fashionista's Guide to Wanderlust",
    desc: "Explore the intersection of fashion and travel as we delve into the wardrobes of globetrotters...",
    author: "Maximilian Bartholomew",
    avatar: "/images/cards-3.jpg",
  },
  {
    image: "/images/tips-1.jpg",
    category: "Tips & Hacks",
    date: "26 Jan 2024",
    readTime: "15 mins read",
    title: "Top 5 Apps and Gadgets That Will Transform Your Journeys",
    desc: "Explore the latest in travel technology with our guide to must-have apps and gadgets.",
    author: "Anastasia Evangeline",
    avatar: "/images/cards-1.jpg",
  },
  // duplicate variations to populate 9 cards
  {
    image: "/images/culinary.jpg",
    category: "Culinary",
    date: "24 Jan 2024",
    readTime: "10 mins read",
    title: "Savoring Mozaic Resto Gastronomic Delights",
    desc: "From street food to fine dining, uncover the diverse and delectable world of [Destination]'s...",
    author: "Nathaniel Reginald",
    avatar: "/images/cards-2.jpg",
  },
  {
    image: "/images/destination-2.jpg",
    category: "Destination",
    date: "20 Jan 2024",
    readTime: "8 mins read",
    title: "Journey Through Time",
    desc: "Wander through ancient streets, visit iconic landmarks, and immerse yourself in the tales that...",
    author: "Percival Thaddeus",
    avatar: "/images/cards-3.jpg",
  },
  {
    image: "/images/culinary-1.jpg",
    category: "Culinary",
    date: "18 Jan 2024",
    readTime: "6 mins read",
    title: "Experiencing Sustainable Culinary Tourism",
    desc: "Join us on a sustainable culinary voyage, exploring destinations that prioritize farm-to-table...",
    author: "Sebastian Montgomery",
    avatar: "/images/cards-1.jpg",
  },
  {
    image: "/images/lifestyle-2.jpg",
    category: "Lifestyle",
    date: "17 Jan 2024",
    readTime: "5 mins read",
    title: "Navigating the Traveler's Lifestyle",
    desc: "Dive into the world of balancing a vibrant travel lifestyle–from managing work on the road to...",
    author: "Arabella Serenity",
    avatar: "/images/cards-2.jpg",
  },
  {
    image: "/images/tips.jpg",
    category: "Tips & Hacks",
    date: "12 Jan 2024",
    readTime: "8 mins read",
    title: "10 Essential Packing Hacks for Stress-Free Travel",
    desc: "Uncover the secrets to efficient packing that will revolutionize your travel experience.",
    author: "Benjamin Augustus",
    avatar: "/images/cards-3.jpg",
  },
  {
    image: "/images/destination-3.jpg",
    category: "Destination",
    date: "10 Jan 2024",
    readTime: "10 mins read",
    title: "Adrenaline-Pumping Adventures",
    desc: "Join us on an exploration of Adventure Destinations, where heart-pounding activities await.",
    author: "Calista Gwendolyn",
    avatar: "/images/cards-1.jpg",
  },
];

const BlogSection: React.FC = () => {
  return (
    <section className="bg-[#f8f8f9] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((p, i) => (
            <BlogCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
