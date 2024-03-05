import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage/landingPage';
import CompanyPage from './pages/companyPage/companyPage';
import ServicesPage from './pages/servicesPage/servicesPage';
import EquipmentPage from './pages/equipmentPage/equipmentPage';
import JobsPage from './pages/jobsPage/jobsPage';
import ContactPage from './pages/contactPage/contactPage';
import UserRegisterPage from './pages/userRegisterPage/UserRegisterPage';
import IntranetPage from './pages/intranetPage/IntranetPage';
import InvMovFormPage from './pages/invMovFormPage/InvMovFormPage';
import ArticleUpFormPage from './pages/articleUpFormPage/ArticleUpFormPage';
import LocationUpPage from './pages/locationUpPage/LocationUpPage';



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
        <Route path='/location-up-form' element={<LocationUpPage/>} />
        <Route path='/article-up-form' element={<ArticleUpFormPage/>} />
        <Route path='/inventory-movement' element={<InvMovFormPage/>} />
        <Route path='/intranet' element={<IntranetPage/>} />
        <Route path='/register' element={<UserRegisterPage/>} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/equipment" element={<EquipmentPage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="/contact" element={<ContactPage />} />
  
      </Routes>
    </div>
  )
}

export default App
