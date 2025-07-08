import React, { useRef, useEffect } from 'react';

interface VideoIntroProps {
  onVideoClick: () => void;
}

export const VideoIntro: React.FC<VideoIntroProps> = ({ onVideoClick }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }
  }, []);

  return (
    <div 
      className="fixed inset-0 w-screen h-screen cursor-pointer z-50 bg-black"
      onClick={onVideoClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        loop
        muted
        playsInline
        autoPlay
      >
        <source 
          src="https://videos.pexels.com/video-files/6985304/6985304-uhd_2560_1440_25fps.mp4" 
          type="video/mp4" 
        />
        <source 
          src="https://videos.pexels.com/video-files/6985304/6985304-hd_1920_1080_25fps.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 drop-shadow-2xl">
            ROCKET SIMULATION SUITE
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 drop-shadow-lg font-light">
            Advanced Trajectory Modeling & Optimization Platform
          </p>
          <p className="text-lg md:text-xl text-red-400 mb-6 drop-shadow-lg animate-pulse">
            Click anywhere to begin mission configuration
          </p>
          <div className="animate-pulse">
            <div className="w-20 h-20 mx-auto border-4 border-red-500 rounded-full flex items-center justify-center bg-red-500/20">
              <div className="w-0 h-0 border-l-10 border-l-white border-t-6 border-t-transparent border-b-6 border-b-transparent ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};