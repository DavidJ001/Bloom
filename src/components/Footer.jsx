import React, { useState } from 'react';
import { Youtube, Instagram, Music, FileText, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = ({ onNavigate }) => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // MailerLite integration would go here
    alert('Thank you for subscribing! (This is a demo)');
    setEmail('');
  };

  const socialLinks = [
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: FileText, href: '#', label: 'Substack' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Music, href: '#', label: 'Spotify' }
  ];

  const quickLinks = [
    { name: 'Home', path: 'home' },
    { name: 'About Us', path: 'about' },
    { name: 'Your Story', path: 'story' },
    { name: 'Blog', path: 'blog' },
    { name: 'Contact', path: 'contact' }
  ];

  const legalLinks = [
    { name: 'Privacy Policy', path: 'privacy' },
    { name: 'Terms of Service', path: 'terms' },
    { name: 'FAQs', path: 'faqs' }
  ];

  const branchLinks = [
    { name: 'Bloom Unbound', path: 'bloom-unbound' },
    { name: 'Bloom-a-Bean', path: 'bloom-a-bean' },
    { name: 'Resonant Resilience', path: 'resonant-resilience' },
    { name: 'Bloom in Transit', path: 'bloom-in-transit' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-bloom-teal rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="font-playfair text-xl font-semibold">
                The Bloom Umbrella
              </span>
            </div>
            <p className="text-gray-300 mb-6 text-sm">
              A purpose-driven community focused on healing, storytelling, and financial literacy.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mb-6">
              <h4 className="font-montserrat font-semibold mb-3">Stay Connected</h4>
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                  required
                />
                <Button 
                  type="submit" 
                  className="w-full bg-bloom-teal hover:bg-blue-600 text-white font-montserrat"
                >
                  Subscribe
                </Button>
              </form>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-bloom-teal transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-gray-300 hover:text-bloom-teal transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Branch Links */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Our Branches</h4>
            <ul className="space-y-2">
              {branchLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-gray-300 hover:text-bloom-teal transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Legal & Support</h4>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => onNavigate(link.path)}
                    className="text-gray-300 hover:text-bloom-teal transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>

            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Mail size={16} className="mr-2" />
                <span>hello@bloomumbrella.com</span>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-2" />
                <span>Everywhere & Anywhere</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 The Bloom Umbrella. All rights reserved. Built with love for healing and growth.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

