import NavBar from "./components/NavBar/NavBar";
import Center from "./components/Center/Center";
import field from './assets/images/campo-04.jpg'

function App() {
  
  return (
    <div>
      <NavBar />
      <Center>
        {field}
      </Center>
      
    </div>
  )
}

export default App
