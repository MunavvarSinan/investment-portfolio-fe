import React from 'react';
import {
  Header,
  Banner,
  About,
  Features,
  Contact,
  Footer,
  Disclimer,
} from '../components';

export const Home = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <Banner />
      <About />
      <Features />
      {/* <Pricing /> */}
      <Disclimer />
      <Contact />
      <Footer />
    </>
  );
};
