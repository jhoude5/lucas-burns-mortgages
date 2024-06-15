import * as React from "react"
import Header from '../components/header';
import '../sass/styles.scss';
import ApplyNow from "../components/applynow";
import Footer from "../components/footer";
import Newsletter from '../components/newsletter';


const Testimonials = () => {
  return (
    <div> 
        <main>
          <Header />
          <h2>Testimonials</h2>
          <section id='apply' className="applynow">
            <ApplyNow />
          </section>
          

          <section className="subscribe">
            <Newsletter />
          </section>
        </main>
        <Footer />
    </div>
   
  )
}

export default Testimonials

