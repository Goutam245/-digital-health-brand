import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTreatments, setShowTreatments] = useState(false);

  const treatments = [
    { label: 'Weight Loss (GLP-1)', href: '/weight-loss' },
    { label: 'Sermorelin', href: '/sermorelin' },
    { label: 'NAD+ Therapy', href: '/nad-therapy' },
    { label: 'Hormone Therapy', href: '/hormone-therapy' },
  ];

  const navLinks = [
    { label: 'Treatments', href: '/treatments', hasDropdown: true },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/#faq' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border/50 transition-all duration-300">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-teal flex items-center justify-center">
              <span className="text-primary-foreground font-heading font-bold text-xl">M</span>
            </div>
            <span className="font-heading font-bold text-xl text-navy">MediCare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Treatments Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowTreatments(true)}
              onMouseLeave={() => setShowTreatments(false)}
            >
              <button className="flex items-center gap-1 font-heading font-medium text-muted-foreground hover:text-primary transition-colors duration-200">
                Treatments
                <ChevronDown className={`w-4 h-4 transition-transform ${showTreatments ? 'rotate-180' : ''}`} />
              </button>
              {showTreatments && (
                <div className="absolute top-full left-0 pt-2 w-56">
                  <div className="bg-card rounded-xl shadow-large border border-border/50 py-2">
                    {treatments.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className="block px-4 py-2 text-small font-heading text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="flex items-center gap-1 font-heading font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:1-800-MEDICARE" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-heading font-medium text-small">1-800-MEDICARE</span>
            </a>
            <Button variant="outline" className="font-heading">
              Sign In
            </Button>
            <Button className="font-heading bg-primary hover:bg-primary/90">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card border-b border-border shadow-large animate-fade-in">
          <nav className="container-custom py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-heading font-medium text-lg text-foreground hover:text-primary transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <hr className="border-border my-2" />
            <Button variant="outline" className="font-heading w-full">
              Sign In
            </Button>
            <Button className="font-heading bg-primary hover:bg-primary/90 w-full">
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
