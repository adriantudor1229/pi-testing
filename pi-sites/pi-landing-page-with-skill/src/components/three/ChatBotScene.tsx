import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import type { Mesh } from 'three';

function ChatBotBody() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={2}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#a51d2d"
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
        />
      </mesh>
      {/* "Eyes" */}
      <mesh position={[-0.3, 0.2, 0.9]} scale={0.15}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#dae2fd" emissive="#dae2fd" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.3, 0.2, 0.9]} scale={0.15}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#dae2fd" emissive="#dae2fd" emissiveIntensity={0.5} />
      </mesh>
      {/* Glow ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} scale={1.5}>
        <torusGeometry args={[1, 0.02, 16, 100]} />
        <meshStandardMaterial color="#a51d2d" emissive="#a51d2d" emissiveIntensity={2} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
}

function ChatBotScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <pointLight position={[-5, -5, 5]} intensity={0.5} color="#a51d2d" />
        <pointLight position={[5, -5, -5]} intensity={0.3} color="#1a5fb4" />
        <ChatBotBody />
      </Canvas>
    </div>
  );
}

export { ChatBotScene };
