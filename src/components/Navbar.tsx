import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { throttle } from '../utils/throttle';
import LazyImage from './LazyImage';
import './Navbar.css';

interface Language {
  code: string;
  name: string;
  emoji: string;
}

const LANGUAGES: Language[] = [
  { code: 'tr', name: 'Türkçe', emoji: '🇹🇷' },
  { code: 'en', name: 'English', emoji: '🇬🇧' },
  { code: 'az', name: 'Azərbaycan', emoji: '🇦🇿' },
  { code: 'de', name: 'Deutsch', emoji: '🇩🇪' },
  { code: 'fr', name: 'Français', emoji: '🇫🇷' },
  { code: 'es', name: 'Español', emoji: '🇪🇸' },
  { code: 'it', name: 'Italiano', emoji: '🇮🇹' },
  { code: 'nl', name: 'Nederlands', emoji: '🇳🇱' },
  { code: 'no', name: 'Norsk', emoji: '🇳🇴' },
  { code: 'da', name: 'Dansk', emoji: '🇩🇰' },
  { code: 'sv', name: 'Svenska', emoji: '🇸🇪' },
  { code: 'fi', name: 'Suomi', emoji: '🇫🇮' },
  { code: 'hu', name: 'Magyar', emoji: '🇭🇺' },
  { code: 'pl', name: 'Polski', emoji: '🇵🇱' },
  { code: 'pt', name: 'Português', emoji: '🇵🇹' },
  { code: 'el', name: 'Ελληνικά', emoji: '🇬🇷' },
  { code: 'ru', name: 'Русский', emoji: '🇷🇺' },
  { code: 'ar', name: 'العربية', emoji: '🇸🇦' },
  { code: 'id', name: 'Bahasa Indonesia', emoji: '🇮🇩' },
  { code: 'bn', name: 'বাংলা', emoji: '🇧🇩' },
  { code: 'vi', name: 'Tiếng Việt', emoji: '🇻🇳' },
  { code: 'th', name: 'ไทย', emoji: '🇹🇭' },
  { code: 'ja', name: '日本語', emoji: '🇯🇵' },
  { code: 'ko', name: '한국어', emoji: '🇰🇷' },
  { code: 'hi', name: 'हिन्दी', emoji: '🇮🇳' }
];

const Navbar: React.FC = () => {
  const { i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    const throttledScroll = throttle(handleScroll, 100);
    window.addEventListener('scroll', throttledScroll);
    return () => window.removeEventListener('scroll', throttledScroll);
  }, [handleScroll]);

  const currentLanguage = useMemo(() => LANGUAGES.find(l => l.code === i18n.language) || LANGUAGES[0], [i18n.language]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <LazyImage src="/app_icon.png" alt="Spendoa Logo" className="logo-icon-img" />
          <span className="logo-text">Spendoa</span>
        </Link>

        <div className="nav-actions desktop-only">
          <div className="lang-selector">
            <button 
              className="lang-btn" 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
            >
              <span className="lang-emoji">{currentLanguage.emoji}</span>
              <span>{currentLanguage.code.toUpperCase()}</span>
              <ChevronDown size={14} />
            </button>
            {langMenuOpen && (
              <div className="lang-dropdown">
                {LANGUAGES.map(lang => (
                  <button 
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)} 
                    className={i18n.language === lang.code ? 'active' : ''}
                  >
                    <span className="lang-emoji">{lang.emoji}</span>
                    <span className="lang-name">{lang.name}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <button 
          className="mobile-menu-btn mobile-only"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-lang-selector">
            <p>Language / Dil</p>
            <div className="flex gap-2 flex-wrap justify-center">
              {LANGUAGES.map(lang => (
                <button 
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)} 
                  className={`btn ${i18n.language === lang.code ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <span className="lang-emoji">{lang.emoji}</span>
                  <span>{lang.code.toUpperCase()}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

Navbar.displayName = 'Navbar';

export default memo(Navbar);
