import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest } from "@react-three/xr";
import { useRef, useState } from "react";
import XrCube from "./XrCube";

const XrHitBox = () => {
  const reticleRef = useRef();
  const [cubes, setCubes] = useState([]);

  useHitTest((hitMatrix) => {
    // use hitMatrix to position any object on the real life surface
    hitMatrix.decompose(
      reticleRef.current.position,
      reticleRef.current.quaternion,
      reticleRef.current.scale
    );

    reticleRef.current.rotation.set(Math.PI / 2, 0, 0);
  });

  const placeCube = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setCubes([...cubes, { position, id }]);
  };

  return (
    <>
      <ambientLight />
      <OrbitControls />
      {cubes.map((cube) => (
        <XrCube key={cube.id} />
      ))}
      <Interactive onSelect={placeCube}>
        <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
          <ringGeometry args={[0.1, 0.25, 32]} />
          <meshStandardMaterial color="white" />
        </mesh>
      </Interactive>
    </>
  );
};

export default XrHitBox;
