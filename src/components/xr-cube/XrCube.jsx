import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const XrCube = () => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <ambientLight />
      <OrbitControls />
      <mesh ref={cubeRef}>
        <boxGeometry />
        <meshStandardMaterial color="purple" />
      </mesh>
    </>
  );
};

export default XrCube;
