import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'

const Home: NextPage = () => {
  return (
    <>
      <h1 className='text-4xl text-green-600'>Hello 🌎</h1>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight color='cyan' position={[50, 50, 25]} />
        <mesh>
          <sphereGeometry />
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </>
  )
}

export default Home
