// import React, { useState } from "react";

// export default function Contact() {
//   const [result, setResult] = useState("");
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true); // Show loading state
//     setResult("Sending...");

//     const formData = new FormData(event.target);

//     // Make sure to replace this with your actual access key
//     formData.append("access_key", "ef7d6db9-5581-4525-b98a-ca42fb0056f4");

//     try {
//       const response = await fetch("https://api.web3forms.com/submit", {
//         method: "POST",
//         body: formData
//       });

//       const data = await response.json();

//       if (data.success) {
//         setResult("Form Submitted Successfully!");
//         event.target.reset(); // Reset the form fields after success
//       } else {
//         setResult(data.message || "Something went wrong, please try again.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       setResult("An error occurred. Please try again later.");
//     } finally {
//       setLoading(false); // Hide loading state
//     }
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
//       <div className="w-full max-w-3xl space-y-8 bg-white p-6 shadow-xl rounded-lg">
//         <h2 className="text-3xl font-semibold text-center text-gray-900 mb-6">Contact Us</h2>

//         <form onSubmit={onSubmit} className="space-y-6">
//           <div>
//             <label htmlFor="name" className="block text-gray-700">Name</label>
//             <input
//               type="text"
//               name="name"
//               id="name"
//               required
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="email" className="block text-gray-700">Email</label>
//             <input
//               type="email"
//               name="email"
//               id="email"
//               required
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>

//           <div>
//             <label htmlFor="message" className="block text-gray-700">Message</label>
//             <textarea
//               name="message"
//               id="message"
//               required
//               rows="4"
//               className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
//             ></textarea>
//           </div>

//           <button
//             type="submit"
//             className={`w-full py-2 text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 rounded-lg shadow-md transition duration-300 transform hover:scale-105 ${
//               loading ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             disabled={loading}
//           >
//             {loading ? "Sending..." : "Submit Form"}
//           </button>
//         </form>

//         {/* Result Message */}
//         {result && (
//           <div className="mt-6 text-center text-lg">
//             <span className={`text-${result.includes("Successfully") ? "green" : "red"}-600`}>
//               {result}
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }





import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true); 
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "f4a1814b-741b-4320-996e-6cc50d711831");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset(); 
      } else {
        setResult(data.message || "Something went wrong, please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setResult("An error occurred. Please try again later.");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-800 to-gray-300 text-white p-6">
      <div className="w-full max-w-3xl space-y-8 bg-gray-300 p-8 rounded-xl shadow-2xl transform transition-all duration-500 hover:scale-105">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg text-gray-700 mb-2">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-5 py-3 text-black  border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-lg text-gray-700 mb-2">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-5 py-3 text-black  border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-lg text-gray-700 mb-2">Message</label>
            <textarea
              name="message"
              id="message"
              required
              rows="5"
              className="w-full px-5 py-3 border text-black border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full py-3 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-md transition duration-300 transform hover:scale-105 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Submit Form"}
          </button>
        </form>

        {/* Result Message */}
        {result && (
          <div className="mt-6 text-center text-lg">
            <span className={`font-semibold text-${result.includes("Successfully") ? "green" : "red"}-600`}>
              {result}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
