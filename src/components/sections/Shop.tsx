import { useEffect, useRef } from "react";

export default function RedbubbleShop() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const loader = document.createElement("script");
    loader.src = "https://www.redbubble.com/assets/external_portfolio.js";
    loader.async = true;

    loader.onload = () => {
      // create a script inside the container div
      const rbScript = document.createElement("script");
      rbScript.type = "text/javascript";
      rbScript.innerHTML = `
        new RBExternalPortfolio('www.redbubble.com', 'mayeeverse', 3, 4).renderIframe();
      `;
      containerRef.current!.appendChild(rbScript);
    };

    containerRef.current.appendChild(loader);

    return () => {
      // cleanup
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <section
  id="shop"
  style={{
    minHeight: "50vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "4rem 2rem",
  }}
>
  <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
    🛍️ My Redbubble Store
  </h2>
  <p style={{ fontSize: "1.2rem", maxWidth: "600px" }}>
    Don’t like my portfolio? That’s okay 😅 — you can always check out my store for more of my work!{" "}
    <a
      href="https://www.redbubble.com/people/mayeeverse/shop?asc=u"
      target="_blank"
      rel="noopener noreferrer"
      style={{ fontWeight: "bold", textDecoration: "none" }}
    >
      Visit my store →
    </a>
  </p>
</section>

  );
}
