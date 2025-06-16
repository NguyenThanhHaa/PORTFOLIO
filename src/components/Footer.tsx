import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { translations } = useLanguage();

  return (
    <footer className="py-2 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="flex justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-2 w-full mx-auto"
        >
          <div className="flex flex-col items-center justify-center space-y-2">
            <motion.div
              className="text-center text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <p className="text-sm">
                {translations.footer.designedBy} Nguyễn Thanh Hà 
              </p>
            </motion.div>

            {/* Source Code Link */}
            <motion.a
              href="https://github.com/NguyenThanhHaa/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-200 hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {translations.footer.sourceCode}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
