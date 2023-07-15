import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";

// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";


const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          now the tech i use to build stuff
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          My Tech-stack
        </h2>
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center gap-10'>

        {technologies.map((technology) => (
          <img className='w-28 h-28 bg-white rounded-lg' key={technology.name} src={technology.icon}>
            {/* <BallCanvas icon={technology.icon} /> */}
          </img>
        ))}
      </div>
    </>

  );
};

export default SectionWrapper(Tech, "");
