import React from 'react';


const NewSletter = () => {
    return (
        <>
        <p className="product_hunt">Newsletter</p>
        <div className="newsletter_container">
        <div className = "newsletter_img_container">
        <div className = "newsletter_img">
            <img className="newsletter_gif" src = "images/newsletter.gif" alt=""/>
        </div>
        <p className ="newsletter_gif_text">An app to troll trolls</p>
        </div>
    <p className="newsletter_text">Get the best new products in your inbox, every day <span>👇</span></p>
    <input className = "newsletter_input" placeholder="Your email"></input>
    <button className= "subscribe_btn">SUBSCRIBE</button>
        </div>
        </>
    )
}

export default NewSletter;