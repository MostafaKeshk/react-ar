import { OrbitControls } from "@react-three/drei";
import { useHitTest } from "@react-three/xr";
import { useRef } from "react";

const XrHitBox = () => {
  const reticleRef = useRef();

  useHitTest((hitMatrix) => {
    // use hitMatrix to position any object on the real life surface
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );
  });

  return (
    <>
      <ambientLight />
      <OrbitControls />
      <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
        <ringGeometry args={[0.1, 0.25, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </>
  );
};

export default XrHitBox;
