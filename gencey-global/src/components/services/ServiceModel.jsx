import { useGLTF } from "@react-three/drei";

const ServiceModel = () => {
  const { scene } = useGLTF("/models/service-model.glb");

  return (
    <primitive
      object={scene}
      scale={1.8}
      position={[0, 0, 0]}
      rotation={[0, 0, 0]}
    />
  );
};

useGLTF.preload("/models/service-model.glb");

export default ServiceModel;
