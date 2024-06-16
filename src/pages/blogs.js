import * as React from "react"
import Header from '../components/header';
import '../sass/styles.scss';
import ApplyNow from "../components/applynow";
import Footer from "../components/footer";
import Newsletter from '../components/newsletter';
import { addBackToTop } from 'vanilla-back-to-top';


const Blogs = () => {
    addBackToTop();
  return (
    <div> 
        <main>
          <Header />
          <h2>Blogs</h2>
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

export default Blogs


