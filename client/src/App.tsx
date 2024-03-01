import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import CompanyPage from './pages/companyPage/companyPage';
import ServicesPage from './pages/servicesPage/servicesPage';
import EquipmentPage from './pages/equipmentPage/equipmentPage';
import JobsPage from './pages/jobsPage/jobsPage';
import ContactPage from './pages/contactPage/contactPage';
import EAHomePage from './ExploagroSrc/EAPages/EAHomePage/EAHomePage';
import EAProductPage from './ExploagroSrc/EAPages/EAProductPage/EAProductPage';
import EAContactPage from './ExploagroSrc/EAPages/EAContactPage/EAContactPage';
import WorkerRegisterPage from './pages/workerRegisterPage/WorkerRegisterPage';


const App = () => {
  return (
    <div>
      <Routes>

        {/*General Routes*/}
        <Route path="/" element={<LandingPage />} />

        {/*Register Routes*/}
        <Route path='/tasks' element={<h1>tasks</h1>}/>
        <Route path='/add-task' element={<h1>add-task</h1>}/>
        <Route path='/task/:id' element={<h1>task/:id</h1>}/>
        <Route path='/profile' element={<h1>profile</h1>}/>
  

        {/*Exploservice Routes*/}
        <Route path='/register-page' element={<WorkerRegisterPage/>}/>
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/contact" element={<ContactPage />} />
  
        {/*Exploagro Routes*/}
        <Route path="/exploagro/" element={<EAHomePage />} />
        <Route path="/exploagro/product" element={<EAProductPage />} />
        <Route path="/exploagro/contact" element={<EAContactPage />} />
      </Routes>
    </div>
  )
}

export default App
