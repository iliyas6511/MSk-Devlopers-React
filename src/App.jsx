import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BannerNavbar from './Components/Sample'
import Navbar from './Components/Navbar'
import Banner from './Components/Banner'
import Searchbar from './Components/Searchbar'
import AreaProperty from './Components/AreaProperty'
import LatestProperties from './Components/LatestProperty'
import PropertyCategory from './Components/Propertycategory'
import PremiumProperty from './Components/PremiumProperty'
import PremiumProperty1 from './Components/Sample'
import FeaturedProperty from './Components/FeaturedProperty'
import GoaFullyImages from './Components/GoaFullyImages'
import Testimonials from './Components/Testimonials'
import Contactus from './Components/Contactus'
import Footer from './Components/Footer'
import CityDetails from './Components/CityDetails'
import Homepage from './Pages/Homepage';
import CitydetailsPage from './Pages/CitydetailsPage';
import Layout from './Components/Layout';
import ProjectDetails from './Components/ProjectDetails';
import ProjectDetailsPage from './Pages/ProjectDetailsPage';
import ContactusPage from './Pages/ContactusPage';
import AboutUS from './Pages/AboutUS';
import ChairmanMsg from './Pages/ChairmanMsg';
import Adminpanel from './Pages/Adminpanel';
import AdminDashboard from './Components/AdminPanel/AdminDashboard';
import AddProperty from './Components/AdminPanel/AddProperty';
import DataProperty from './Components/AdminPanel/DataProperty'; 
import AddCity from './Components/AdminPanel/AddCity';
import DataCities from './Components/AdminPanel/DataCities';
import LoginPage from './Components/AdminPanel/LoginPage';
import CitydetailsPageAPI from './Pages/CitydetailsPageAPI';
import Filters from './Components/Filters';
import ProtectedRoute from "./Components/ProtectedRoute"; 


function App() {

  return (
    <>
    
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/city" element={<CitydetailsPage />} />
            <Route path="/cityapi" element={<CitydetailsPageAPI />} /> 
            {/* <Route path="/projects" element={<ProjectDetailsPage />} /> */}
            <Route path="/filter" element={<Filters />} />
            <Route path="/projects/:id" element={<ProjectDetailsPage />} />
            <Route path="/contactus" element={<ContactusPage />} />
            <Route path="/aboutus" element={<AboutUS />} />
            <Route path="/chairmans-message" element={<ChairmanMsg />} />
            
          </Route>
          <Route path="/" element={<ProtectedRoute><Adminpanel /></ProtectedRoute>} >
                <Route path="/adminpanel" element={<AdminDashboard />} />
                <Route path="/Add-property" element={<AddProperty />} />
                <Route path="/Data-property" element={<DataProperty />} />
                <Route path="/Add-city" element={<AddCity />} />
                <Route path="/Data-cities" element={<DataCities />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
