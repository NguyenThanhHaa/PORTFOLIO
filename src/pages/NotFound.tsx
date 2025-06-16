import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const NotFound = () => {
  const { translations } = useLanguage();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-8 px-2">
      {/* Blurred blobs */}
      <img src="src/assets/Star.png" alt="star-bg" className='absolute top-10 left-10 w-72 h-72 animate-bounce blur-xs z-0' />
      <img src="src/assets/Starfish.png" alt="starfish-bg" className='absolute bottom-10 right-10 w-72 h-72 animate-bounce blur-xs z-0' />
      <img src="src/assets/Flower.png" alt="flower-bg" className='absolute bottom-8 left-10 w-40 h-40 animate-bounce blur-xs z-0' />

      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 backdrop-blur-lg bg-gray-800/40 rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-700/30 max-w-2xl w-full text-center"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-9xl font-bold text-sky-400 mb-4"
        >
          404
        </motion.h1>
        
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl font-bold text-white mb-6"
        >
          {translations?.notFound?.title || 'Page Not Found'}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-300 mb-8 text-lg"
        >
          {translations?.notFound?.description || 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.'}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors"
          >
            {translations?.notFound?.backHome || 'Back to Home'}
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;