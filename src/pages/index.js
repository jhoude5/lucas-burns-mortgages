import * as React from "react"
import Header from '../components/header';
import '../sass/styles.scss';
import MartelImage from '../files/martelimage.jpeg';
import Services from '../components/services';
import ApplyNow from "../components/applynow";
import MortgageCalc from "../components/mortgagecalc";
import Footer from "../components/footer";
import Newsletter from '../components/newsletter';
import About from "../components/about";
import Contact from "../components/contact";
import Testimonials from "../components/testimonials";
import Blog from "../components/blog";
import LucasBurns from '../files/lucasburns.png';
import { addBackToTop } from 'vanilla-back-to-top';


const IndexPage = () => {
  // addBackToTop();
  

  return (
    <div> 
        <main>
          <Header />
          <div className="header-title-img container">
            <div className="row">
                <h1 className="header-title">Providing services in <span className="header-bold">Ottawa</span> and throughout <span className="header-bold">Ontario</span></h1>
              
                <img className='lucas-burns-header-img' src={LucasBurns} alt='Lucas Burns' />
              
            </div>
            
            
        </div>
          <div>
            <img className='martel-header-img' src={MartelImage} alt=''/>
          </div>
          <section id='services' className="services center">
            <Services />
          </section>
          <section id='apply' className="applynow">
            <ApplyNow />
          </section>
          <section className="mortgagecalc">
            <MortgageCalc />  
          </section>
          <section className="subscribe">
            <Newsletter />
          </section>
          <section className="about">
            <About />
          </section>
          <section className='contact-us-section'>
            <Contact />
          </section>
          <section id='testimonials' className="testimonials">
            <Testimonials />
          </section>
          <section id='blog' className="blogs">
            <Blog />
          </section>
        </main>
        <Footer />
    </div>
   
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
