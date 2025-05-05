import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Define base styles for homepage (Matrix theme)
  const homeNavBg = 'bg-black/50 backdrop-blur-sm py-5';
  const homeLinkColor = 'text-white hover:text-green-400'; // Use Matrix green for hover
  const homeTitleColor = 'text-white';
  const homeMobileMenuBg = 'bg-black/80 backdrop-blur-sm';

  // Define styles for other pages (standard theme)
  const standardNavBg = 'bg-white shadow-md py-3';
  const standardLinkColor = 'text-gray-600 hover:text-blue-600';
  const standardTitleColor = 'text-blue-600';
  const standardMobileMenuBg = 'bg-white';

  // Apply styles based only on whether it's the homepage
  const navBgClass = isHomePage ? homeNavBg : standardNavBg;
  const linkColorClass = isHomePage ? homeLinkColor : standardLinkColor;
  const titleColorClass = isHomePage ? homeTitleColor : standardTitleColor;
  const mobileMenuBgClass = isHomePage ? homeMobileMenuBg : standardMobileMenuBg;

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navBgClass}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link 
              to="/" 
              className={`text-2xl font-bold ${titleColorClass}`}
            >
              不知的AI冲浪录
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${linkColorClass} transition-colors`}>
              首页
            </Link>
            <Link to="/blog" className={`${linkColorClass} transition-colors`}>
              博客
            </Link>
            <Link to="/works" className={`${linkColorClass} transition-colors`}>
              作品
            </Link>
            <Link to="/about" className={`${linkColorClass} transition-colors`}>
              关于
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`${isHomePage && !isScrolled ? 'text-white' : 'text-gray-600'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className={`md:hidden py-4 ${mobileMenuBgClass}`}>
          <div className="flex flex-col space-y-4 px-4">
            <Link
              to="/"
              className={`${linkColorClass} transition-colors`}
              onClick={toggleMenu}
            >
              首页
            </Link>
            <Link
              to="/blog"
              className={`${linkColorClass} transition-colors`}
              onClick={toggleMenu}
            >
              博客
            </Link>
            <Link
              to="/works"
              className={`${linkColorClass} transition-colors`}
              onClick={toggleMenu}
            >
              作品
            </Link>
            <Link
              to="/about"
              className={`${linkColorClass} transition-colors`}
              onClick={toggleMenu}
            >
              关于
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}