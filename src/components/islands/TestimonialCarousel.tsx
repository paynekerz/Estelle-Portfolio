import { useState, useEffect } from 'react';
import type { TestimonialSlide } from '../../data/site';

interface Props {
  slides: TestimonialSlide[];
}

export default function TestimonialCarousel({ slides }: Props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((s) => (s + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  return (
    <div>
      <div className="carousel-viewport">
        <div
          className="carousel-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, i) => (
            <div key={i} className="carousel-slide">
              <blockquote className="t-quote">
                <span className="t-open-quote" aria-hidden="true">&ldquo;</span>
                {slide.quote}
                <span className="t-close-quote" aria-hidden="true">&rdquo;</span>
              </blockquote>
              <figcaption className="t-attr">
                <span className="t-role">{slide.role}</span>
                <span className="t-name">{slide.name}</span>
              </figcaption>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Testimonial slides">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Slide ${i + 1}`}
            className={`carousel-dot${i === current ? ' carousel-dot--active' : ''}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>

      <style>{`
        .carousel-viewport {
          overflow: hidden;
          max-width: 900px;
        }
        .carousel-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0, 0, 0.2, 1);
        }
        .carousel-slide {
          min-width: 100%;
          padding-right: 2rem;
        }
        .t-quote {
          font-family: var(--font-display);
          font-size: var(--text-t-quote);
          font-style: italic;
          color: var(--color-white);
          line-height: 1.55;
          margin: 0 0 2rem;
        }
        .t-open-quote,
        .t-close-quote {
          color: var(--color-amber-light);
          font-size: 1.3em;
          font-style: normal;
          line-height: 0;
          vertical-align: -0.3em;
        }
        .t-open-quote { margin-right: 0.05em; }
        .t-close-quote { margin-left: 0.05em; }
        .t-attr {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }
        .t-role {
          font-size: 0.8rem;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.45);
          display: block;
        }
        .t-name {
          font-size: 0.8rem;
          font-weight: 500;
          color: var(--color-amber-light);
          letter-spacing: 0.04em;
          display: block;
        }
        .carousel-dots {
          display: flex;
          gap: 0.5rem;
          margin-top: 3rem;
        }
        .carousel-dot {
          width: 28px;
          height: 2px;
          border: none;
          background: rgba(255, 255, 255, 0.2);
          cursor: pointer;
          padding: 0;
          transition: background 0.25s;
        }
        .carousel-dot:hover {
          background: var(--color-amber-light);
        }
        .carousel-dot--active {
          background: var(--color-amber-light);
        }
      `}</style>
    </div>
  );
}
