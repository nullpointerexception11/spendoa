import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ArrowLeft } from 'lucide-react';
import './FAQ.css';

interface FAQItemProps {
  q: string;
  a: string;
  index: number;
}

const FAQAccordionItem: React.FC<FAQItemProps> = ({ q, a, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
    >
      <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{q}</span>
        <ChevronDown
          size={20}
          className={`faq-chevron ${isOpen ? 'faq-chevron--open' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="faq-answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p>{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ: React.FC = () => {
  const { t } = useTranslation();

  // Get categories from translation
  const categories = ['general', 'accounts', 'transactions', 'security', 'premium'];

  return (
    <section id="faq" className="section faq-section">
      <div className="container">
        <Link to="/" className="faq-back-btn">
          <ArrowLeft size={20} />
          <span>{t('faq.back')}</span>
        </Link>

        <div className="section-header text-center mb-16">
          <motion.h2
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('faq.title')}
          </motion.h2>
          <motion.p
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('faq.subtitle')}
          </motion.p>
        </div>

        <div className="faq-categories">
          {categories.map((catKey) => {
            const catItems = t(`faq.categories.${catKey}.items`, { returnObjects: true }) as any[];
            return (
              <div key={catKey} className="faq-category">
                <h3 className="faq-category-title">{t(`faq.categories.${catKey}.title`)}</h3>
                <div className="faq-list">
                  {catItems.map((item, index) => (
                    <FAQAccordionItem key={index} q={item.q} a={item.a} index={index} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
