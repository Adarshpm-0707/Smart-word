import { useRef, useEffect, useLayoutEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import "./GooeyNav.css";

const GooeyNav = ({
  items,
  activePath,
  isMobile = false,
  onItemClick,
  brandColor = "#2b9cb3"
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);

  const updateEffectPosition = useCallback(() => {
    if (!navRef.current || !filterRef.current || !containerRef.current) return;

    let index = items.findIndex((i) => i.path === activePath);
    
    // This logic ensures that if the current URL is a service page, 
    // the "Services" nav item stays highlighted.
    if (index === -1 && activePath !== "/") {
      index = items.findIndex((i) => i.name === "Services");
    }

    const navItems = navRef.current.querySelectorAll(".nav-li");
    const activeLi = navItems[index];

    if (activeLi) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const pos = activeLi.getBoundingClientRect();

      filterRef.current.style.opacity = "1";
      filterRef.current.style.width = `${pos.width}px`;
      filterRef.current.style.height = `${pos.height}px`;
      filterRef.current.style.transform = `translate3d(${
        pos.left - containerRect.left
      }px, ${pos.top - containerRect.top}px, 0)`;
    } else {
      filterRef.current.style.opacity = "0";
    }
  }, [activePath, items]);

  const makeParticles = () => {
    const element = filterRef.current;
    if (!element) return;

    for (let i = 0; i < 6; i++) {
      const particle = document.createElement("span");
      particle.className = "particle";
      
      const startX = (Math.random() - 0.5) * 30;
      const startY = (Math.random() - 0.5) * 30;

      particle.style.setProperty("--start-x", `${startX}px`);
      particle.style.setProperty("--start-y", `${startY}px`);
      particle.style.setProperty("--end-x", `${startX * 4}px`);
      particle.style.setProperty("--end-y", `${startY * 4}px`);
      particle.style.setProperty("--color", brandColor);

      const point = document.createElement("span");
      point.className = "point";
      particle.appendChild(point);
      element.appendChild(particle);

      setTimeout(() => {
        if (element.contains(particle)) element.removeChild(particle);
      }, 700);
    }
  };

  useLayoutEffect(() => {
    const timer = setTimeout(updateEffectPosition, 50);
    return () => clearTimeout(timer);
  }, [updateEffectPosition]);

  useEffect(() => {
    window.addEventListener("resize", updateEffectPosition);
    return () => window.removeEventListener("resize", updateEffectPosition);
  }, [updateEffectPosition]);

  return (
    <div
      ref={containerRef}
      className={`gooey-nav-container ${isMobile ? "is-mobile" : "is-desktop"}`}
    >
      <nav className="gooey-nav-wrapper">
        <ul ref={navRef} className={isMobile ? "flex-col" : "flex-row"}>
          {items.map((item, index) => {
            const isActive = item.path === activePath || 
                            (item.name === "Services" && activePath !== "/" && !items.find(i => i.path === activePath));

            return (
              <li key={index} className={`nav-li ${isActive ? "active" : ""}`}>
                {item.path ? (
                  <Link 
                    to={item.path} 
                    onClick={() => {
                      if (onItemClick) onItemClick();
                      makeParticles();
                    }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button
                    onClick={(e) => {
                      item.onClick(e);
                      makeParticles();
                    }}
                    className="nav-button flex items-center gap-2"
                  >
                    <span>{item.name}</span>
                    {item.icon}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="effect filter" ref={filterRef}></div>
    </div>
  );
};

export default GooeyNav;