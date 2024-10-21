import React from 'react';
import { useNavigate } from 'react-router-dom';


const About = () => {

  const navigate = useNavigate()
  return (
  <>
  <div>
  <i onClick={()=>navigate('/')} className="text-white text-3xl absolute pl-4 pt-3 ri-arrow-left-line"></i>
  <div className="flex w-full h-screen items-center justify-center bg-black p-5">
      <div className="flex flex-col items-center justify-center text-white p-4">
        <div className="max-w-3xl text-center">
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
  </div>
  </>
  );
};

export default About;
