"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

export const EmblaImage = ({ images, image }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide relative aspect-video">
          <Image alt="image1" src={image} fill className="object-cover" />
        </div>
        {images?.map((item, i) => (
          <div key={i} className="embla__slide relative aspect-video">
            <Image
              alt={`image${i+1}`}
              src={item?.image}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
