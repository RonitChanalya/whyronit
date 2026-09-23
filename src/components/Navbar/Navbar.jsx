import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { resumeUrl } from '../../data/portfolio';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Resume', href: resumeUrl, external: true },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const homeHref = (hash) => pathname === '/' ? hash : `/${hash}`;

  return (
    <header className={`nav-shell ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="brand" to="/" aria-label="Ronit Chanalya, home">Ronit<span>.</span></Link>
        <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)}>
          <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
          {open ? <X /> : <Menu />}
        </button>
        <div id="nav-links" className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map((link) => link.external ? (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>{link.label}</a>
          ) : (
            <a key={link.label} href={homeHref(link.href)} onClick={() => setOpen(false)}>{link.label}</a>
          ))}
        </div>
      </nav>
    </header>
  );
}
