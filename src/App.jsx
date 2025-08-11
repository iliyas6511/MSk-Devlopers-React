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


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/city" element={<CitydetailsPage />} />
            <Route path="/projects" element={<ProjectDetailsPage />} />
            <Route path="/contactus" element={<ContactusPage />} />
            <Route path="/aboutus" element={<AboutUS />} />
            <Route path="/chairmans-message" element={<ChairmanMsg />} />
          </Route>
        </Routes>
      </Router>

    </>
  )
}

export default App
