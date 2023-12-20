import React, { useEffect } from "react";
import './career.scss';
import Position from "./Position/Position";
import WhyHow from "./WhyHow/WhyHow";
import Testimonials from "./Testimonials/Testimonials";
import Projects from "./Projects/Projects";

export default function CareerPage() {

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
   }, [])
   
   return (
      <>
         {/* Hero of the page */}
         <section className="hero">
            <div className="component-container">
               <div className="title-wrapper">
                  <div className="heading heading--fancy text-center">CYBER SECURITY</div>
                  <div className="heading heading--one text-gradient text-center">
                     Join our team and make a difference in the cybersecurity industry
                  </div>
                  <p className="para para--lg para--light text-center padding-24">NPAV offers comprehensive cyber security solutions across products</p>
               </div>
            </div>
         </section>
         <Position />
         <WhyHow />
         <Testimonials />
         <Projects />
      </>
   );
}