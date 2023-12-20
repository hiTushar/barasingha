import React, { useEffect } from "react";
import './AboutUs.scss';
import WhyHow from "./WhyHow/About_WhyHow";
import Team from "./Team/Team.js";

export default function AboutUs() {

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }, [])
   
   return (
      <>
         {/* Hero of the page */}
         <section className="hero">
            <div className="component-container">
               <div className="title-wrapper">
                  <div className="heading heading--fancy text-center">OUR STORY</div>
                  <div className="heading heading--one text-gradient text-center">
                  Revolution
                  </div>
                  <p className="para para--lg para--light text-center padding-24">NPAV offers comprehensive cyber security solutions across products</p>
               </div>
            </div>
         </section>
         <WhyHow />
         <Team />
      </>
   );
}