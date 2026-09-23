import { motion, useReducedMotion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { profile, resumeUrl } from '../../data/portfolio';
import ArrowLink from '../ArrowLink';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const line = (delay) => reduceMotion ? {} : {
    initial: { y: '110%' },
    animate: { y: 0 },
    transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] },
  };

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-kicker">
        <span>Backend · Full-stack · AI/ML</span>
        <span>Software Engineer</span>
      </div>
      <h1 id="hero-title" className="hero-title" aria-label="Ronit Chanalya">
        <span className="hero-line"><motion.span {...line(0.05)}>RONIT</motion.span></span>
        <span className="hero-line hero-line-bottom"><motion.span {...line(0.16)}>CHANALYA</motion.span></span>
      </h1>
      <div className="hero-foot">
        <div className="hero-positioning">
          <p>{profile.summary}</p>
          <span>{profile.context}</span>
        </div>
        <ul className="hero-proof-list" aria-label="Selected engineering highlights">
          {profile.proofPoints.map((point) => <li key={point}>{point}</li>)}
        </ul>
        <div className="hero-actions">
          <a className="primary-cta" href="#work">View work <ArrowDown size={17} /></a>
          <ArrowLink href={resumeUrl}>Résumé</ArrowLink>
          <ArrowLink href={profile.github}>GitHub</ArrowLink>
          {profile.linkedin && <ArrowLink href={profile.linkedin}>LinkedIn</ArrowLink>}
        </div>
      </div>
    </section>
  );
}
