import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export type Partner = {
  id: string | number;
  name: string;
  logo: string;
  url?: string;
};

type Props = {
  partners: Partner[];
  slidesToShow?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
};

const PartnersCarousel: React.FC<Props> = ({
  partners,
  slidesToShow = 5,
  autoplay = true,
  autoplayInterval = 3500,
}) => {
  const [index, setIndex] = useState(0);
  const total = partners.length;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  const getVisible = () => {
    if (typeof window === "undefined") return slidesToShow;
    const w = window.innerWidth;
    if (w < 640) return 2;
    if (w < 1024) return Math.max(3, Math.min(5, slidesToShow));
    return slidesToShow;
  };

  const [visible, setVisible] = useState(getVisible());

  useEffect(() => {
    const onResize = () => setVisible(getVisible());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  useEffect(() => {
    if (!autoplay || total <= visible) return;
    intervalRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, autoplayInterval);
    return () => {
      if (intervalRef.current) window.clearInterval(intervalRef.current);
    };
  }, [autoplay, autoplayInterval, total, visible]);

  const translatePercent = (index / total) * 100;

  useEffect(() => {
    if (index >= total) setIndex(0);
  }, [total, index]);

  return (
    <section aria-label="Partners carousel" className="p-6 rounded-2xl">
      <div className="flex items-center justify-between mb-4">
        <p className="text-xl text-slate-300">Our Partners</p>
        <div className="flex gap-2">
          <button onClick={prev} className="p-2 rounded-md bg-gray-200/20 hover:bg-gray-200/40">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} className="p-2 rounded-md bg-gray-200/20 hover:bg-gray-200/40">
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="overflow-hidden" ref={containerRef}>
        <div
          className="flex transition-transform duration-500 ease-in-out items-center"
          style={{ transform: `translateX(-${(index * 100) / visible}%)` }}
        >
          {partners.map((p, idx) => (
            <div
              key={p.id}
              className="flex-shrink-0 flex items-center justify-center p-4"
              style={{ flex: `0 0 calc(100% / ${visible})`, borderRight: idx !== partners.length - 1 ? "1px solid rgba(255,255,255,0.2)" : "none" }}
            >
              <a
                href={p.url ?? "#"}
                target="_blank"
                rel="noreferrer"
                className="block h-28 items-center justify-center"
              >
                <img
                  src={p.logo}
                  alt={p.name}
                  className="max-h-16 object-contain mx-auto"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='80'%3E%3Crect width='100%25' height='100%25' fill='%23e2e8f0'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%239ca3af' font-family='Arial' font-size='14'%3Elogo%20missing%3C/text%3E%3C/svg%3E";
                  }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-4 justify-center">
        {Array.from({ length: Math.ceil(total / visible) }).map((_, i) => (
          <button
            key={i}
            className={`w-8 h-2 rounded-full ${Math.floor(index / visible) === i ? "bg-white" : "bg-white/20"}`}
            onClick={() => setIndex(i * visible)}
          />
        ))}
      </div>
    </section>
  );
};

export default PartnersCarousel;
