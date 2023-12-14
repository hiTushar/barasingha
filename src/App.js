import './App.scss';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'primeicons/primeicons.css';
import { useState } from 'react';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/pages/Home';
import Career from './components/pages/Career/CareerPage';
import {PostDetailPage} from './components/pages/PostDetailPage/PostDetailPage';
import {PrivacyPolicyPage} from './components/pages/PrivacyPolicy/PrivacyPolicyPage'; 
import SolutionsPage from './components/pages/Solutions/SolutionsPage';
import About from './components/pages/AboutUs/AboutUs';
import ProductsPage from './components/pages/Products/ProductsPage';
import CaseStudy from './components/pages/CaseStudy/CaseStudy';
import CareerDetailsPage from 'components/pages/CareerDetailsPage/CareerDetailsPage';

import ContactUsModal from 'components/pages/Forms/ContactUs';
import WentWrong from 'components/pages/Errors/WentWrong/WentWrong';
import Page404 from 'components/pages/Errors/Page404/Page404';
import SendingFailed from 'components/pages/Errors/SendingFailed/SendingFailed';
import WrongPassword from 'components/pages/Errors/WrongPassword/WrongPassword';

function App() {

  const [backdropIsVisible, setBackdropIsVisible] = useState(false)
  const [showContactUsModal, setShowContactUsModal] = useState(false);
  const [showWentWrong, setShowWentWrong] = useState(false);
  const [showPage404, setShowPage404] = useState(false);
  const [showSendingFailed, setShowSendingFailed] = useState(false);
  const [showWrongPassword, setShowWrongPassword] = useState(false);

  const closeContactUsModal = () => setShowContactUsModal(false);
  const closeWentWrong = () => setShowWentWrong(false);
  const closePage404 = () => setShowPage404(false);
  const closeSendingFailed = () => setShowSendingFailed(false);
  const closeWrongPassword = () => setShowWrongPassword(false);

  const hideBackdrop = () => { setBackdropIsVisible(false) }
  const showBackdrop = () => { setBackdropIsVisible(true) }

  return (
    <div className='main-container'>
      <Router>

          <div className='body-wrapper'>
            {
              backdropIsVisible
                ? <div className='backdrop'></div>
                : <></>
            }

            <Navbar
              hideBackdrop={hideBackdrop}
              showBackdrop={showBackdrop}
              backdropIsVisible={backdropIsVisible}
              setBackdropIsVisible={setBackdropIsVisible}
              setShowContactUsModal={setShowContactUsModal}
              setShowWrongPassword={setShowWrongPassword}
            />

            <Switch>
              
              <Route 
                exact
                path='/'
                component={() => <Home 
                                    setShowContactUsModal={setShowContactUsModal}
                                    setShowWentWrong={setShowWentWrong}
                                    setShowPage404={setShowPage404}
                                    setShowSendingFailed={setShowSendingFailed}
                                    setShowWrongPassword={setShowWrongPassword}
                                  />}
              />
              
              <Route
                exact
                path='/career'
                component={() => <Career setShowContactUsModal={setShowContactUsModal} />}
              />
              
              <Route
                exact
                path='/PostDetail'
                component={() => <PostDetailPage setShowContactUsModal={setShowContactUsModal}
              />} />
              
              <Route
                exact
                path='/PrivacyPolicy'
                component={() => <PrivacyPolicyPage setShowContactUsModal={setShowContactUsModal}
              />} />
              
              <Route
                exact
                path='/solutionspage'
                component={() => <SolutionsPage setShowContactUsModal={setShowContactUsModal}
              />} />
              
              <Route
                exact
                path='/productspage'
                component={() => <ProductsPage setShowContactUsModal={setShowContactUsModal} />}
              />
              
              <Route
                exact
                path='/about'
                component={() => <About setShowContactUsModal={setShowContactUsModal} />}
              />
              
              <Route
                exact
                path='/casestudy'
                component={() => <CaseStudy setShowContactUsModal={setShowContactUsModal} />}
              />
              
              <Route
                exact
                path='/careerdetailspage'
                component={() => <CareerDetailsPage setShowContactUsModal={setShowContactUsModal} />}
              />

            </Switch>
          </div>

        <Footer setShowContactUsModal={setShowContactUsModal} />

        {showContactUsModal && <ContactUsModal closeContactUsModal={closeContactUsModal} />}
        {showWentWrong && <WentWrong closeWentWrong={closeWentWrong}/>}
        {showPage404 && <Page404 closePage404={closePage404}/>}
        {showSendingFailed && <SendingFailed closeSendingFailed={closeSendingFailed} setShowContactUsModal={setShowContactUsModal}/>}
        {showWrongPassword && <WrongPassword closeWrongPassword={closeWrongPassword} />}

      </Router>
    </div>
  );
}

export default App;
