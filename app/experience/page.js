import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Experience = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{ backgroundImage: 'linear-gradient(to right, #ADD8E6, #B0E0E6, #ADD8E6, #87CEFA)' }}>
      <div className="w-full mb-6 flex items-center justify-between">
        <a className="text-black-600 font-bold text-lg mr-4" href='/'>&lt; Back</a>
      </div>
      <h1 className="text-center text-4xl font-bold mb-10">My Professional Experience</h1>
      <div className="space-y-10">
        <section id="experience1" className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Experience 1</h2>
          <p className="text-xl mt-2">Music Streaming App: Developed a music streaming application using React and Node.js, allowing users to browse a vast library of songs, create playlists, and discover new music based on their preferences. Implemented features such as user authentication, audio playback, and playlist management.</p>
        </section>

        <section id="experience2" className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Experience 2</h2>
          <p className="text-xl mt-2">Social Media Analytics Dashboard: Created a dashboard using Python and Flask to analyze social media data from various platforms like Twitter, Facebook, and Instagram. Utilized data visualization libraries like Matplotlib and Plotly to generate insightful reports on user engagement, sentiment analysis, and trending topics.</p>
        </section>

        <section id="experience3" className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Experience 3</h2>
          <p className="text-xl mt-2">Built an e-commerce platform with React and GraphQL, enabling seamless browsing, searching, and purchasing of products. Integrated payment gateways for secure transactions and implemented features like user reviews, product recommendations, and order tracking.</p>
        </section>
      </div>
    </main>
  );
};

export default Experience;
