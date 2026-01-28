import React, { useState } from "react";
import { motion } from "framer-motion";
import Loader from "./Loader";
import Button from "./Button";
// import other snippets: ButtonRipple, etc.

interface GalleryItem {
  name: string;
  Component: React.FC;
  uiverseUrl: string;
  type: string;
}

const galleryItems: GalleryItem[] = [
  {
    name: "Butterfly Loader",
    Component: Loader,
    uiverseUrl: "https://uiverse.io/kiranmayee-abbireddy/cuddly-liger-14",
    type: "Loader",
  },
  {
    name: "Sweet Kitties Button",
    Component: Button,
    uiverseUrl: "https://uiverse.io/kiranmayee-abbireddy/modern-sheep-6",
    type: "Button",
  },
  // add more items here
];

export default function UiverseGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(new Set(galleryItems.map(item => item.type)));
  const filteredItems = selectedCategory
    ? galleryItems.filter(item => item.type === selectedCategory)
    : galleryItems;

  return (
    <section className="py-20 px-6 bg-white dark:bg-neutral-900 text-black dark:text-white">
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.p
          className="text-sm font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          UIverse Showcase
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Where Code Meets Color
        </motion.h2>
        <motion.p
          className="text-lg text-neutral-700 dark:text-neutral-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          A few of my favorite micro-interactions from UIverse — interactive snippets
          built with code and color.
        </motion.p>
      </div>

      {/* Category Filters */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button
          className={`px-4 py-2 text-sm rounded-full transition-colors ${
            selectedCategory === null
              ? "bg-black text-white dark:bg-white dark:text-black"
              : "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
          }`}
          onClick={() => setSelectedCategory(null)}
        >
          All ({galleryItems.length})
        </button>
        {categories.map(cat => {
          const count = galleryItems.filter(item => item.type === cat).length;
          return (
            <button
              key={cat}
              className={`px-4 py-2 text-sm rounded-full transition-colors ${
                selectedCategory === cat
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700"
              }`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat} ({count})
            </button>
          );
        })}
      </motion.div>

      {/* Snippet Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.name}
            className="bg-white dark:bg-neutral-900 rounded-2xl overflow-hidden shadow-sm border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-shadow flex flex-col"
            style={{ height: "500px" }} // fixed card height
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 + (index % 6) * 0.1 }}
          >
            {/* Snippet preview container */}
            <div className="flex-1 flex justify-center items-center p-6 overflow-hidden">
              <div className="max-h-full max-w-full w-full h-full flex justify-center items-center">
                <item.Component />
              </div>
            </div>

            {/* Bottom-aligned text & button */}
            <div className="px-6 pb-6 text-center">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <a
                href={item.uiverseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center text-sm font-medium text-black dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors gap-1"
              >
                View on Uiverse <span aria-hidden="true">→</span>
              </a>
            </div>
          </motion.div>
        ))}
      </div>



      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-neutral-500 dark:text-neutral-400">
            No snippets found in this category.
          </p>
        </div>
      )}
    </section>
  );
}
