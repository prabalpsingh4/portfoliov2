"use client";
import React from 'react';
import { useRouter } from 'next/router';
import { motion, useScroll, useSpring } from 'framer-motion';
import Header from './components/Header';
import Footer from './components/Footer';

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const giphy = {
    baseURL: "https://api.giphy.com/v1/gifs/",
    apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
    tag: "fail",
    type: "random",
    rating: "R"
};
let giphyURL = encodeURI(
    giphy.baseURL +
        giphy.type +
        "?api_key=" +
        giphy.apiKey +
        "&tag=" +
        giphy.tag +
        "&rating=" +
        giphy.rating
);
var renderGif = _giphy => {
    console.log(_giphy);
    document.getElementById("giph").innerHTML = `<img src="${_giphy.images.original.url}" alt="" srcset="">`;
    
};
var newGif = () => {
    fetch(giphyURL).then(response => response.json()).then(json => renderGif(json.data));
}
newGif();

  return (
    <div>
      <Header />
    <main className="flex min-h-screen flex-col items-center justify-center p-24"
    style={{ backgroundImage: 'linear-gradient(to right, #ADD8E6, #B0E0E6, #ADD8E6, #87CEFA)' }}>
      {/* <motion.div className="h-[5px] w-full bg-[#62fcaf] fixed z-50"
                  style={{ scaleX, transformOrigin: "0%" }} /> */}
      <h1 className="text-3xl font-bold text-center mb-8 text-white">Welcome to My Portfolio</h1>
      <div className="space-x-4">
        <a href="/experience" className="inline-block">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Experience
          </motion.button>
        </a>
        
        <a href="/projects" className="inline-block">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
            Projects
          </motion.button>
        </a>
      </div>

      <div class="about-col-1" id="giph">
                  {newGif()}
      </div>

      <section className="my-8 w-full">
        <div className="text-lg text-white font-semibold text-center mb-4">
          Explore my professional background and personal projects. Feel free to navigate through the sections to learn more about my work and accomplishments.
        </div>
      </section>
    </main>
    <Footer/>
    </div>
  );
}
