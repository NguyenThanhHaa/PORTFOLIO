import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { translations } = useLanguage();

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-8 text-center">{translations.about.title}</h2>
          <div className="grid items-center">
            <div className="space-y-6">
              <p className="text-white leading-relaxed">
              {translations.about.description1}
              </p>
              <p className="text-white leading-relaxed">
              {translations.about.description2}
              </p>
              <p className="text-white leading-relaxed">
              {translations.about.description3}
              </p>
            </div>
            
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 