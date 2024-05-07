import { OrbitControls } from "@react-three/drei";
import { Interactive, useHitTest, useXR } from "@react-three/xr";
import { useRef, useState } from "react";
import XrCube from "./XrCube";
import { useThree } from "@react-three/fiber";

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

    reticleRef.current.rotation.set(-Math.PI / 2, 0, 0);
  });

  const placeCube = (e) => {
    let position = e.intersection.object.position.clone();
    let id = Date.now();
    setCubes([...cubes, { position, id }]);
  };
  const { isPresenting } = useXR();

  useThree(({ camera }) => {
    if (!isPresenting) {
      camera.position.z = 3;
    }
  });

  return (
    <>
      <ambientLight />
      <OrbitControls />
      {isPresenting && cubes.map((cube) => <XrCube key={cube.id} />)}
      {isPresenting && (
        <Interactive onSelect={placeCube}>
          <mesh ref={reticleRef} rotation-x={-Math.PI / 2}>
            <ringGeometry args={[0.1, 0.25, 32]} />
            <meshStandardMaterial color="white" />
          </mesh>
        </Interactive>
      )}
    </>
  );
};

export default XrHitBox;
