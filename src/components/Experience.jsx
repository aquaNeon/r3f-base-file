import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshTransmissionMaterial, useTexture } from '@react-three/drei';

const RotatingTorusKnot = () => {
  const ref = useRef();
  const texture = useTexture('src/assets/4.jpg');

  useFrame(() => {
    if (ref.current) {
        // rotate torus 
        ref.current.rotation.y += 0.01;
    }
  });

  return (
    <>
      <mesh ref={ref} position={[0, 0, 0.5]} scale={0.5}>
        <torusKnotGeometry args={[2.1, 1, 256, 256]} />
        <MeshTransmissionMaterial 
          thickness={1.5}
          backsideThickness={1}
          chromaticAberration={0.2}
          backside={true}
        />
      </mesh>
      <mesh position={[0, 0, -4]}>
        <planeGeometry args={[16, 16, 16]} />
        <meshStandardMaterial map={texture} />
      </mesh>
    </>
  );
};

const Experience = () => {
  return (
    <>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <RotatingTorusKnot />
    </>
  );
};

export default Experience;
