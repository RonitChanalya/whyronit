import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { profile } from '../../data/portfolio';
import ArrowLink from '../ArrowLink';
import Reveal from '../Reveal';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(profile.email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="contact section" aria-labelledby="contact-title">
      <Reveal className="section-label light"><span>06</span> Contact</Reveal>
      <Reveal><h2 id="contact-title">LOOKING FOR A<br />SOFTWARE<br />ENGINEER?</h2></Reveal>
      <div className="contact-bottom">
        <Reveal><p>Let’s talk.</p></Reveal>
        <Reveal delay={0.06} className="contact-actions">
          <a className="email-link" href={`mailto:${profile.email}`}>{profile.email}</a>
          <button className="copy-button" type="button" onClick={copyEmail} aria-label="Copy email address">
            {copied ? <Check size={16} /> : <Copy size={16} />} {copied ? 'Copied' : 'Copy'}
          </button>
          <ArrowLink href={profile.github}>GitHub</ArrowLink>
          {profile.linkedin && <ArrowLink href={profile.linkedin}>LinkedIn</ArrowLink>}
        </Reveal>
      </div>
    </section>
  );
}
