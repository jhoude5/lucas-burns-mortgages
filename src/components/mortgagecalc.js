import React from "react";
import MortgageCalculator from "mortgage-calculator-react";

const MortgageCalc = () => {

    return (

        <div className="container mortgage-calculator">
            <div className="row">
                <div className="col-lg-6">
                    <h2>Mortgage Payment Calculator</h2>
                </div>
                <div className="col-lg-6 calc">
                    <MortgageCalculator/>
                    
                </div>
                <p className="calc-info col-lg-6">*Numbers may not be accurate if using less than 20% down payment. Contact me for details.</p>
            </div>  
        </div>
    );
};

export default MortgageCalc;

