import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaTelegramPlane } from "react-icons/fa";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  const phrases = [
    "Software engineer",
    "Full stack web developer",
    "Web designer",
    "Backend Developer(Spring boot)"
  ];

  const colors = [
    "#FFD700", 
    "#32CD32", 
    "#1E90FF", 
    "#FF69B4"  
  ];

  const backgroundColors = [
    "#000000", 
    "#282c34", 
    "#ffffff", 
    "#222222"  
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingSpeed = 150;
  const deletingSpeed = 75;

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];

    const typeEffect = () => {
      setDisplayText((prev) => {
        if (isDeleting) {
          return currentPhrase.substring(0, prev.length - 1);
        } else {
          return currentPhrase.substring(0, prev.length + 1);
        }
      });

      if (!isDeleting && displayText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    };

    const typingInterval = setInterval(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
    
    return () => clearInterval(typingInterval);
  }, [displayText, currentPhraseIndex, isDeleting]);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Tamiru</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am 
            <span 
              style={{ 
                color: colors[currentPhraseIndex], 
                backgroundColor: backgroundColors[currentPhraseIndex],
                padding: "0.4rem 1rem",
                borderRadius: "12px",
                display: "inline-block",
                margin: "0 0.5rem",
                fontSize: "40px", 
                fontWeight: "bold" 
              }}
            >
              {displayText}
            </span>
          </p>
        </div>
       
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[27px] h-[60px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
