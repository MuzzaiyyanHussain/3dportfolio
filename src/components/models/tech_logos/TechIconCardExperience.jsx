import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const TechIconCardExperience = ({ model }) => {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer") {
      scene.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [scene, model.name]);

  return (
    <Canvas
      dpr={Math.min(window.devicePixelRatio, 2)} // limit resolution for performance
      frameloop="demand" // render only when scene changes
      shadows={false} // disable shadows to improve performance
    >
      {/* Lights */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} />
      <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={1.5} />

      {/* Environment */}
      <Environment preset="city" />

      {/* Floating 3D model */}
      <Float speed={2.5} rotationIntensity={0.3} floatIntensity={0.6}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene} />
        </group>
      </Float>

      {/* Controls */}
      <OrbitControls enableZoom={false} enablePan={false} />
    </Canvas>
  );
};

export default TechIconCardExperience;
