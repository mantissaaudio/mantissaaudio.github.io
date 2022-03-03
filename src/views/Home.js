import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Cta from '../components/sections/Cta';
import BrandDivider from '../components/elements/BrandDivider';

const Home = () => {

  return (
    <>
      <Hero />
      <BrandDivider />
      <FeaturesSplit invertMobile imageFill />
      <div id="cta"/>
      <Cta split />
    </>
  );
}

export default Home;
