import React from 'react';
import Link from 'next/link';

import { urlFor } from '../lib/client';

// Use if you want to display text & image from sanity
// {heroBanner.smallText}
// {heroBanner.midText}
// {heroBanner.largeText1}
// <img src={urlFor(heroBanner.image)} alt="stickers" className="hero-banner-image" />

const HeroBanner = ({ heroBanner }) => {
  return (
    <div>
      <div className="pre-order-bar">
        All orders are pre-orders. Shipments will go out 2 weeks from now.
      </div>  
      <div className="hero-banner-container">
        <div className="center">
          {/* <p className="hero-product"></p> */}
          <h3>Take your favorite characters</h3>
          <h1>Everywhere</h1>

          <div>
            {/* <Link href={`/product/${heroBanner.product}`}>
              <button type="button">{heroBanner.buttonText}</button>
            </Link> */}
            <Link href="#browseProducts">
              <button type="button" className="center button">{heroBanner.buttonText}</button>
            </Link>
            {/* <div className="desc">
              <h5>All stickers</h5>
              <p>{heroBanner.desc}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner