import React, { useEffect, useState, useMemo, useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Star, Download } from 'lucide-react';
import LazyImage from './LazyImage';
import './Testimonials.css';

interface Review {
  id: string;
  userName: string;
  score: number;
  text: string;
  date: string;
  thumbsUp: number;
  replyText: string | null;
  replyDate: string | null;
}

interface AppInfo {
  score: number | null;
  ratings: number;
  reviews: number;
  installs: string;
  minInstalls: number;
  maxInstalls: number;
}

// Memoized star rating component
const StarRating = memo<{ score: number; size?: number }>(({ score, size = 16 }) => (
  <div className="stars">
    {[0, 1, 2, 3, 4].map((i) => (
      <Star
        key={i}
        size={size}
        fill={i < score ? '#fbbf24' : 'transparent'}
        color={i < score ? '#fbbf24' : '#d1d5db'}
      />
    ))}
  </div>
));

const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [appInfo, setAppInfo] = useState<AppInfo | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    
    Promise.all([
      fetch('/reviews.json', { signal: controller.signal })
        .then(res => res.json())
        .then((data: Review[]) => setReviews(data))
        .catch(err => !controller.signal.aborted && console.error('Failed to load reviews:', err)),
      
      fetch('/app-info.json', { signal: controller.signal })
        .then(res => res.json())
        .then((data: AppInfo) => setAppInfo(data))
        .catch(err => !controller.signal.aborted && console.error('Failed to load app info:', err)),
    ]);

    return () => controller.abort();
  }, []);

  const formatDate = useCallback((dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('tr-TR', { year: 'numeric', month: 'long', day: 'numeric' });
  }, []);

  const displayedReviews = useMemo(() => reviews.slice(0, displayCount), [reviews, displayCount]);

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
          {displayedReviews.map((review, index) => (
            <motion.div 
              key={review.id}
              className="testimonial-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
            >
              <div className="review-header">
                <StarRating score={review.score} size={16} />
                <span className="review-date">{formatDate(review.date)}</span>
              </div>

              <p className="testimonial-text">"{review.text}"</p>

              <div className="testimonial-author">
                <div className="author-avatar">
                  {review.userName.charAt(0)}
                </div>
                <div>
                  <h4 className="author-name">{review.userName}</h4>
                  <p className="author-role">Google Play Kullanıcısı</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Play Store Stats Card */}
        {appInfo && (
          <motion.div 
            className="playstore-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <LazyImage src="/google-play-icon.svg" alt="Google Play" className="playstore-card-icon" />
            <div className="playstore-card-info">
              <span className="playstore-card-label">Google Play</span>
              <div className="playstore-card-rating">
                <span className="playstore-card-score">{appInfo.score}</span>
                <StarRating score={Math.round(appInfo.score || 0)} size={14} />
                <span className="playstore-card-reviews">({appInfo.ratings})</span>
              </div>
            </div>
            <div className="playstore-card-downloads">
              <Download size={16} />
              <span>{appInfo.installs}</span>
            </div>
            <a 
              href="https://play.google.com/store/apps/details?id=com.oguzdogdu.budgetpulse&hl=tr"
              target="_blank"
              rel="noopener noreferrer"
              className="playstore-card-button"
            >
              Mağazada Gör
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

Testimonials.displayName = 'Testimonials';

export default memo(Testimonials);
