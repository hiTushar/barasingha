import React, { useEffect } from 'react';
import ProductBanner from './ProductBanner/ProductsBanner';
import Features from '../Products/Features/Features';
import Applications from '../Common/Applications/Applications';
import SuitePricing from '../Common/SuitePricing/SuitePricing';
import Audience from '../Common/Audience/Audience';
import Demo from '../Common/Demo/Demo';
import Faq from '../Common/FAQ/FAQ';

function ProductsPage({ setShowContactUsModal = () => { } }) {

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }, [])
   
   return (
      <>
         <ProductBanner />
         <Features />
         <Applications />
         <SuitePricing />
         <Audience />
         <Demo setShowContactUsModal={setShowContactUsModal} />
         <Faq setShowContactUsModal={setShowContactUsModal} />
      </>
   );
}

export default ProductsPage;