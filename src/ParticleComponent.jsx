import React, { useEffect } from "react";

const ParticlesComponent = () => {
  useEffect(() => {
    const particleJson = {
      particles: {
        number: {
          value: 12,
          density: { enable: true, value_area: 640 },
        },
        color: { value: "#df048c" },
        shape: {
          type: "polygon",
          stroke: { width: 0, color: "#000" },
          polygon: { nb_sides: 6 },
        },
        opacity: {
          value: 0.25,
          random: true,
        },
        size: {
          value: 20,
          random: true,
          anim: { enable: true, speed: 10 },
        },
        move: {
          enable: true,
          speed: 4,
          direction: "none",
          random: false,
        },
      },
      retina_detect: true,
    };

    // Initialize particles.js
    if (window.particlesJS) {
      window.particlesJS("particles-js", particleJson);
    }
  }, []); // Empty dependency array ensures this runs once

  return <div id="particles-js" style={{ position: "fixed", width: "100%", height: "100%", zIndex: -1 }}></div>;
};

export default ParticlesComponent;
