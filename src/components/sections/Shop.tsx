import React from "react";

const RedbubbleShop: React.FC = () => {
  return (
    <section
      id="shop"
      className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white py-20"
    >
      <h2 className="text-3xl font-bold mb-10">🛍️ My Redbubble Store</h2>
      <iframe
        title="Redbubble Portfolio"
        src="https://www.redbubble.com/external_portfolio_iframe.js?site=www.redbubble.com&ref=mayeeverse&columns=3&rows=4"
        style={{
          border: "none",
          width: "90%",
          height: "1200px",
          maxWidth: "1000px",
          borderRadius: "1rem",
          overflow: "hidden",
        }}
        loading="lazy"
      />
    </section>
  );
};

export default RedbubbleShop;
