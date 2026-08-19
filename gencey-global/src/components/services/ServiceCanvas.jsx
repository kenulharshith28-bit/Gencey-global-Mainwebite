import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import {
  Bounds,
  Html,
  OrbitControls,
} from "@react-three/drei";

import ServiceModel from "./ServiceModel";

const ServiceCanvas = () => {
  return (
    <div
      className="
        relative
        h-[360px]
        w-full
        overflow-hidden
        bg-transparent
        sm:h-[460px]
        lg:h-[560px]
      "
    >
      <Canvas
        shadows
        camera={{
          position: [0, 0, 5],
          fov: 40,
        }}
      >
        <color
          attach="background"
          args={["#EDF4FA"]}
        />

        <ambientLight intensity={1.5} />

        <directionalLight
          position={[5, 6, 5]}
          intensity={3}
          color="#ffffff"
          castShadow
        />

        <directionalLight
          position={[-4, 2, 3]}
          intensity={1.4}
          color="#ffffff"
        />

        <Suspense fallback={<ModelFallback />}>
          <Bounds
            fit
            clip
            observe
            margin={1.35}
          >
            <ServiceModel />
          </Bounds>
        </Suspense>

        <OrbitControls
          makeDefault
          enableZoom
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  );
};

const ModelFallback = () => {
  return (
    <Html center>
      <div className="rounded-full border border-[#FF914D]/20 bg-white/80 px-4 py-2 text-sm font-semibold text-[#FF914D] shadow-sm backdrop-blur-xl">
        Loading 3D preview
      </div>
    </Html>
  );
};

export default ServiceCanvas;
