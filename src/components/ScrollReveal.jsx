import { useEffect } from "react";

const ScrollReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      {
        threshold: 0.15,          // triggers earlier
        rootMargin: "0px 0px -10% 0px"  // smoother entry timing
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollReveal;
