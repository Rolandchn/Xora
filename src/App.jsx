import Header from './sections/Header.jsx';
import Hero from './sections/Hero.jsx';
import Feature from './sections/Feature.jsx';
import Pricing from './sections/Pricing.jsx';
import Faq from './sections/Faq.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Download from './sections/Download.jsx';
import Footer from './sections/Footer.jsx';

const App = () => {
  return (
    <>
    <Header/>
    
    <main className='overflow-hidden'>
        <Hero/>
        <Feature/>
        <Pricing/>
        <Faq />
        <Testimonials />
        <Download />
        <Footer />
    </main>
    </>
  )
}

export default App