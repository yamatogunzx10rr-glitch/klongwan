import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Swiss Resort</h3>
            <p className="text-white/80 leading-relaxed mb-4">
              Experience luxury and tranquility at our world-class beach resort. Your perfect escape awaits.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#rooms" className="text-white/80 hover:text-accent transition-colors">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Dining
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Spa & Wellness
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Concierge
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Room Service
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Events & Meetings
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-accent transition-colors">
                  Loyalty Program
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-accent" />
                <p className="text-white/80">
                  PO Box 16122 Collins Street<br />
                  West Victoria 8007, Australia
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <Phone className="w-5 h-5 flex-shrink-0 text-accent" />
                <a href="tel:+61383766284" className="text-white/80 hover:text-accent transition-colors">
                  +61 3 8376 6284
                </a>
              </div>
              <div className="flex gap-3 items-center">
                <Mail className="w-5 h-5 flex-shrink-0 text-accent" />
                <a href="mailto:info@swiss-resort.com" className="text-white/80 hover:text-accent transition-colors">
                  info@swiss-resort.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <div className="grid md:grid-cols-2 gap-4 text-center md:text-left">
            <p className="text-white/60 text-sm">
              © {currentYear} Swiss Resort. All rights reserved.
            </p>
            <div className="flex gap-6 justify-center md:justify-end text-sm">
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-white/60 hover:text-accent transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
