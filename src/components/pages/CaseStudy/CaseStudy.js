import React, { useEffect } from "react";
import './CaseStudy.scss';
import Faq from '../Common/FAQ/FAQ';
import Search from "../CaseStudy/SearchCaseStudy/SearchCaseStudy";

export default function CaseStudy() {

   useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
   }, [])
   
   return (
      <>
         <main className="casestudy">
            <section className="casestudy-title component-container">
               <div className="casestudy-title">
                  <h6 className="heading heading--fancy">Curious Cases</h6>
                  <h1 className="heading heading--one text-gradient">
                     See how we revolutionized the Cyber Security Industry
                  </h1>
                  <p className="para para--lg para--light">
                     NPAV offers comprehensive cyber security solutions across products
                  </p>
               </div>
            </section>
            <section className="casestudy-search">
               <div className="container">
                  <Search/>
               </div>
            </section>
         </main>
         <Faq />
      </>
   );
}