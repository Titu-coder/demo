import * as React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutContent from "../Components/AboutContent";
import ing from '../img/ing.png';
import michelin from '../img/michelin.png';
import microsoft from '../img/microsoft.png';
import tricubiq from '../img/tricubiq.png';
import starbyte from '../img/starbyte.png'
import fintech from '../img/fintech.png'

function About() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const isScreenSizeMedium = window.matchMedia("(min-width: 768px)").matches;

  return (
    <div className="text-white h-screen p-3 md:p-10  md:overflow-hidden" >
      <div className="m-auto h-full grid grid-flow-row items-center md:grid-cols-2 gap-4 " id='about-container'>

        {isScreenSizeMedium ? (
          //aici animatie
          <>
        <motion.div
          ref={ref}
          className=" p-4 text-center gap-6   "
          initial={{ opacity: 0, x: -100 }}
          // animate={{ opacity: 1, x: 0 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} 
          transition={{ duration: 0.5 }}
        >
          <div className=" grid gap-6 grid-cols-2 grid-rows-3 items-center ">
            <img src={michelin} alt="michelin" className="logo" />  
            <img src={ing} alt="ing" className="logo" />
            <img src={fintech} alt="michelin" className="logo" /> 
            <img src={microsoft} alt="microsoft" className="logo" />
            <img src={starbyte} alt="michelin" className="logo" />  
            <img src={tricubiq} alt="ing" className="logo" />
          </div>
        </motion.div>
        <div className=" gap-4 py-10 tracking-wider">
          <motion.div
            className=" p-4 space-y-4"
            initial={{ opacity: 0, x: 100 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl tracking-wider" >Welcome to our Software Development Company!</h1>
            <p className="pt-4">At Dailyweb Solution, we are passionate about crafting high-quality software solutions that empower businesses and individuals to thrive in the digital world. With our team of talented developers and cutting-edge technologies, we strive to deliver innovative and customized software products that meet our clients' unique needs.</p>
          </motion.div>
          <motion.div
            className=" p-4 space-y-4"
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
            transition={{ duration: 0.5 }}
          >
            <p>We are dedicated to delivering excellence in software development, combining technical expertise with a deep understanding of our clients' needs. Contact us today to discuss your software requirements and embark on a transformative journey towards digital success.</p>
          </motion.div>
        </div>
        </>
      ) : (
        //aici fara animatie
        <AboutContent/>
      )}

      </div>
    </div>
  );
}

export default About;
