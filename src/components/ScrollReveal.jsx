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
        threshold: 0.01,
        rootMargin: "0px 0px 200px 0px",  // trigger 200px before section enters viewport
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
};

export default ScrollReveal;
