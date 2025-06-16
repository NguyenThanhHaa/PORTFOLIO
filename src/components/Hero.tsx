import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { useLanguage } from '../contexts/LanguageContext';
import { useState, useEffect } from 'react';
import { AdvancedImage } from '@cloudinary/react';
import { cloudinaryConfig } from '../config/Cloudinary';
import { fit } from '@cloudinary/url-gen/actions/resize';

const Hero = () => {
  const { translations } = useLanguage();
  const [key, setKey] = useState(0);

  useEffect(() => {
    // Force TypeAnimation to re-render when language changes
    setKey(prev => prev + 1);
  }, [translations]);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-2">
      {/* Blurred blobs */}
        <AdvancedImage
            cldImg={cloudinaryConfig.image('Star_tcnplr').resize(fit().width(900).height(600))}
            className="absolute top-10 left-10 w-72 h-72 animate-bounce blur-xs z-0"
            alt='star-blob'
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => console.error('Image loading error:', e)}
        />

        <AdvancedImage
            cldImg={cloudinaryConfig.image('Starfish_fjwofk').resize(fit().width(900).height(600))}
            className="absolute bottom-10 right-10 w-72 h-72  animate-bounce blur-xs z-0"
            alt='starfish-blob'
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => console.error('Image loading error:', e)}
        />
        <AdvancedImage
            cldImg={cloudinaryConfig.image('Flower_t5u9ah').resize(fit().width(900).height(600))}
            className="absolute bottom-8 left-10 w-40 h-40  animate-bounce blur-xs z-0"
            alt='flower-blob'
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => console.error('Image loading error:', e)}
        />

      {/* Glassmorphism main card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 backdrop-blur-lg bg-gray-800/40 rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-700/30 max-w-6xl w-full flex flex-col md:flex-row items-center md:items-stretch gap-8"
      >
        {/* Left: Text content */}
        <div className="flex-1 flex flex-col justify-center md:justify-start md:items-start items-center text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6 text-left"
          >
            {translations.hero.greeting} 
          </motion.h1>
          <span className="text-3xl md:text-5xl font-bold text-sky-400 mb-6 text-left">Nguyễn Thanh Hà</span>
         
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-6 text-left min-h-[32px]"
          >
            <TypeAnimation
              key={key}
              sequence={[
                translations.hero.roles[0] || '',
                1000,
                translations.hero.roles[1] || '',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-gray-300 mb-10 text-left"
          >
            {translations.hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full flex md:justify-start gap-8  justify-center "
          >
            <a
              href="https://github.com/NguyenThanhHaa"
            >
              <AiFillGithub className='text-3xl text-white transition-all duration-300'/>
            </a>
            <a
              href="https://www.linkedin.com/in/thanh-ha-nguyen-004b06326/"
            >
              <FaLinkedin className='text-3xl text-white transition-all duration-300'/>
            </a>
            <a
              href="mailto:ngthanhha061@gmail.com"
            >
              <MdOutlineEmail className='text-3xl text-white transition-all duration-300'/>
            </a>
          </motion.div>
        </div>

        {/* Right: Illustration placeholder */}
        <div className="flex-1 flex items-center justify-center">
          {/* Profile Image */}
          <div className="w-72 h-96 bg-gray-700/60 rounded-2xl flex items-center justify-center shadow-xl border border-gray-600 overflow-hidden">
             <AdvancedImage
                cldImg={cloudinaryConfig.image('profile_aysus1').resize(fit().width(900).height(600))}
                className="w-full h-full object-fit"
                alt="My profile image"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => console.error('Image loading error:', e)}
              />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
