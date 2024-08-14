import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "./components/Experience";
import { UI } from "./components/UI";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

function App() {
  // Load the avatar model
  const avatar = useLoader(GLTFLoader, "/avatar/avatar-custom.glb");

  return (
    <>
      <UI />
      <Loader />
      <Canvas shadows camera={{ position: [-0.5, 1, 4], fov: 45 }}>
        <group position-y={0}>
          <Suspense fallback={null}>
            <Experience />
            {/* Avatar positioned separately so it does not rotate with the book */}
          </Suspense>
        </group>
            <primitive
              object={avatar.scene}
              position={[2, 0, 0]} // Adjust the position as needed
              scale={[0.5, 0.5, 0.5]} // Adjust the scale as needed
            />
      </Canvas>
    </>
  );
}

export default App;
