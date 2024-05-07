import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const CubeContainer = () => {
  return (
    <Canvas>
      <ambientLight />
      <OrbitControls />
      <Cube />
    </Canvas>
  );
};

export default CubeContainer;
