import { createRoot } from 'react-dom/client'

import Footer from '@components/common/Footer/Footer'
import Header from '@components/common/Header/Header'
import About from '@pages/Home/About'
import Gallery from '@pages/Home/Gallery/Gallery'
import Hero from '@pages/Home/Hero'
import Service from '@pages/Home/Service'
import Skills from '@pages/Home/Skills'
import '@styles/index.css'

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
