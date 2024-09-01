import React from "react";
import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h3 className='text-white text-center text-[60px] font-bold mb-9'>Skills</h3>
      </motion.div>
      <motion.div
        className='flex flex-row flex-wrap justify-center gap-10'
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          show: {
            opacity: 1,
            scale: 1,
            transition: {
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {technologies.map((technology, index) => (
          <motion.div
            key={technology.name}
            className='w-28 h-28'
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            }}
          >
            <BallCanvas icon={technology.icon} />
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default SectionWrapper(Tech, "");
