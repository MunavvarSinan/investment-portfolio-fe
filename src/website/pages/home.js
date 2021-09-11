import React from 'react';
import {
  Header,
  Banner,
  About,
  Features,
  Pricing,
  Contact,
  Footer,
  Preloader,
} from '../components';

export const Home = () => {
  return (
    <>
      {/* <Preloader /> */}
      <Header />
      <Banner />
      <About />
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};
