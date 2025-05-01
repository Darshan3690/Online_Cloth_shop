

// import React from "react";
// import allproduct from "./LAp.json";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";


// export default function Home({ cart, setCart }) {
//   const navigate = useNavigate();

//   const addToCart = (index) => {
//     const selectedProduct = { ...allproduct[index] }; 
  
//     const existingItem = cart.find((item) => item.id === selectedProduct.id);
  
//     if (existingItem) {
//       // Update count if already in cart
//       const updatedCart = cart.map((item) =>
//         item.id === selectedProduct.id
//           ? { ...item, count: item.count + 1 }
//           : item
//       );
//       setCart(updatedCart);
//       alert(`Increased quantity for: ${selectedProduct.title}`);
//     } else {
//       // Add new product with count
//       selectedProduct.count = 1;
//       setCart([...cart, selectedProduct]);
//       alert(`Added to cart: ${selectedProduct.title}`);
//     }
  
//     navigate("/mycard");
//   };
  

//   return (
//     <div className="container mx-auto mt-4">
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {allproduct.map((product, index) => (
//           <div key={index} className="border p-4 rounded-lg shadow-md text-center">
//             <img
//               src={product.url}
//               className="h-36 w-36 mx-auto object-cover rounded-md"
//               alt={product.title}
//               onError={(e) => (e.target.style.display = "none")}
//             />
//             <h5 className="mt-2 text-lg font-semibold">{product.title}</h5>
//             <p className="font-bold text-gray-700">Rs. {product.price}/-</p>
//             <button
//               className="mt-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
//               onClick={() => addToCart(index)}
//             >
//               Add to Cart
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useRef } from "react";
import allproduct from "./LAp.json";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home({ cart, setCart }) {
    const navigate = useNavigate();
    const productGridRef = useRef(null);

    useEffect(() => {
        const productElements = productGridRef.current.children;

        gsap.fromTo(
            productElements,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: productGridRef.current,
                    start: "top center+=100",
                    toggleActions: "play none none reverse",
                },
            }
        );
    }, []);

    const addToCart = (index) => {
        const selectedProduct = { ...allproduct[index] };

        const existingItem = cart.find((item) => item.id === selectedProduct.id);

        if (existingItem) {
            const updatedCart = cart.map((item) =>
                item.id === selectedProduct.id
                    ? { ...item, count: item.count + 1 }
                    : item
            );
            setCart(updatedCart);
            alert(`Increased quantity for: ${selectedProduct.title}`);
        } else {
            selectedProduct.count = 1;
            setCart([...cart, selectedProduct]);
            alert(`Added to cart: ${selectedProduct.title}`);
        }

        navigate("/mycard");
    };

    return (
        <div className="container mx-auto mt-10 mb-10">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
                    Discover Our Exquisite Collection
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                    Handpicked for unparalleled style and quality.
                </p>
            </div>
            <div ref={productGridRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {allproduct.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className="relative h-64">
                            <img
                                src={product.url}
                                className="w-full h-full object-cover rounded-t-lg"
                                alt={product.title}
                                onError={(e) => (e.target.style.display = "none")}
                            />
                            <div className="absolute top-0 left-0 bg-black bg-opacity-40 text-white p-2 rounded-tl-lg">
                                <span className="text-sm font-semibold">New</span>
                            </div>
                        </div>
                        <div className="p-6 text-center">
                            <h5 className="mt-2 text-xl font-semibold text-gray-800 line-clamp-2">{product.title}</h5>
                            <p className="font-bold text-indigo-600 mt-2">Rs. {product.price}/-</p>
                            <button
                                className="mt-4 px-6 py-3 bg-indigo-500 text-white rounded-full hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 font-semibold transition-colors duration-300"
                                onClick={() => addToCart(index)}
                            >
                                Add to Bag
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

