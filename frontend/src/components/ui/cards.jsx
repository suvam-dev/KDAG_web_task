import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ cardDetails }) => {
  const { title, date, likes, description, image, imageAlt, slug } = cardDetails;

  return (
    <div className="w-full flex justify-center p-2 font-sans group">
      <div className="max-w-[400px] w-full bg-white/[0.03] border border-white/[0.08] hover:border-accent/30 backdrop-blur-xl rounded-[2rem] p-5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] transition-all duration-500 hover:transform hover:-translate-y-2 hover:shadow-[0_12px_40px_0_rgba(255,58,58,0.12)] flex flex-col justify-between">
        <div>
          <h2 className="text-[22px] font-semibold text-white group-hover:text-accent leading-[1.3] mb-3.5 tracking-tight transition-colors duration-300">
            {title}
          </h2>

          <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5 bg-white/[0.05] border border-white/[0.05] text-gray-300 px-3 py-1.5 rounded-xl text-[12px] font-medium">
              <svg className="w-4 h-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
              <span>{date}</span>
            </div>

            <div className="flex items-center gap-1.5 bg-white/[0.05] border border-white/[0.05] text-gray-300 px-3 py-1.5 rounded-xl text-[12px] font-medium">
              <svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
              </svg>
              <span>{likes}</span>
            </div>
          </div>

          <p className="text-gray-300 text-[14px] leading-relaxed mb-5 pr-2 font-light line-clamp-3">
            {description}
          </p>
        </div>

        <div className="relative w-full aspect-[4/3.2] rounded-[1.5rem] overflow-hidden bg-white/[0.02] border border-white/[0.05]">
          <div className="absolute top-0 left-0 bg-[#111114] pr-3 pb-3 rounded-br-[1.8rem] z-10">
            <Link
              to={`/${slug}`}
              className="flex items-center gap-2.5 px-5 py-3 border border-white/10 text-white font-medium rounded-xl hover:bg-accent hover:border-accent hover:shadow-[0_0_15px_rgba(255,58,58,0.4)] transition-all duration-300 bg-[#1e1e24] cursor-pointer decoration-none"
            >
              <span className="text-[14px]">Read Article</span>
              <svg className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>

          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;