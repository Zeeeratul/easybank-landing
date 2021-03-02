import React from 'react';

function Landing() {

    return (
        <section className="landing">
            <div className="landing__image"></div>
      
            <div className="landing__text">
                <h1 className="landing__text--title">Next generation digital banking</h1>
                <p className="landing__text--subtitle">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
                <a href="/" className="cta landing__text--cta">Request Invite</a>
            </div>
        </section>
    )
}

export default Landing;
