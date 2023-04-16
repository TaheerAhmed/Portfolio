import React,{Suspense,useEffect,useState} from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, Stars, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = () => {
  const computer = useGLTF('../../../public/chess/scene.gltf')


  return (
    <mesh>
<hemisphereLight intensity={0.15} groundColor="#ffffff" />
<pointLight intensity={1}/>
<spotLight intensity={1} position={[0, 0, 0]} angle={0.2} penumbra={1} castShadow />
<primitive 
object={computer.scene}
scale={0.61}
position={[0,-135,-150]}
roation={[2,0,0]}
/>
    </mesh>
  )
}
const ChessCanvas=()=>{
  return (
    <Canvas  
    frameloop='demand'
    shadows
    // colorManagement
    camera={{ position: [0,-110,220], fov: 45}}
    scale={1}
    gl={{preserveDrawingBuffer: true}}
  >
    <Suspense >
        <OrbitControls enableZoom={false}
          // enablePan={false}
          enableRotate={true}
          maxPolarAngle={1.695}
          minPolarAngle={1.695}
        />
        <Computers />


    </Suspense>
<Preload all/>
  </Canvas>
  )
}
export default ChessCanvas