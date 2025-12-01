"use client";
import { useEffect, useRef } from "react";

export default function useInViewAnimation() {
  const ref = useRef(null); // ❌ Plus de type HTMLDivElement

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.querySelectorAll('.animate-slideInFromBottom').forEach((child) => {
            child.classList.remove('animate-slideInFromBottom');
            void child.offsetWidth; // force reflow
            child.classList.add('animate-slideInFromBottom');
          });
        }
      },
      { root: null, rootMargin: "0px 0px -100px 0px", threshold: 0.1 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return ref; // ✅ objet ref valide pour React
}
