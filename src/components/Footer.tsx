import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { MessageCircle, Globe, Share2, Mail } from 'lucide-react';
import './Footer.css';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer section">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="logo mb-4">
              <div className="logo-icon"></div>
              <span className="logo-text">Spendoa</span>
            </div>
            <p className="footer-desc">
              {t('footer.description')}
            </p>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">{t('footer.navigation')}</h4>
            <ul className="footer-links">
              <li><a href="#features">{t('nav.features')}</a></li>
              <li><a href="#testimonials">{t('nav.testimonials')}</a></li>
              <li><Link to="/faq">{t('footer.faq')}</Link></li>
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-heading">{t('footer.contact')}</h4>
            <ul className="footer-links">
              <li><a href="mailto:support@spendoa.com"><Mail size={16} /> support@spendoa.com</a></li>
              <li><a href="#feature-request">{t('footer.feature_request')}</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>{t('footer.copyright')}</p>
          <p className="made-with">Made with ❤️ for Android</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
