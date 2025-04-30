import React from "react";
import { FaTrash } from "react-icons/fa";

const Mycard = ({ cartAllProduct, setCartAllProduct }) => {
  // --- INCREMENT ---
  const handleIncrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  // --- DECREMENT ---
  const handleDecrement = (id) => {
    setCartAllProduct((prevCart) =>
      prevCart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: item.count - 1 }
          : item
      )
    );
  };

  // --- REMOVE ITEM ---
  const handleDeleteItem = (id) => {
    const updatedCart = cartAllProduct.filter((item) => item.id !== id);
    setCartAllProduct(updatedCart);
  };

  // --- CALCULATE TOTAL ---
  const totalAmount = cartAllProduct.reduce(
    (total, item) => total + item.price * item.count,
    0
  );

  // --- RENDER ---
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* --- PRODUCT LIST --- */}
      <div className="md:col-span-2">
        <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

        {cartAllProduct.length === 0 ? (
          <div className="text-center text-gray-500 text-lg">
            No Products Available in Cart
          </div>
        ) : (
          <div className="space-y-4">
            {cartAllProduct.map((product) => (
              <div
                key={product.id}
                className="flex gap-4 border p-4 rounded-lg shadow-md relative items-center"
              >
                {/* --- IMAGE --- */}
                <img
                  src={product.img || product.url}
                  alt={product.model || product.title}
                  className="h-28 w-28 object-cover rounded-md"
                  onError={(e) => (e.target.style.display = "none")}
                />

                {/* --- DETAILS --- */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">
                    {(product.model || product.title)?.toUpperCase()}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Category: {product.category || "N/A"}
                  </p>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-gray-800 font-bold mt-1">
                    ₹ {product.price} x {product.count} = ₹{" "}
                    {product.price * product.count}
                  </p>

                  {/* --- QUANTITY CONTROLS --- */}
                  <div className="flex items-center gap-3 mt-2">
                    <button
                      onClick={() => handleDecrement(product.id)}
                      className="px-3 py-1 border rounded hover:bg-gray-200"
                    >
                      -
                    </button>
                    <span className="font-semibold">{product.count}</span>
                    <button
                      onClick={() => handleIncrement(product.id)}
                      className="px-3 py-1 border rounded hover:bg-gray-200"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* --- DELETE BUTTON --- */}
                <button
  onClick={() => handleDeleteItem(product.id)}
  className="text-red-500 hover:text-red-700 absolute top-2 right-2"
>
  <FaTrash />
</button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* --- PRICE SUMMARY / CHECKOUT --- */}
      <div className="border rounded-lg p-6 shadow-md h-fit">
        <h3 className="text-xl font-semibold mb-4">Price Details</h3>
        <div className="flex justify-between mb-2">
          <span>Total Items:</span>
          <span>{cartAllProduct.length}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Total Amount:</span>
          <span className="font-bold text-lg">₹ {totalAmount}</span>
        </div>
        <hr className="my-4" />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          onClick={() => alert("Redirecting to payment...")}
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Mycard;
