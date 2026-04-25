import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const users = ['u1', 'u2', 'u3'];

  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <div className="section-header text-center mb-16">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {t('testimonials.title')}
          </motion.h2>
          <motion.p 
            className="section-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {t('testimonials.subtitle')}
          </motion.p>
        </div>

        <div className="testimonials-grid">
          {users.map((user, index) => (
            <motion.div 
              key={user}
              className="testimonial-card glass-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Quote className="quote-icon" size={40} />
              
              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="var(--accent-color)" color="var(--accent-color)" />
                ))}
              </div>
              
              <p className="testimonial-text">"{t(`testimonials.users.${user}.text`)}"</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  {t(`testimonials.users.${user}.name`).charAt(0)}
                </div>
                <div>
                  <h4 className="author-name">{t(`testimonials.users.${user}.name`)}</h4>
                  <p className="author-role">{t(`testimonials.users.${user}.role`)}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="store-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="glass-card stat-card">
            <h3 className="stat-number">4.8</h3>
            <div className="stars justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <p className="text-muted">Google Play • 10k+ reviews</p>
          </div>
          <div className="glass-card stat-card">
            <h3 className="stat-number">4.9</h3>
            <div className="stars justify-center mb-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={20} fill="#fbbf24" color="#fbbf24" />
              ))}
            </div>
            <p className="text-muted">App Store • 15k+ reviews</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
