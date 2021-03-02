import React from 'react';
import {ReactComponent as ApiIcon} from '../assets/icon-api.svg'
import {ReactComponent as BudgetIcon} from '../assets/icon-budgeting.svg'
import {ReactComponent as OnBoardingIcon} from '../assets/icon-onboarding.svg'
import {ReactComponent as OnlineIcon} from '../assets/icon-online.svg'

function WhyChoose() {

    return (
        <section className="why-choose">
            <div className="why-choose__question">
                <h2 className="why-choose__question--title">Why choose Easybank?</h2>
                <p className="why-choose__question--subtitle">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
            </div>
           
            <div className="why-choose__arguments">
                <div className="why-choose__arguments__block">
                    <OnlineIcon className="why-choose__arguments__block--logo" />  
                    <h3 className="why-choose__arguments__block--title">Online Banking</h3>
                    <p className="why-choose__arguments__block--text">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
                </div>
                <div className="why-choose__arguments__block">
                    <BudgetIcon className="why-choose__arguments__block--logo" />  
                    <h3 className="why-choose__arguments__block--title">Simple Budgeting</h3>
                    <p className="why-choose__arguments__block--text">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                </div>
                <div className="why-choose__arguments__block">
                    <OnBoardingIcon className="why-choose__arguments__block--logo" />  
                    <h3 className="why-choose__arguments__block--title">Fast Onboarding</h3>
                    <p className="why-choose__arguments__block--text">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
                <div className="why-choose__arguments__block">
                    <ApiIcon className="why-choose__arguments__block--logo" />  
                    <h3 className="why-choose__arguments__block--title">Open API</h3>
                    <p className="why-choose__arguments__block--text">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </div>
        </section>
    )
}

export default WhyChoose;
