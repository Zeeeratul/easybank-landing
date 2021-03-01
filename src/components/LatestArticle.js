import React from 'react';
import Currency from '../assets/image-currency.jpg'
import Plane from '../assets/image-plane.jpg'
import Restaurant from '../assets/image-restaurant.jpg'
import Confetti from '../assets/image-confetti.jpg'

function LatestArticle() {

    return (
        <div className="latest-article">
            <h2 className="latest-article--headline">Latest Articles</h2>
           
            <div className="latest-article__container">
                <div className="latest-article__container__card">
                    <img className="latest-article__container__card--image" src={Currency} alt="currency" />
                    <div className="latest-article__container__card--content">
                        <p className="latest-article__container__card--content--author">By Claire Robinson</p>
                        <h3 className="latest-article__container__card--content--title">Receive money in any currency with no fees</h3>
                        <p className="latest-article__container__card--content--text">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
                    </div>
                </div>

                <div className="latest-article__container__card">
                    <img className="latest-article__container__card--image" src={Plane} alt="plane" />
                    <div className="latest-article__container__card--content">
                        <p className="latest-article__container__card--content--author">By Wilson Hutton</p>
                        <h3 className="latest-article__container__card--content--title">Treat yourself without worrying about money</h3>
                        <p className="latest-article__container__card--content--text">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
                    </div>
                </div>

                <div className="latest-article__container__card">
                    <img className="latest-article__container__card--image" src={Restaurant} alt="restaurant" />
                    <div className="latest-article__container__card--content">
                        <p className="latest-article__container__card--content--author">By Wilson Hutton</p>
                        <h3 className="latest-article__container__card--content--title">Take your Easybank card wherever you go</h3>
                        <p className="latest-article__container__card--content--text">Take your Easybank card wherever you go We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
                    </div>
                </div>

                <div className="latest-article__container__card">
                    <img className="latest-article__container__card--image" src={Confetti} alt="confetti" />
                    <div className="latest-article__container__card--content">
                        <p className="latest-article__container__card--content--author">By Claire Robinson</p>
                        <h3 className="latest-article__container__card--content--title">Our invite-only Beta accounts are now live!</h3>
                        <p className="latest-article__container__card--content--text">Our invite-only Beta accounts are now live! After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestArticle;
