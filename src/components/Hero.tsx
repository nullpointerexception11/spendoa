import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import './Hero.css';

const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="hero-title">
            {t('hero.headline')}
          </h1>
          
          <p className="hero-subtitle">
            {t('hero.subheadline')}
          </p>
          
          <div className="hero-actions">
            <a href="https://play.google.com/store/apps/details?id=com.oguzdogdu.budgetpulse&hl=tr" target="_blank" rel="noopener noreferrer" className="google-play-btn">
              <img 
                src="/google-play-download.svg" 
                alt="Get it on Google Play" 
                style={{ height: '56px' }}
              />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="hero-image-container">
            <img src="/hero.svg" alt="Spendoa App" className="hero-image-large" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
