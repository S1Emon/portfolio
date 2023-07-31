import Image from "next/image";
import React from "react";
import HeroImage from "../../images/hero.webp";

const HeroRight = () => {
  return (
    <div className="hero-image">
      <Image
        src={HeroImage}
        alt="Hero"
        width={400}
        height={400}
        loading="lazy"
      />
    </div>
  );
};

export default HeroRight;
