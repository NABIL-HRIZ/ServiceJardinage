import React from 'react'
import Home from './pages/home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import NavBar from './components/navbar/NavBar'
import Footer from './components/footer/Footer'
import About from './pages/about/About'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Galery from './pages/galery/Galery'
import NotFound from './pages/notFound/NotFound'
import Plans from './pages/plans/Plans'
import OurTeam from './pages/ourTeam/OurTeam'
import Contact from './pages/contact/Contact'
import Devis from './pages/devis/Devis'
// ..
AOS.init();
const App = () => {
  return (
    <>
    <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route  path='/about' element={<About />}/>
      <Route  path='/galery' element={<Galery />}/>
      <Route  path='*' element={<NotFound />}/>
      <Route path='/plan' element={<Plans />} />
      <Route path='/ourTeam' element={<OurTeam />}/>
      <Route path='/Devis' element={<Devis />}/>
      <Route path='/contact' element={<Contact />}/>


    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
