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
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' }
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
              <Globe size={18} />
              <span>{currentLanguage.flag} {currentLanguage.code.toUpperCase()}</span>
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
                    <span className="lang-flag">{lang.flag}</span>
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
            <p>Language / Dil / Idioma</p>
            <div className="flex gap-2 flex-wrap justify-center">
              {languages.map(lang => (
                <button 
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)} 
                  className={`btn ${i18n.language === lang.code ? 'btn-primary' : 'btn-secondary'}`}
                >
                  {lang.flag} {lang.code.toUpperCase()}
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
