import React, { useRef, useState, useEffect, forwardRef } from 'react';
import { Canvas, MeshProps, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

interface BoxProps extends MeshProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Box = forwardRef<Mesh, BoxProps>(({ active, setActive, ...props }, ref) => {
  const meshRef = useRef<Mesh>(null);

  const [hovered, setHover] = useState(false);

  useFrame((_, delta) => {
    if (active && meshRef.current) {
      meshRef.current.rotation.x += delta;
      meshRef.current.rotation.y += delta;
    }
  });

  return (
    <mesh
      {...props}
      ref={ref || meshRef}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  );
});

function Background() {
  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollY = window.scrollY;

      // Calculate the rotation angle based on the scroll position
      const rotationAngle = (scrollY / window.innerHeight) * Math.PI * 2;

      // Only apply the scrolling-based rotation when the cube is not active (manually rotated)
      if (box1Ref.current && !box1Active) {
        box1Ref.current.rotation.x = rotationAngle;
      }
      if (box2Ref.current && !box2Active) {
        box2Ref.current.rotation.y = rotationAngle;
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [box1Active, setBox1Active] = useState(false);
  const [box2Active, setBox2Active] = useState(false);

  const box1Ref = useRef<Mesh>(null);
  const box2Ref = useRef<Mesh>(null);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} ref={box1Ref} active={box1Active} setActive={setBox1Active} />
        <Box position={[1.2, 0, 0]} ref={box2Ref} active={box2Active} setActive={setBox2Active} />
      </Canvas>
    </div>
  );
}

export default Background;
