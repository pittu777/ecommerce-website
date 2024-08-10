
// import React from 'react';
// import { FaHeart, FaEye, FaShareAlt, FaComment, FaUserCircle } from 'react-icons/fa';
// import img5 from "./../../assets/sellers/image 7.png";
// import img6 from "./../../assets/sellers/image 8.png";
// import img7 from "./../../assets/sellers/Frame 28.png";
// import styles from "./insta.module.css";

// const Insta = () => {
//     const sellers = [img5, img6, img7, img5];
//     const likesCounts = [120, 250, 180, 150]; 
//     const viewsCounts = [1000, 1500, 800, 1200]; 
//     const commentCounts = [10, 15, 8, 12]; 
//     const shareCounts = [5, 10, 3, 6];

//     return (
//         <div>
        
//             <ul className={styles.imageList}>
//                 {sellers.map((category, index) => (
//                     <li key={index}>
//                         <img className={styles.img} src={category} alt={`Category ${index + 1}`} />
//                         <div className={styles.iconContainer}>
//                             <div>
//                                 <FaHeart className={styles.icon} />
//                                 {likesCounts[index]}
//                             </div>
//                             <div>
//                                 <FaComment className={styles.icon} />
//                                 {commentCounts[index]}
//                             </div>
//                             <div>
//                                 <FaShareAlt className={styles.icon} />
//                                 {shareCounts[index]}
//                             </div>
//                             <div>
//                                 <FaEye className={styles.icon} />
//                                 {viewsCounts[index]}
//                             </div>
//                         </div>
//                         <div className={styles.userDetails}>
//                             <FaUserCircle className={styles.icon} />
//                             <span className={styles.follow}>Follow</span>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Insta;




import React, { useState, useRef, useEffect } from 'react';
import styles from './insta.module.css';
import { FaHeart, FaEye  } from 'react-icons/fa';

interface VideoComponentProps {
  src: string;
  likes: number;
  views: number;
}

const VideoComponent: React.FC<VideoComponentProps> = ({ src, likes, views }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevents click event from bubbling to the video container
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoClick = () => {
    setShowButton(!showButton);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className={styles.videoContainer} onClick={handleVideoClick}>
      <video
        ref={videoRef}
        className={styles.video}
        src={src}
        controls={false}
        autoPlay
        muted
        loop
      />
      <div className={styles.overlay}>
        <div className={styles.likesViews}>
          <span>{<FaHeart/>}</span>
          <span>{<FaEye/>} Views</span>
        </div>
        {showButton && (
          <button className={styles.playPauseButton} onClick={handlePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        )}
      </div>
    </div>
  );
};

export default VideoComponent;
