import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Cube = () => {
  const cubeRef = useRef();

  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <mesh ref={cubeRef}>
      <boxGeometry />
      <meshStandardMaterial color="purple" />
    </mesh>
  );
};

export default Cube;
