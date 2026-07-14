import Particles from "react-tsparticles";

function ParticleBackground() {
  return (
    <Particles
      options={{
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 60,
          },
          color: {
            value: "#8b5cf6",
          },
          links: {
            enable: true,
            color: "#8b5cf6",
            distance: 150,
          },
          move: {
            enable: true,
            speed: 1,
          },
        },
      }}
    />
  );
}

export default ParticleBackground;