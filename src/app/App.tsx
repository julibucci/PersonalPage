import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { ParticleCloud } from './components/ParticleCloud';


export default function App() {
  return (
    <div className="min-h-screen">
      <ParticleCloud />
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}