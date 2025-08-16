import * as THREE from "three";

const HeroLights = () => (
  <>
    {/* Main lamp's light */}
    <spotLight
      position={[2, 5, 6]}
      angle={0.15}
      penumbra={0.2}
      intensity={50} // reduced intensity for performance
      color="white"
      castShadow={false} // shadows are expensive
    />

    {/* Bluish overhead lamp */}
    <spotLight
      position={[4, 5, 4]}
      angle={0.3}
      penumbra={0.5}
      intensity={20} // reduced intensity
      color="#4cc9f0"
      castShadow={false}
    />

    {/* Purplish side fill */}
    <spotLight
      position={[-3, 5, 5]}
      angle={0.4}
      penumbra={1}
      intensity={30} // reduced intensity
      color="#9d4edd"
      castShadow={false}
    />

    {/* Area light for soft moody fill */}
    <primitive
      object={new THREE.RectAreaLight("#a259ff", 5, 3, 2)} // lower intensity
      position={[1, 3, 4]}
      rotation={[-Math.PI / 4, Math.PI / 4, 0]}
    />

    {/* Subtle point lights */}
    <pointLight position={[0, 1, 0]} intensity={5} color="#7209b7" />
    <pointLight position={[1, 2, -2]} intensity={5} color="#0d00a4" />
  </>
);

export default HeroLights;
