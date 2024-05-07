import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import XrHitBox from "./XrHitBox";

const XrCubeContainer = () => {
  return (
    <>
      <ARButton
        sessionInit={{
          requiredFeatures: ["hit-test"],
        }}
      />
      <Canvas>
        <XR>
          <XrHitBox />
        </XR>
      </Canvas>
    </>
  );
};

export default XrCubeContainer;
