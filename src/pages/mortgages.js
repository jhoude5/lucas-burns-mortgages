import * as React from "react"
import Header from '../components/header';
import '../sass/styles.scss';
import ApplyNow from "../components/applynow";
import Footer from "../components/footer";
import Newsletter from '../components/newsletter';
import { addBackToTop } from 'vanilla-back-to-top';


const Mortgages = () => {
    addBackToTop();
  return (
    <div> 
        <main>
          <Header />
          <div className="container">
            <h2>Mortgage Services</h2>
          </div>
          
          <section id='apply' className="applynow">
            <ApplyNow />
          </section>
          <section>
            <div className="container">
                <div className="row">
                <h2>Our services</h2>
            <ul className="list-services">
                <li>
                First Time Homebuyer
                </li>
                <li>
                Self-employed
                </li>
                <li>
                Refinancing
                </li>
                <li>
                Cash-Back
                </li>
                <li>
                Financial Restructuring
                </li>
                <li>
                Debt Consolidations
                </li>
                <li>
                1st, 2nd and 3rd mortgages
                </li>
                <li>
                Cottage/Recreational Properties
                </li>
                <li>
                Vacant land
                </li>
                <li>
                Commercial and Mixed Uses
                </li>
                <li>
                Multi-unit apartments
                </li>
                <li>
                Free consultation
                </li>
            </ul>
            <h3>The Power to choose</h3>
            <p>Finding the right mortgage can be a stressful experience. With so many lenders offering so many options, choosing the right mortgage can be a difficult choice. The staff at Martel Mortgages listen carefully to ensure that their mortgage recommendations serve you not only today but well into the future.</p>
          <h2>Mortgage Renewals</h2>
          <p>It's Time to Renew. Have a Martel Mortgage Agent give you a Financial Check-up instead!

                    A renewal is like a fresh start, so don't get caught by the banks. A renewal may not be the answer! A refinance for a fresh start may be what is best.

                    When a term is coming to a close, most Canadian banks will send a mortgage renewal notice in the mail a few months before the term is up. At this time the banks tend to assume that you will sign on with them for another term at their posted rate with very little or no discount. Over half of the public will sign this renewal without researching what the competition has to offer. At Martel Mortgages we are here to offer you the expertise and resources so you can take advantage of the competitive mortgage market.

                    Renewals are easy to complete and can expand your financial options:</p>
                    <ul className="list-services">
                        <li>
                        Flexible terms and pre-payment options
                        </li>
                        <li>
                        Access to over 20 Lenders
                        </li>
                        <li>
                        Mortgage Planning/Wealth Planning
                        </li>
                        <li>
                        Achieving your current goals
                        </li>
                        <li>
                        Accommodating for the future
                        </li>
                    </ul>

                        <h2>Refinancing / Debt Consolidation</h2>
                        <p>Deciding to refinance a mortgage is a big financial decision and it takes more than the decrease in interest rates to urge you to avail of another loan. You must understand your options and the considerations that go with each alternative.
                    What is refinancing?
                    Refinancing your mortgage means that you will go into an agreement of a new loan to pay the existing one. This represents a new loan, with new terms and even a new lender. It has a constant interest rate which is hopefully lower than the previous one. The terms can be shorter or longer, and sometimes, the interest is low enough that the terms may not need any changes at all.
                    There are a variety of options available to help you make the right mortgage decision that could leave you with more dollars in your pocket.</p>
                            <h2>Mortgage Insurers</h2>
                            <p>Canadian Mortgage and Housing Corporation (CMHC)
                    For over 65 years, CMHC has helped millions of Canadians meet their  housing needs. CMHC provides mortgage loan insurance that enables you to buy a home sooner with a minimum down payment of 5%. And CMHC is there with you every step of the way— with information before, during and after your home purchase.
                    Click Here to visit their website.

                    Sagen

                    Sagen™, previously known as Genworth Canada, is Canada's largest private mortgage insurance provider. We offer many different mortgage insurance products to lenders and brokers across Canada, making homeownership more accessible to first-time homebuyers
                    Click Here to visit their website.

                    Canada Guaranty Mortgage Insurance

                    Canada Guaranty works harder to earn your business. Through common-sense underwriting and a dedication to customer service excellence, we offer more solutions and tools for lenders and brokers to help grow your business.
                    Click Here to visit their website.</p>
                    <h2>Home Equity Information</h2>
                    <p>Did you know you can turn your home equity into cash? A Home Equity Loan Plan allows you use your home as security to borrow up to 80% of its current value minus what you owe. This is a great option to consider if for larger purchasing or renovation needs for a vacation home.
                    Note: </p>
                    <ul className="list-services">
                        <li>
                        A minimum loan amount of $10,000
                        </li>
                        <li>
                        Repayment period up to 25 years
                        </li>
                        <li>
                        Fixed interest rate with flexible repayment schedule. Choose monthly, semi-monthly, bi-weekly or weekly
                        </li>
                        <li>
                        Allows for flexible repayment
                        </li>
                        <li>
                        Defer one month's payment up to 2 times a year
                        </li>
                    </ul>
                </div>
            </div>
            
        </section>
          <section className="subscribe">
            <Newsletter />
          </section>
        </main>
        <Footer />
    </div>

  )
}

export default Mortgages

