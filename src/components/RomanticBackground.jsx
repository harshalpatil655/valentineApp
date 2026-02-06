import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function RomanticBackground() {
  const init = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const isMobile = window.innerWidth < 768;

  return (
    <Particles
      init={init}
      className="romantic-particles"
      options={{
        fullScreen: { enable: false },
        particles: {
          number: {
            value: isMobile ? 15 : 35,
          },
          shape: {
            type: "image",
            image: {
              src: "/heart.png",
              width: 32,
              height: 32,
            },
          },
          opacity: { value: 0.8 },
          size: { value: 18, random: true },
          move: {
            enable: true,
            speed: 1,
            direction: "top",
            outModes: { default: "out" },
          },
        },
      }}
    />
  );
}
