import { Navbar } from './components';
import { About, Hero, Skills, ProjectsSection, Contact } from './sections';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0f0f0f] text-white">
    <div className="grid-background absolute inset-0" />
    <div className="relative z-10">
      <Navbar />
      <div className="container mx-auto px-4 md:px-10">
        <Hero />
        <About />
        <Skills />
        <ProjectsSection />
        <Contact />
      </div>
    </div>
  </div>
  )
}

export default App
