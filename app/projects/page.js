import React from 'react';
import Image from 'next/image'; // Import Image component from Next.js
import Link from 'next/link'; // Import Link component from Next.js

export default function Page() {
  const projects = [
    {
      id: 1,
      title: "Music",
      description: "Your music streaming app provides a platform for users to enjoy an extensive library of songs and albums across various genres. It offers features such as personalized playlists, radio stations, and recommendations based on listening habits, ensuring a tailored and immersive music experience. This app connects music lovers with their favorite artists and helps them discover new music effortlessly.",
      imgUrl: "/images/music.png", // Adjust the image URLs based on your directory structure
      width: 500,
      height: 300,
      style: 0
    },
    {
      id: 2,
      title: "Health Care",
      description: "The app created for Alberta Children's Hospital is a practical tool designed to enhance the patient experience by facilitating the search for and connection with doctors. It provides detailed information about each doctor's qualifications and department, ensuring that patients are matched with the most suitable healthcare professionals for their specific needs. This app streamlines the process of finding the right doctor, making healthcare more accessible and personalized for children and their families.",
      imgUrl: "/images/healthcare.png", // Adjust the image URLs based on your directory structure
      width: 500,
      height: 300,
      style: 0
    },
    {
      id: 3,
      title: "Lustrade App",
      description: "Luster is a dynamic app designed for trading and creating unique collections. It allows users to curate and showcase their collections within a vibrant community where others can view and appreciate them. Luster combines the excitement of trading with the creativity of collection building, making it an ideal platform for collectors and enthusiasts to connect and share their passions.",
      imgUrl: "/images/lustrade.png", // Adjust the image URLs based on your directory structure
      width: 500,
      height: 500,
      style: 55
    }
  ];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24" style={{ backgroundImage: 'linear-gradient(to right, #ADD8E6, #B0E0E6, #ADD8E6, #87CEFA)' }}>
      <div className="w-full mb-6 flex items-center justify-between">
          <a className="text-black-600 font-bold text-lg mr-4 gap-100 " href='/'>&lt; Back</a>

      </div>
      <h1 className="text-center text-4xl font-bold mb-0">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="max-w-sm rounded overflow-hidden shadow-lg p-4">
            <Image src={project.imgUrl} alt={project.title} width={project.width} height={project.height} objectFit="cover" style={{ marginBlock: project.style }} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{project.title}</div>
              <p className="text-gray-700 text-base">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
