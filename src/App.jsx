import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import { Environment, OrbitControls } from '@react-three/drei';
import './index.css'

function App() {

  return (
      <div className="App">
        <Canvas>
          <Experience />
          <OrbitControls />
          <Environment preset="city" environmentIntensity={1.8}/>
        </Canvas>
      </div>
  )
}

export default App;
