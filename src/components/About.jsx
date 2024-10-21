import React from 'react';

const About = () => {
  return (
   <div className="flex w-[100%] h-[100%] items-center p-5 justify-center bg-black">
     <div className="min-h-screen text-white flex items-center justify-center">
      <div className="max-w-3xl p-8 text-center">
        <h1 className="text-4xl font-bold mb-6 text-[#c6326d]">About Us</h1>
        <p className="text-lg leading-relaxed">
          Welcome to TMDb Explorer! Our website provides you with the most up-to-date and comprehensive information about movies, TV shows, actors, and more, sourced directly from The Movie Database (TMDb) API.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Explore trending content, detailed insights into your favorite shows, and discover new content through our recommendation system. We are passionate about delivering an intuitive and enjoyable experience to all film and TV enthusiasts.
        </p>
        <p className="text-lg leading-relaxed mt-4">
          Whether you're looking for new releases, popular shows, or hidden gems, we’ve got it all covered. Start exploring today and dive deep into the world of entertainment!
        </p>
      </div>
    </div>
   </div>
  );
};

export default About;
