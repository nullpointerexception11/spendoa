import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languages = [
    { code: 'tr', name: 'Türkçe', flag: 'https://flagcdn.com/w40/tr.png' },
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/us.png' },
    { code: 'az', name: 'Azərbaycan', flag: 'https://flagcdn.com/w40/az.png' },
    { code: 'de', name: 'Deutsch', flag: 'https://flagcdn.com/w40/de.png' },
    { code: 'fr', name: 'Français', flag: 'https://flagcdn.com/w40/fr.png' },
    { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
    { code: 'it', name: 'Italiano', flag: 'https://flagcdn.com/w40/it.png' },
    { code: 'nl', name: 'Nederlands', flag: 'https://flagcdn.com/w40/nl.png' },
    { code: 'no', name: 'Norsk', flag: 'https://flagcdn.com/w40/no.png' },
    { code: 'da', name: 'Dansk', flag: 'https://flagcdn.com/w40/dk.png' },
    { code: 'sv', name: 'Svenska', flag: 'https://flagcdn.com/w40/se.png' },
    { code: 'fi', name: 'Suomi', flag: 'https://flagcdn.com/w40/fi.png' },
    { code: 'hu', name: 'Magyar', flag: 'https://flagcdn.com/w40/hu.png' },
    { code: 'pl', name: 'Polski', flag: 'https://flagcdn.com/w40/pl.png' },
    { code: 'pt', name: 'Português', flag: 'https://flagcdn.com/w40/pt.png' },
    { code: 'el', name: 'Ελληνικά', flag: 'https://flagcdn.com/w40/gr.png' },
    { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
    { code: 'ar', name: 'العربية', flag: 'https://flagcdn.com/w40/sa.png' },
    { code: 'id', name: 'Bahasa Indonesia', flag: 'https://flagcdn.com/w40/id.png' },
    { code: 'bn', name: 'বাংলা', flag: 'https://flagcdn.com/w40/bd.png' },
    { code: 'vi', name: 'Tiếng Việt', flag: 'https://flagcdn.com/w40/vn.png' },
    { code: 'th', name: 'ไทย', flag: 'https://flagcdn.com/w40/th.png' },
    { code: 'ja', name: '日本語', flag: 'https://flagcdn.com/w40/jp.png' },
    { code: 'ko', name: '한국어', flag: 'https://flagcdn.com/w40/kr.png' },
    { code: 'hi', name: 'हिन्दी', flag: 'https://flagcdn.com/w40/in.png' }
  ];

  const currentLanguage = languages.find(l => l.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/app_icon.png" alt="Spendoa Logo" className="logo-icon-img" />
          <span className="logo-text">Spendoa</span>
        </Link>

        <div className="nav-actions desktop-only">
          <div className="lang-selector">
            <button 
              className="lang-btn" 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
            >
              <img src={currentLanguage.flag} alt={currentLanguage.name} className="lang-flag-img" />
              <span>{currentLanguage.code.toUpperCase()}</span>
              <ChevronDown size={14} />
            </button>
            {langMenuOpen && (
              <div className="lang-dropdown">
                {languages.map(lang => (
                  <button 
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)} 
                    className={i18n.language === lang.code ? 'active' : ''}
                  >
                    <img src={lang.flag} alt={lang.name} className="lang-flag-img" />
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
              {languages.map(lang => (
                <button 
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)} 
                  className={`btn ${i18n.language === lang.code ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                >
                  <img src={lang.flag} alt={lang.name} className="lang-flag-img" />
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

export default Navbar;
