import './styles/app.sass'
import Navbar from "./components/Navbar"
import Banner from './components/Banner'
import Services from './components/Services'
import AboutUs from './components/AboutUs'
import ValuedServices from './components/ValuedServices'
import Portfolios from './components/Portfolios'
import ChooseUs from './components/ChooseUs'
import Testimonials from './components/Testimonials'
import ExpertPeople from './components/ExpertPeople'
import ContactUs from './components/ContactUs'
import LatestNews from './components/LatestNews'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Services />
      <AboutUs />
      <ValuedServices />
      <Portfolios />
      <ChooseUs />
      <Testimonials />
      <ExpertPeople />
      <ContactUs />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default App;
