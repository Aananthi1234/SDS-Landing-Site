import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Courses from './Pages/Cources';
import Contact from './Pages/Contact';
import Layout from './Components/Layout';

//

import Web from './Pages/CourseDetails/Web'
import App1 from './Pages/CourseDetails/App1'
import Ai from './Pages/CourseDetails/Ai'
import CAD from './Pages/CourseDetails/CAD'
import DMO from './Pages/CourseDetails/DMO'
import MLP from './Pages/CourseDetails/MLP'
import CCA from './Pages/CourseDetails/CCA'
import COA from './Pages/CourseDetails/COA'
import Tally from './Pages/CourseDetails/Tally'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="courses" element={<Courses />} />
        <Route path="contact" element={<Contact />} />


        <Route path="Web" element={<Web />}/>
        <Route path="App1" element={<App1/>}/>
        <Route path="Ai" element={<Ai />}/>
        <Route path="CAD" element={<CAD />}/>
        <Route path="DMO" element={<DMO />}/>
        <Route path="MLP" element={<MLP />}/>
        <Route path="CCA" element={<CCA />}/>
        <Route path="COA" element={<COA/>}/> 
        <Route path="Tally" element={<Tally />}/>
        

         
      </Route>
    </Routes>
  );
}

export default App;
