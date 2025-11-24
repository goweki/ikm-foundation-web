"use client";

import { useState, useRef, useEffect, RefObject } from "react";
import styles from "./Carousel.module.scss";

type SlideData = {
  id?: number;
  image: string;
  title?: string;
  subtitle?: string;
  description?: string;
};

type CarouselProps = {
  slides: SlideData[];
  isPageBackground?: boolean;
};

function useTilt(active: boolean, animationDuration = "150ms") {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!active || !ref.current) return;

    const el = ref.current;

    const unify = (e: any) => (e.changedTouches ? e.changedTouches[0] : e);

    const state = {
      rect: undefined as DOMRect | undefined,
      mouseX: 0,
      mouseY: 0,
    };

    const handleEnter = () => {
      el.style.transition = `transform ${animationDuration} ease-out`;
    };

    const handleMove = (e: any) => {
      e.preventDefault();
      if (!state.rect) state.rect = el.getBoundingClientRect();

      state.mouseX = unify(e).clientX;
      state.mouseY = unify(e).clientY;

      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px.toFixed(2));
      el.style.setProperty("--py", py.toFixed(2));
    };

    const handleEnd = () => {
      el.style.setProperty("--px", "0.5");
      el.style.setProperty("--py", "0.5");
      el.style.transition = `transform ${animationDuration} ease-in`;
    };

    el.addEventListener("mouseenter", handleEnter);
    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleEnd);
    el.addEventListener("touchstart", handleEnter);
    el.addEventListener("touchmove", handleMove);
    el.addEventListener("touchend", handleEnd);

    return () => {
      el.removeEventListener("mouseenter", handleEnter);
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleEnd);
      el.removeEventListener("touchstart", handleEnter);
      el.removeEventListener("touchmove", handleMove);
      el.removeEventListener("touchend", handleEnd);
    };
  }, [active, animationDuration]);

  return ref;
}

const Slide = ({
  image,
  title,
  subtitle,
  description,
  offset,
  isPageBackground,
}: SlideData & { offset: number; isPageBackground?: boolean }) => {
  const active = offset === 0;
  const ref = useTilt(active);

  return (
    <div
      ref={ref as RefObject<HTMLDivElement>}
      className={styles.slide}
      data-active={active || undefined}
      style={{
        // @ts-ignore
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      {isPageBackground && (
        <div
          className={styles.slideBackground}
          style={{ backgroundImage: `url('${image}')` }}
        />
      )}

      <div
        className={styles.slideContent}
        style={{ backgroundImage: `url('${image}')` }}
      >
        <div className={styles.slideContentInner}>
          {title && <h2 className={styles.slideTitle}>{title}</h2>}
          {subtitle && <h3 className={styles.slideSubtitle}>{subtitle}</h3>}
          {description && (
            <p className={styles.slideDescription}>{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Carousel({ slides, isPageBackground }: CarouselProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  const next = () => setSlideIndex((i) => (i + 1) % slides.length);
  const prev = () =>
    setSlideIndex((i) => (i === 0 ? slides.length - 1 : i - 1));

  return (
    <div className={styles.carouselWrapper}>
      <section className={styles.slidesWrapper}>
        <div className={styles.slides}>
          <button className={styles.prevSlideBtn} onClick={prev}>
            ‹
          </button>

          {[...slides, ...slides, ...slides].map((slide, i) => {
            const offset = slides.length + (slideIndex - i);
            return (
              <Slide
                key={i}
                offset={offset}
                isPageBackground={isPageBackground}
                {...slide}
              />
            );
          })}

          <button className={styles.nextSlideBtn} onClick={next}>
            ›
          </button>
        </div>
      </section>
    </div>
  );
}
