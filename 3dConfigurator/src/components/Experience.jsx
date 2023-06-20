import { Stage, PresentationControls } from "@react-three/drei";
import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import Scene from "./Scene";

const Experience = () => {

  return (
    <PresentationControls
      speed={1.5}
      global
      zoom={0.7}
      polar={[-0.1, Math.PI / 4]}
    >
      <Stage intensity={0.6} contactShadow={false}>
            <Scene />
      </Stage>

      {/* reflection plane */}

    </PresentationControls>
  );
};

export default Experience;
