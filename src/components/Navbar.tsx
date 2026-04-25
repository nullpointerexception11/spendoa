import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLangMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <img src="/app_icon.png" alt="Spendoa Logo" className="logo-icon-img" />
          <span className="logo-text">Spendoa</span>
        </div>

        <div className="nav-actions desktop-only">
          <div className="lang-selector">
            <button 
              className="lang-btn" 
              onClick={() => setLangMenuOpen(!langMenuOpen)}
            >
              <Globe size={18} />
              <span>{i18n.language.toUpperCase()}</span>
              <ChevronDown size={14} />
            </button>
            {langMenuOpen && (
              <div className="lang-dropdown">
                <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>English</button>
                <button onClick={() => changeLanguage('tr')} className={i18n.language === 'tr' ? 'active' : ''}>Türkçe</button>
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
            <div className="flex gap-2">
              <button onClick={() => changeLanguage('en')} className={`btn ${i18n.language === 'en' ? 'btn-primary' : 'btn-secondary'}`}>EN</button>
              <button onClick={() => changeLanguage('tr')} className={`btn ${i18n.language === 'tr' ? 'btn-primary' : 'btn-secondary'}`}>TR</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
