import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-sm shadow-md z-50">
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src="/img/logo.png" 
              alt="Sardar Vallabhbhai Patel Academy Logo" 
              className="w-12 h-12 rounded-full object-contain"
            />
            <h1 className="text-lg md:text-xl font-bold">
              <span className="text-primary">Sardar Vallabhbhai Patel</span>
              <br />
              <span className="text-secondary text-sm md:text-base">ACADEMY</span>
            </h1>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 font-medium">
            <li><Link to="/" className="hover:text-primary transition-colors">HOME</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">ABOUT US</Link></li>
            <li><Link to="/students" className="hover:text-primary transition-colors">STUDENTS</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">CONTACT</Link></li>
            <li>
              <Button className="bg-primary hover:bg-primary/90">
                DONATE
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <ul className="md:hidden flex flex-col gap-4 py-4 font-medium">
            <li><Link to="/" onClick={() => setIsMenuOpen(false)} className="block hover:text-primary">HOME</Link></li>
            <li><Link to="/about" onClick={() => setIsMenuOpen(false)} className="block hover:text-primary">ABOUT US</Link></li>
            <li><Link to="/students" onClick={() => setIsMenuOpen(false)} className="block hover:text-primary">STUDENTS</Link></li>
            <li><Link to="/contact" onClick={() => setIsMenuOpen(false)} className="block hover:text-primary">CONTACT</Link></li>
            <li>
              <Button className="w-full bg-primary hover:bg-primary/90">
                DONATE
              </Button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
