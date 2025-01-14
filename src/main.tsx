import { createRoot } from 'react-dom/client'
import Footer from './components/common/Footer/Footer.tsx'
import Header from './components/common/Header/Header.tsx'
import About from './pages/Home/About.tsx'
import Gallery from './pages/Home/Gallery.tsx'
import Hero from './pages/Home/Hero.tsx'
import Service from './pages/Home/Service.tsx'
import Skills from './pages/Home/Skills.tsx'
import './styles/index.css'

createRoot(document.getElementById('root')!).render(
  <div className={`wrapper`}>
    <Header />
    <main>
      <Hero />
      <About />
      <Skills />
      <Service />
      <Gallery />
    </main>
    <Footer />
  </div>,
)
