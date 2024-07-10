import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import Academic from './pages/Academic';
import Department from './pages/Department';
import Placement from './pages/Placement';
import Header from './components/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Circular from './pages/Circular';
import Campuslife from './pages/Campuslife';
import Footer from './components/Footer';
import Achivements from './pages/Achivements';
import AppiledMechanics from './pages/departments/AppiledMechanics';
import LdClub from './pages/LdClub';
import Adventure from './clubs/Adventure';
import CodersClub from './clubs/CodersClub';
import Innovator from './clubs/Innovator';
import NSS from './clubs/NSS';
import Robocon from './clubs/Robocon';
import IEEE from './clubs/IEEE';
import FOSS from './clubs/FOSS';
import Library from './pages/Library';
import Canteen from './pages/Canteen';
import Hostel from './pages/Hostel';
import CampusMap from './pages/CampusMap'
import Bio from './pages/departments/Bio';
import Automobile from './pages/departments/Automobile';
import Chemical from './pages/departments/Chemical';
import Civil from './pages/departments/Civil';
import Computer from './pages/departments/Computer';
import Electrical from './pages/departments/Electrical';
import Electronics from './pages/departments/Electronics';
import Environment from './pages/departments/Environment';
import IC from './pages/departments/IC';
import IT from './pages/departments/IT';
import Mechanical from './pages/departments/Mechanical';
import Plastic from './pages/departments/Plastic';
import Rubber from './pages/departments/Rubber';
import Links from './pages/Links';
import Sports from './pages/Sports';

export default function App() {
  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/academic' element={<Academic/>}/>
          <Route path='/department' element={<Department/>}/>
          <Route path='/placement' element={<Placement/>}/>
          <Route path='/circular' element={<Circular/>}/>
          <Route path='/campuslife' element={<Campuslife/>}/>
          <Route path='/sign-in'element={<SignIn/>}/>
          <Route path='/sign-up'element={<SignUp/>}/>
          <Route path='/achivement' element={<Achivements/>}/>
          <Route path='/mechanics'element={<AppiledMechanics/>}/>
          <Route path='/ldclub' element={<LdClub/>}/>
          <Route path='/adventure' element={<Adventure/>}/>
          <Route path='/codersclub' element={<CodersClub/>}/>
          <Route path='/foss' element={<FOSS/>}/>
          <Route path='/ieee' element={<IEEE/>}/>
          <Route path='/innovator' element={<Innovator/>}/>
          <Route path='/nss' element={<NSS/>}/>
          <Route path='/robocon' element={<Robocon/>}/>
          <Route path='/library' element={<Library/>}/>
          <Route path='/canteen' element={<Canteen/>}/>
          <Route path='/hostel' element={<Hostel/>}/>
          <Route path='/campusmap' element={<CampusMap/>}/>
          <Route path='/bio' element={<Bio/>}/>
          <Route path='/automobile' element={<Automobile/>}/>
          <Route path='/chemical' element={<Chemical/>}/>
          <Route path='/campusmap' element={<Civil/>}/>
          <Route path='/civil' element={<CampusMap/>}/>
          <Route path='/computer' element={<Computer/>}/>
          <Route path='/electrical' element={<Electrical/>}/>
          <Route path='/electronics' element={<Electronics/>}/>
          <Route path='/enviro' element={<Environment/>}/>
          <Route path='/ic' element={<IC/>}/>
          <Route path='/it' element={<IT/>}/>
          <Route path='/mechanical' element={<Mechanical/>}/>
          <Route path='/plastic' element={<Plastic/>}/>
          <Route path='/rubber' element={<Rubber/>}/>
          <Route path='/links' element={<Links/>}/>
          <Route path='/sport' element={<Sports/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}
