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
         <div className="component-container">
            <section className="career-hero">
               <div className="title-wrapper">
                  <p className="heading--fancy">CYBER SECURITY</p>
                  <p className="heading--one text-gradient text-center">
                     Join our team and make a difference in the cybersecurity industry
                  </p>
                  <p className="para--lg para--light">NPAV offers comprehensive cyber security solutions across products</p>
               </div>
            </section>
         </div>
         <Position />
         <WhyHow />
         <Testimonials />
         <Projects />
      </>
   );
}