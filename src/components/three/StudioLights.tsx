import { Environment, Lightformer } from "@react-three/drei";

const StudioLights = ({ color = '#adb5bd'} ): string => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <Lightformer
          form="rect"
          intensity={color === '#adb5bd' ? 5 : 10 }
          position={[-10, 5, -5]}
          scale={10}
          rotation-y={Math.PI / 2}
        />
         <Lightformer
          form="rect"
          intensity={color === '#adb5bd' ? 10 : 15}
          position={[10, 0, 1]}
          scale={5}
          rotation-y={Math.PI / 2}
        />
      </Environment>
      <spotLight
        position={[-2, 10, 5]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
      />
      <spotLight
        position={[0, -25, 10]}
        angle={0.15}
        decay={0}
        intensity={Math.PI * 0.2}
      />
      <spotLight
        position={[0, 15, 5]}
        angle={0.15}
        decay={0.1}
        intensity={color === '#adb5bd' ? Math.PI * 0.8 : Math.PI * 2 }
      />
    </group>
  );
};

export default StudioLights;
