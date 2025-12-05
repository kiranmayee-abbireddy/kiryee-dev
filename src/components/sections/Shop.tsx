import React from "react";

const RedbubbleShop: React.FC = () => {
  return (
    <section
      id="shop"
      className="min-h-screen flex flex-col items-center justify-center bg-neutral-900 text-white py-20"
    >
      <h2 className="text-3xl font-bold mb-10">🛍️ My Redbubble Store</h2>
      <iframe
        title="My Redbubble Shop"
        src="https://www.redbubble.com/people/mayeeverse/shop?asc=u"
        style={{
          width: "100%",
          height: "1200px",
          border: "none",
          borderRadius: "1rem",
        }}
        loading="lazy"
      />

    </section>
  );
};

export default RedbubbleShop;
