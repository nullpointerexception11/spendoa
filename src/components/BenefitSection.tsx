import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle2, Target } from 'lucide-react';
import './BenefitSection.css';

const BenefitSection = memo(() => {
  const { t } = useTranslation();

  const whoItems = useMemo(() => Object.keys(t('whoIsItFor.items', { returnObjects: true })), [t]);
  const whyItems = useMemo(() => Object.keys(t('whyUs.items', { returnObjects: true })), [t]);

  return (
    <section className="section benefits-section">
      <div className="container">
        <div className="benefits-grid">
          {/* Who is it for */}
          <motion.div 
            className="benefit-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="benefit-header">
              <Target className="benefit-icon text-primary" size={32} />
              <h2 className="benefit-title">{t('whoIsItFor.title')}</h2>
            </div>
            <ul className="benefit-list">
              {whoItems.map((key) => (
                <li key={key} className="benefit-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{t(`whoIsItFor.items.${key}`)}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Why this app */}
          <motion.div 
            className="benefit-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="benefit-header">
              <CheckCircle2 className="benefit-icon text-primary" size={32} />
              <h2 className="benefit-title">{t('whyUs.title')}</h2>
            </div>
            <ul className="benefit-list">
              {whyItems.map((key) => (
                <li key={key} className="benefit-item">
                  <CheckCircle2 size={18} className="check-icon" />
                  <span>{t(`whyUs.items.${key}`)}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

BenefitSection.displayName = 'BenefitSection';

export default BenefitSection;
