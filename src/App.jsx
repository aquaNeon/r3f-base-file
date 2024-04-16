import { Canvas } from '@react-three/fiber';
import Experience from './components/Experience';
import { OrbitControls } from '@react-three/drei';
import './index.css'

function App() {

  return (
      <div className="App">
        <Canvas>
          <Experience />
          <OrbitControls />
        </Canvas>
      </div>
  )
}

export default App;
