import React from 'react';
import './Solutions.scss';
import problem1 from '../../../media/problem1.svg';
import problem2 from '../../../media/placeholder (3).svg';
import problem3 from '../../../media/problem3.svg';
import cube from '../../../media/cube.svg';
import krook from '../../../media/krook.svg';
import operation from '../../../media/operation.svg';
import arrow from '../../../media/arrow.svg';
import { Link } from 'react-router-dom';

function Solutions() {
   return (
      <div className="solutions_container position-relative">
         <div className="container">
            <div className="solutions_content_container">
               <div className="title-wrapper pb-4">
                  <h6 className="heading heading--fancy text-center">SOLUTIONS</h6>
                  <h2 className="heading heading--two text-center">Problem Areas We Solve</h2>
               </div>
               <div className="problem_card mt-5">
                  <div className="row">
                     <div className=" col-5">
                        <div className="left_card">
                           <img src={problem1} alt={problem1} title={problem1} />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="right_card ps-lg-4">
                           <img src={cube} alt={cube} title={cube} className='mb-4' />
                           <div className="heading heading--two">Ransomware cyber threat at its worst</div>
                           <div className="para para--lg para--light my-2">While ransomware has been a nuisance for more than a decade, the scope for ransomware has expanded throughout the period of digital intensification brought by the COVID-19 pandemic.</div>
                           <Link to="/solutionspage" className="solution_link mt-5">
                              <span className='text'>Need a Solution?</span> 
                              <img src={arrow} alt={arrow} /></Link>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="problem_card my-5">
                  <div className="row">
                     <div className="col-6">
                        <div className="right_card pe-lg-4">
                           <img src={krook} alt={krook} title={krook} className='mb-4' />
                           <div className="heading heading--two">KrØØk: Serious vulnerability affected encryption of billion+ Wi‑Fi devices</div>
                           <div className="para para--lg para--light my-2">KrØØk affects devices with Wi-Fi chips by Broadcom and Cypress that haven’t yet been patched. These are the most common Wi-Fi chips used in contemporary Wi-Fi capable devices such as smartphones, tablets, laptops, and IoT gadgets</div>
                           <Link to="/solutionspage" className="solution_link mt-5">
                              <span className='text'>Need a Solution?</span> 
                              <img src={arrow} alt={arrow} />
                           </Link>
                        </div>
                     </div>
                     <div className="col-5">
                        <div className="left_card">
                           <img src={problem2} alt={problem2} title={problem2} />
                        </div>
                     </div>
                  </div>
               </div>

               <div className="problem_card">
                  <div className="row">
                     <div className=" col-5">
                        <div className="left_card">
                           <img src={problem3} alt={problem3} title={problem3} />
                        </div>
                     </div>
                     <div className="col-6">
                        <div className="right_card ps-lg-4">
                           <img src={operation} alt={operation} title={operation} className='mb-4' />
                           <div className="heading heading--two">Operation Ghost: The Dukes aren’t back – they never left</div>
                           <div className="para para--lg para--light my-2">The Dukes have been in the spotlight after their suspected involvement in the breach of the Democratic National Committee in the run-up to the 2016 US elections.</div>
                           <Link to="/solutionspage" className="solution_link mt-5">
                              <span className='text'>Need a Solution?</span> 
                              <img src={arrow} alt={arrow} />
                           </Link>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Solutions;