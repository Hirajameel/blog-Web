"use client"

export default function About() {
  return (
    <>
      <div className="container mx-auto p-8 bg-gradient-to-br from-blue-500 via-blue-400 to-blue-600 rounded-2xl shadow-2xl text-white">
        <h1 className="text-5xl font-extrabold mb-8 text-center animate-fade-in">About Me</h1>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-lg p-8 rounded-xl shadow-lg border border-white/20">
          <p className="text-lg leading-relaxed tracking-wide text-white animate-slide-in">
            Welcome to my blog! My name is <span className="font-bold text-yellow-300">Hira</span>, and I am passionate about exploring the wonders of the world, whether it's the beauty of nature, the richness of wildlife, or the mysteries of the deep sea. Through this platform, I aim to share my experiences, thoughts, and insights with readers who share a love for discovery and inspiration.
            <br /><br />
            I believe in the power of storytelling to connect people with the natural world. Each post is crafted with care to inspire awe and respect for the environment and its incredible diversity. When I'm not writing, you can find me hiking in the mountains, photographing wildlife, or diving into new adventures.
            <br /><br />
            Thank you for visiting my blog. I hope you enjoy the journey as much as I do!
          </p>

          <div className="mt-6 text-center">
            <button className="px-6 py-3 bg-yellow-400 text-blue-800 font-semibold rounded-full shadow-lg hover:bg-yellow-300 hover:scale-105 transition duration-300">
              Explore My Blog
            </button>
          </div>
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style jsx>{`
        .animate-fade-in {
          animation: fade-in 1.5s ease-in-out;
        }

        .animate-slide-in {
          animation: slide-in 1.2s ease-out;
        }

        @tailwind base;
        @tailwind components;
        @tailwind utilities;

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
