import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import FeaturedProject from './components/sections/FeaturedProject';
import Projects from './components/sections/Projects';
import DesktopApps from './components/sections/DesktopApps';
import Games from './components/sections/Games';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';
import ThemeProvider from './context/ThemeContext';
import CustomCursor from './components/ui/CustomCursor';
import RedbubbleShop from './components/sections/Shop';

function App() {
  return (
    <ThemeProvider>
      <CustomCursor />
      <AnimatePresence mode="wait">
        <Layout>
          <Hero />
          <About />
          <FeaturedProject />
          <Projects />
          <Games />
          <DesktopApps />
          <Certifications />
          <RedbubbleShop />
          <Contact />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default App;