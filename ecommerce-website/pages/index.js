import React from 'react'

import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner}
from '../components';

const Home = ({ products, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div id="browseProducts" className="products-heading">
        <h2>Browse our Products!</h2>
        <p>We promise you'll love them.</p>
      </div>

      <div className="products-container">
        {products?.map((product) => <Product key= {product.id} product={product} />)}
      </div>

      {/* Use when you want to add a footer with discount info */}
      {/* <FooterBanner footerBanner={bannerData && bannerData[0]}/> */}
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}

export default Home