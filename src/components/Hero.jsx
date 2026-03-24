import "./Hero.css";
import { useEffect, useState } from "react";

function Hero() {
  const images = [
    "https://www.mode-and-deco.com/wp-content/uploads/2025/07/Coupe-de-cheveux-femme-de-70-ans-avec-lunettes-les-tendances-de-2025.jpg.webp",
    "https://www.masculin.com/wp-content/uploads/sites/2/article/13188/femmes-lunettes-seduction.jpg",
    "https://www.noo-family.fr/wp-content/uploads/2025/09/5442e47e-3c4d-43c4-97eb-f17efe499948.png",
    "https://img.freepik.com/photos-gratuite/jolie-charmante-dame-se-tient-cote_273609-28741.jpg?semt=ais_hybrid&w=740&q=80",
    "https://img.freepik.com/photos-gratuite/mode-portrait-femme-race-mixte-peau-brune-coiffure-africaine-bouclee-fond-rose-vif-portant-veste-hiver-argentee-chapeau-gris_273443-123.jpg?semt=ais_wordcount_boost&w=740&q=80"
  ];

  const slides = [...images, images[0]];

  const [index, setIndex] = useState(0);
  const [transition, setTransition] = useState(true);

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === images.length) {
      setTimeout(() => {
        setTransition(false);
        setIndex(0);
      }, 900);

      setTimeout(() => {
        setTransition(true);
      }, 950);
    }
  }, [index, images.length]);

  return (
    <section className="hero">
      <div
        className="hero-slider"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? "transform 0.9s ease" : "none"
        }}
      >
        {slides.map((img, i) => (
          <div
            key={i}
            className={`hero-slide ${i === index ? "active" : ""}`}
          >
            <div
              className="hero-bg"
              style={{ backgroundImage: `url(${img})` }}
            />
          </div>
        ))}
      </div>

      <div className="hero-content">
        <h1>
          Trouvez les <span>paires parfaites</span> pour vous
        </h1>
        <p>Stylées, confortables et tendance au quotidien.</p>
        <button>Voir nos paires</button>
      </div>
    </section>
  );
}

export default Hero;