import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './FeatureHighlight.css';

const FeatureHighlight: React.FC = () => {
  const { t } = useTranslation();

  const highlights = [
    {
      id: 'scanning',
      image: '/image-5.png'
    },
    {
      id: 'analysis',
      image: '/image-1.png'
    },
    {
      id: 'shared',
      image: '/image-2.png'
    },
    {
      id: 'alerts',
      image: '/image-3.png'
    },
    {
      id: 'score',
      image: '/image-4.png'
    },
    {
      id: 'security',
      image: '/image-7.png'
    }
  ];

  return (
    <section className="section highlight-section">
      <div className="container">
        <div className="section-header text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('highlights.title')}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('highlights.subtitle')}
          </motion.p>
        </div>

        <div className="highlights-grid">
          {highlights.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="highlight-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="highlight-visual">
                <img src={item.image} alt={t(`highlights.${item.id}.title`)} className="feature-screenshot" />
              </div>
              <div className="highlight-content">
                <h3 className="highlight-title">{t(`highlights.${item.id}.title`)}</h3>
                <p className="highlight-desc">{t(`highlights.${item.id}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlight;
