
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Home, User, BookOpen, Lightbulb, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingNav } from '@/components/FloatingNav';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: <Home className="h-4 w-4" /> },
    { name: 'About Me', href: '/about', icon: <User className="h-4 w-4" /> },
    { name: 'Blog', href: '/research', icon: <BookOpen className="h-4 w-4" /> },
    { name: 'Insights', href: '/future-directions', icon: <Lightbulb className="h-4 w-4" /> },
    { name: 'Contact', href: '/contact', icon: <Mail className="h-4 w-4" /> },
  ];

  const floatingNavItems = navigation.map(item => ({
    name: item.name,
    link: item.href,
    icon: item.icon
  }));

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Floating Navigation */}
      <FloatingNav navItems={floatingNavItems} />
      
      {/* Original Header - Hidden but kept for mobile fallback */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 lg:hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg gradient-green">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <span className="font-semibold text-xl text-gradient">
                Duy Nguyen
              </span>
            </Link>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t">
              <nav className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-sm font-inter font-medium transition-colors hover:text-primary flex items-center space-x-2 ${
                      isActive(item.href) ? 'text-primary' : 'text-muted-foreground'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    <span>{item.name}</span>
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
