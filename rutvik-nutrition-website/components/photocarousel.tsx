"use client"

import Image from "next/image"

interface SpinCarouselProps {
  images: string[]
  speed?: number // seconds for 1 full loop
}

export default function SpinCarousel({ images, speed = 20 }: SpinCarouselProps) {
  // duplicate images so it loops seamlessly
  const duplicatedImages = [...images, ...images]

  return (
    <div className="overflow-hidden w-full bg-white py-6">
      <div
        className="flex gap-6 animate-scroll"
        style={{
          animationDuration: `${speed}s`, // control speed
        }}
      >
        {duplicatedImages.map((src, idx) => (
          <div key={idx} className="flex-shrink-0">
            <Image
              src={src}
              alt={`carousel-img-${idx}`}
              width={200}
              height={200}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          width: max-content;
          display: flex;
          animation: scroll linear infinite;
        }
      `}</style>
    </div>
  )
}
