import './App.css';
import Header from './components/Header';
import Typical from 'react-typical'
import Cards from './components/Cards';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
// import Aos from 'aos';
// import "aos/dist/aos.css"
import { useEffect } from 'react';
function App() {
  // useEffect(()=>{
  //   Aos.init({})
  // },[])
  return (
    <>
    <div className="app">
        <Header />
        <div className="homePageText">
               <h1>Namaste India</h1>
               <h3>The traveler sees what he sees, the tourist sees what he has come to see</h3>
               <h4>Visit
                 <Typical 
                  steps={["Agra","Jaipur","Kerala","Kolkata"]}
                  loop={Infinity}
                  className="typist"
                  />
               </h4>
        </div>
    </div>
         <Cards />
         <ContactUs />
         <Footer />

    </>
  );
}

export default App;
