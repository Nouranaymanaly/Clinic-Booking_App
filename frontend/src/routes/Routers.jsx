import React from 'react'
import Home from '../pages/Home.jsx'
import Login from '../pages/Login'
import Services from '../pages/Services'
import Signup from '../pages/Signup'
import Contact from '../pages/Contact'
import Clinics from '../pages/Clinics/Clinics'
import ClinicDetails from '../pages/Clinics/ClinicDetails'

import {Routes, Route} from 'react-router-dom'

const Routers = () => {
  return <Routes>
    <Route path = "/" element = {<Home/>} />
    <Route path = "/home" element = {<Home/>} />
    <Route path = "/login" element = {<Login/>} />
    <Route path = "/services" element = {<Services/>} />
    <Route path = "/register" element = {<Signup/>} />
    <Route path = "/contact" element = {<Contact/>} />
    <Route path = "/clinics" element = {<Clinics/>} />
    <Route path = "/clinics/:id" element = {<ClinicDetails/>} />
  </Routes>
}

export default Routers