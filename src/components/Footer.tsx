
import { Leaf, Mail, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Research: [
      { name: 'Latest Papers', href: '/research' },
      { name: 'AI Tools', href: '/ai-tools' },
      { name: 'Data & Insights', href: '/research#data' },
      { name: 'Methodology', href: '/research#methodology' },
    ],
    Topics: [
      { name: 'Sustainable Finance', href: '/topics/sustainable-finance' },
      { name: 'ESG Investing', href: '/topics/esg' },
      { name: 'Climate Risk', href: '/topics/climate-risk' },
      { name: 'Green Bonds', href: '/topics/green-bonds' },
    ],
    Resources: [
      { name: 'About', href: '/about' },
      { name: 'Speaking', href: '/speaking' },
      { name: 'Media Kit', href: '/media' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Email', href: 'mailto:duy@example.com', icon: Mail },
  ];

  return (
    <footer className="bg-gates-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-white">
                Duy Nguyen
              </span>
            </div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Finance professional specializing in the intersection of Finance, 
              AI, and Sustainable Finance. Advancing thought leadership in ESG 
              investing and green policy.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors group"
                  aria-label={social.name}
                >
                  <social.icon className="h-4 w-4 text-gray-300 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-4">
              <h3 className="font-semibold text-sm uppercase tracking-wider text-white">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Duy Nguyen. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"
              >
                Sitemap
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
