import React, { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stars, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Chess = ({ isMobile }) => {
  const computer = useGLTF('./chess/scene.gltf')

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight intensity={1} position={[0, 0, 0]} angle={0.2} penumbra={1} castShadow />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : 0.61}
        position={isMobile ? [0, -135, -130] : [0, -135, -150]}
        roation={[2, 0, 0]}
      />
    </mesh>
  )
}
const ChessCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <Canvas
      frameloop='demand'
      shadows
      // colorManagement
      camera={{ position: isMobile ? [0, -100, 210] : [0, -110, 220], fov: isMobile ? 75 : 45 }}
      scale={1}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false}
          // enablePan={false}
          autoRotate
          autoRotateSpeed={11.5}
          enableRotate={true}
          maxPolarAngle={1.695}
          minPolarAngle={1.695}
        />
        <Chess isMobile={isMobile} />


      </Suspense>
      <Preload all />
    </Canvas>
  )
}
export default ChessCanvas