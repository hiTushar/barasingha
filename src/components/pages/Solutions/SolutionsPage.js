import React from 'react';
import SolutionBanner from '../Solutions/SolutionBanner/SolutionBanner';
import SolutionSuite from '../Solutions/SolutionSuite/SolutionSuite';
import Applications from '../Common/Applications/Applications';
import SuitePricing from '../Common/SuitePricing/SuitePricing';
import Audience from '../Common/Audience/Audience';
import Demo from '../Common/Demo/Demo';
import Faq from '../Common/FAQ/FAQ';

function SolutionsPage({ setShowContactUsModal = () => { } }) {

    window.scrollTo({ top: 0, behavior: 'smooth' })
    
    return (
        <>
            <SolutionBanner/>
            <SolutionSuite/>
            <Applications/>
            <SuitePricing/>
            <Audience/>
            <Demo setShowContactUsModal={setShowContactUsModal} />
            <Faq/>
        </>
    );
}

export default SolutionsPage;