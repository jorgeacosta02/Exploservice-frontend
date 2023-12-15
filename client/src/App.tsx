import NavBar from "./components/NavBar/NavBar";
import Section from "./components/Section/Section";

function App() {
  
  return (
    <>
      <NavBar />
      <Section
        title={'Title from App'}
       
      >Otro entre etiquetas</Section>
    </>
  )
}

export default App
