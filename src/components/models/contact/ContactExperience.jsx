import { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Computer from "./Computer";

const ContactExperience = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 3, 7], fov: 45 }}
      dpr={Math.min(window.devicePixelRatio, 2)}
      frameloop="demand" // render only when scene changes
    >
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.5} color="#fff4e6" />

      {/* Main directional light */}
      <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />

      {/* Shadow-casting directional light */}
      <directionalLight
        position={[5, 9, 1]}
        castShadow
        intensity={2.5}
        color="#ffd9b3"
        shadow-mapSize-width={1024} // lower resolution shadows for performance
        shadow-mapSize-height={1024}
      />

      {/* Orbit controls */}
      <OrbitControls
        enableZoom={false}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}
      />

      {/* Ground plane without shadows */}
      <mesh
        receiveShadow
        position={[0, -1.5, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#a46b2d" />
      </mesh>

      {/* 3D Model */}
      <Suspense fallback={null}>
        <group scale={0.03} position={[0, -1.49, -2]}>
          <Computer />
        </group>
      </Suspense>
    </Canvas>
  );
};

export default ContactExperience;
