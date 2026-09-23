import { ArrowUp } from 'lucide-react';
import { profile } from '../../data/portfolio';

export default function Footer() {
  return (
    <footer className="footer">
      <p>Ronit Chanalya <span>© 2026</span></p>
      <div>
        <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
        {profile.linkedin && <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
        <a href="#top">Back to top <ArrowUp size={14} /></a>
      </div>
    </footer>
  );
}
