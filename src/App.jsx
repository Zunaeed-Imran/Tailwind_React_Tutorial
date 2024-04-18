import './App.css'
import Calling from './components/Calling'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'
import Herosec from './components/Herosec'
import Navbar from './components/Navbar'
import Service from './components/Service'
import States from './components/States'

function App() {


  return (
    <>
      <Navbar />
      <Herosec />
      <Service />
      <States />
      <Calling />
      <ContactUs />
      <Footer/>
    </>
  )
}

export default App
