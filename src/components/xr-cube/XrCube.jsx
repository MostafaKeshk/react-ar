/* eslint-disable react/prop-types */
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const XrCube = (props) => {
  const cubeRef = useRef();
  useFrame((state, delta) => {
    cubeRef.current.rotation.y += delta;
  });

  return (
    <>
      <mesh ref={cubeRef} position={props.position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>
    </>
  );
};

export default XrCube;
