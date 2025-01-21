// // // import React from "react";
// // // const Main = () => {
// // //   return (
// // //     <main style={styles.main}>
// // //       <div style={styles.videoContainer}>
// // //         <iframe
// // //           width="100%"
// // //           height="315"
// // //           src="https://www.youtube.com/embed?listType=playlist&list=YOUR_PLAYLIST_ID"
// // //           title="YouTube playlist"
// // //           frameBorder="0"
// // //           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// // //           allowFullScreen
// // //           style={styles.videoFrame}
// // //         ></iframe>
// // //       </div>
// // //       <button
// // //         style={styles.ctaButton}
// // //         onClick={() => window.open("https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID", "_blank")}
// // //       >
// // //         Watch Full Playlist
// // //       </button>
// // //     </main>
// // //   );
// // // };

// // // const styles = {
// // //   main: {
// // //     flex: "1",
// // //     padding: "2rem",
// // //   },
// // //   videoContainer: {
// // //     margin: "0 auto",
// // //     maxWidth: "800px",
// // //   },
// // //   videoFrame: {
// // //     borderRadius: "8px",
// // //   },
// // //   ctaButton: {
// // //     marginTop: "1.5rem",
// // //     padding: "0.8rem 1.5rem",
// // //     fontSize: "1rem",
// // //     color: "#fff",
// // //     backgroundColor: "#ff6f61",
// // //     border: "none",
// // //     borderRadius: "5px",
// // //     cursor: "pointer",
// // //     transition: "background-color 0.3s",
// // //     alignItems:"center",
// // //   },
// // //   ctaButtonHover: {
// // //     backgroundColor: "#e55e53",
// // //   },
// // // };

// // // export default Main;

// // import React from "react";
// // import { GraduationCap, Youtube, ExternalLink } from 'lucide-react';

// // const youtubeChannels = [
// //   {
// //     name: "Nikhil Kamath",
// //     url: "https://www.youtube.com/@nikhil.kamath",
// //     description: "Insights from one of India's youngest billionaires on finance, markets, and entrepreneurship.",
// //     image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000"
// //   },
// //   {
// //     name: "Sparx by Mukesh Bansal",
// //     url: "https://www.youtube.com/@sparxbymukeshbansal",
// //     description: "Expert guidance on personal development, business strategies, and success principles.",
// //     image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1000"
// //   }
// // ];

// // const Main = () => {
// //   return (
// //     <>
// //       {/* <Header />
// //       <main className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-8 space-y-8">
  
// //         <div className="w-full max-w-3xl mx-auto text-center transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
// //           <iframe
// //             className="rounded-lg w-full h-72 sm:h-80 md:h-96 shadow-xl transform transition-all duration-500 hover:scale-105"
// //             src="https://www.youtube.com/embed?listType=playlist&list=YOUR_PLAYLIST_ID"
// //             title="YouTube playlist"
// //             frameBorder="0"
// //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// //             allowFullScreen
// //           ></iframe>
// //         </div>

// //         <button
// //           className="mt-6 px-6 py-3 text-lg text-white bg-[#ff6f61] rounded-lg transition-all duration-300 hover:bg-[#e55e53] transform transition-transform duration-300 hover:scale-105 hover:shadow-xl focus:outline-none"
// //           onClick={() =>
// //             window.open("https://www.youtube.com/playlist?list=YOUR_PLAYLIST_ID", "_blank")
// //           }
// //         >
// //           Watch Full Playlist
// //         </button>
// //       </main> */}

// // {/* 
// // <main className="container mx-auto px-4 py-12">
// //         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
// //           {youtubeChannels.map((channel) => (
// //             <div key={channel.name} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
// //               <div className="h-48 overflow-hidden">
// //                 <img 
// //                   src={channel.image} 
// //                   alt={channel.name}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
// //               <div className="p-6">
// //                 <div className="flex items-center gap-2 mb-3">
// //                   <Youtube className="w-6 h-6 text-red-500" />
// //                   <h2 className="text-xl font-semibold">{channel.name}</h2>
// //                 </div>
// //                 <p className="text-gray-400 mb-4">{channel.description}</p>
// //                 <a
// //                   href={channel.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
// //                 >
// //                   Visit Channel
// //                   <ExternalLink className="w-4 h-4" />
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </main> */}


// // <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-300 text-white">

// //       <header className="container mx-auto px-4 py-16 text-center">
// //         <div className="flex justify-center mb-6">
// //           <GraduationCap className="w-16 h-16 text-yellow-400" />
// //         </div>
// //         <h1 className="text-5xl font-bold mb-4">Virtual YouTube University</h1>
// //         <p className="text-xl text-gray-300 max-w-2xl mx-auto">
// //           Access curated knowledge from the world's best educators and thought leaders, all in one place.
// //         </p>
// //       </header>

// //       <main className="container mx-auto px-4 py-12">
// //         <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
// //           {youtubeChannels.map((channel) => (
// //             <div key={channel.name} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
// //               <div className="h-48 overflow-hidden">
// //                 <img 
// //                   src={channel.image} 
// //                   alt={channel.name}
// //                   className="w-full h-full object-cover"
// //                 />
// //               </div>
// //               <div className="p-6">
// //                 <div className="flex items-center gap-2 mb-3">
// //                   <Youtube className="w-6 h-6 text-red-500" />
// //                   <h2 className="text-xl font-semibold">{channel.name}</h2>
// //                 </div>
// //                 <p className="text-gray-400 mb-4">{channel.description}</p>
// //                 <a
// //                   href={channel.url}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
// //                 >
// //                   Visit Channel
// //                   <ExternalLink className="w-4 h-4" />
// //                 </a>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </main>
// //     </div>
// //     </>
// //   );
// // };

// // export default Main;



// import React from "react";
// import { GraduationCap, Youtube, ExternalLink } from 'lucide-react';

// const youtubeChannels = [
//   {
//     name: "Nikhil Kamath",
//     url: "https://www.youtube.com/@nikhil.kamath",
//     description: "Insights from one of India's youngest billionaires on finance, markets, and entrepreneurship.",
//     image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000"
//   },
//   {
//     name: "Sparx by Mukesh Bansal",
//     url: "https://www.youtube.com/@sparxbymukeshbansal",
//     description: "Expert guidance on personal development, business strategies, and success principles.",
//     image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1000"
//   },
//   {
//     name: "Apna College",
//     url: "https://youtube.com/@apnacollegeofficial?si=6iYLRqmrpWMzDZeE",
//     description: "Comprehensive tutorials and playlists on coding, career advice, and technical skills.",
//     image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000"
//   }
// ];

// const Main = () => {
//   return (
//     <>
//       <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-300 text-white">

//         <header className="container mx-auto px-4 py-16 text-center">
//           <div className="flex justify-center mb-6">
//             <GraduationCap className="w-16 h-16 text-yellow-400" />
//           </div>
//           <h1 className="text-5xl font-bold mb-4">Virtual YouTube University</h1>
//           <p className="text-xl text-gray-300 max-w-2xl mx-auto">
//             Access curated knowledge from the world's best educators and thought leaders, all in one place.
//           </p>
//         </header>

//         <main className="container mx-auto px-4 py-12">
//           <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
//             {youtubeChannels.map((channel) => (
//               <div key={channel.name} className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105">
//                 <div className="h-48 overflow-hidden">
//                   <img 
//                     src={channel.image} 
//                     alt={channel.name}
//                     className="w-full h-full object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center gap-2 mb-3">
//                     <Youtube className="w-6 h-6 text-red-500" />
//                     <h2 className="text-xl font-semibold">{channel.name}</h2>
//                   </div>
//                   <p className="text-gray-400 mb-4">{channel.description}</p>
//                   <a
//                     href={channel.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
//                   >
//                     Visit Channel
//                     <ExternalLink className="w-4 h-4" />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </main>
//       </div>
//     </>
//   );
// };

// export default Main;





import React from "react";
import { GraduationCap, Youtube, ExternalLink } from "lucide-react";

const youtubeChannels = [
  {
    name: "Nikhil Kamath",
    url: "https://www.youtube.com/@nikhil.kamath",
    description:
      "Insights from one of India's youngest billionaires on finance, markets, and entrepreneurship.",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Sparx by Mukesh Bansal",
    url: "https://www.youtube.com/@sparxbymukeshbansal",
    description:
      "Expert guidance on personal development, business strategies, and success principles.",
    image:
      "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    name: "Apna College",
    url: "https://youtube.com/@apnacollegeofficial?si=6iYLRqmrpWMzDZeE",
    description:
      "Comprehensive tutorials and playlists on coding, career advice, and technical skills.",
    image:
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1000",
  },
];

const Main = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-300 text-white">
        <header className="container mx-auto px-4 py-16 text-center">
          <div className="flex justify-center mb-6">
            <GraduationCap className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-5xl font-bold mb-4">Virtual YouTube University</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Access curated knowledge from the world's best educators and thought
            leaders, all in one place.
          </p>
        </header>

        <main className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {youtubeChannels.map((channel, index) => (
              <div
                key={channel.name}
                className={`bg-gray-800 rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105 ${
                  index === 2 ? "md:col-span-2 lg:col-span-1 mx-auto" : ""
                }`}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={channel.image}
                    alt={channel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Youtube className="w-6 h-6 text-red-500" />
                    <h2 className="text-xl font-semibold">{channel.name}</h2>
                  </div>
                  <p className="text-gray-400 mb-4">{channel.description}</p>
                  <a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Visit Channel
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
};

export default Main;
