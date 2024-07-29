
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







import React, { useEffect } from 'react';
import styles from "./insta.module.css";

const Insta = () => {
    const postLinks = [
        'https://www.instagram.com/p/C7KDAWaIVVJ/?utm_source=ig_embed&amp;utm_campaign=loading',
        'https://www.instagram.com/p/C7KDAWaIVVJ/?utm_source=ig_embed&amp;utm_campaign=loading',
        'https://www.instagram.com/p/C7KDAWaIVVJ/?utm_source=ig_embed&amp;utm_campaign=loading',
        'https://www.instagram.com/p/C7KDAWaIVVJ/?utm_source=ig_embed&amp;utm_campaign=loading',
        
    ];

    useEffect(() => {
        const script = document.createElement('script');
        script.async = true;
        script.src = "//www.instagram.com/embed.js";
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className={styles.grid_container}>
            {postLinks.map((link, index) => (
                <div key={index} className={styles.grid_item}>
                    <blockquote
                        className="instagram-media"
                        data-instgrm-captioned
                        data-instgrm-permalink={link}
                        data-instgrm-version="14"
                        style={{ background: '#FFF', border: 0, borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', padding: 0, width: '100%',  minWidth: '200px' }}
                    >
                        <a href={link} target="_blank" rel="noopener noreferrer">View this post on Instagram</a>
                    </blockquote>
                    
                </div>
            ))}
        </div>
    );
}

export default Insta;