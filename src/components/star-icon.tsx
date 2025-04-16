"use client";

import React, { useState } from "react";

const StarIcon: React.FC = () => {
  const [isFilled, setIsFilled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleClick = () => {
    setIsFilled(!isFilled);
    setShowModal(true);

    // Start fade-out effect after 1 second
    setTimeout(() => {
      setIsFadingOut(true);
      setTimeout(() => {
        setShowModal(false);
        setIsFadingOut(false); // Reset fade-out state
      }, 500); // Match the fade-out duration
    }, 1000); // Modal stays visible for 1 second
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <svg
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={isFilled ? "red" : "none"}
        stroke="black"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        width="24"
        height="24"
        style={{ cursor: "pointer" }}
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
      {showModal && (
        <div
          className="bg-stone-300 font-semibold"
          style={{
            position: "absolute",
            top: "40px",
            left: "50%",
            transform: "translateX(-50%)",
            border: "1px solid black",
            borderRadius: "5px",
            width: "100px", // Adjusted width for better proportions
            height: "40px", // Adjusted height for better proportions
            padding: "6px",
            fontSize: "12px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            opacity: isFadingOut ? 0 : 1, // Modal box fade effect
            transition: "opacity 0.5s ease-in-out", // Modal box smooth transition
            display: "flex", // Flexbox for centering
            flexDirection: "column", // Stack content vertically
            alignItems: "center", // Vertically center content
            justifyContent: "center", // Horizontally center content
          }}
        >
          {isFilled ? (
            "Super Admin"
          ) : (
            <>
              <span className="font-bold italic block">Removed</span>
              <span>Super Admin</span>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default StarIcon;
