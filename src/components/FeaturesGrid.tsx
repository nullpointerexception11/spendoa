import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Bot, Scan, Target, Repeat, CreditCard, Wallet } from 'lucide-react';
import './Features.css';

const FeaturesGrid = memo(() => {
  const { t } = useTranslation();

  const features = [
    { id: 'ai', icon: <Bot size={24} className="feature-icon-svg" /> },
    { id: 'receipts', icon: <Scan size={24} className="feature-icon-svg" /> },
    { id: 'goals', icon: <Target size={24} className="feature-icon-svg" /> },
    { id: 'recurring', icon: <Repeat size={24} className="feature-icon-svg" /> },
    { id: 'installments', icon: <CreditCard size={24} className="feature-icon-svg" /> },
    { id: 'budgets', icon: <Wallet size={24} className="feature-icon-svg" /> },
  ];

  return (
    <section id="features" className="section features-section">
      <div className="container">
        <div className="section-header text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('features.title')}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('features.subtitle')}
          </motion.p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              className="feature-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="feature-icon-wrapper">
                {feature.icon}
              </div>
              <h3 className="feature-title">{t(`features.items.${feature.id}.title`)}</h3>
              <p className="feature-desc">{t(`features.items.${feature.id}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

FeaturesGrid.displayName = 'FeaturesGrid';

export default FeaturesGrid;
