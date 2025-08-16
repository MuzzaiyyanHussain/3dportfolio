import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { Suspense } from "react";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });

  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 45 }}
      dpr={Math.min(window.devicePixelRatio, 2)} // limit pixel ratio for performance
      frameloop="demand" // only re-render on interaction or scene changes
    >
      {/* Deep blue ambient light */}
      <ambientLight intensity={0.2} color="#1a1a40" />

      {/* OrbitControls configuration */}
      <OrbitControls
        enablePan={false} // Prevents panning
        enableZoom={!isTablet} // Disable zoom on tablets
        maxDistance={20} // Max zoom out
        minDistance={5} // Min zoom in
        minPolarAngle={Math.PI / 5} // Vertical rotation min
        maxPolarAngle={Math.PI / 2} // Vertical rotation max
      />

      {/* Suspense for lazy loading heavy components */}
      <Suspense fallback={null}>
        <HeroLights />
        <Particles count={100} />
        <group
          scale={isMobile ? 0.7 : 1} // Reduce scale on mobile
          position={[0, -3.5, 0]}
          rotation={[0, -Math.PI / 4, 0]}
        >
          <Room />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default HeroExperience;
