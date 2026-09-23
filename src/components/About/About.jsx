import { education } from '../../data/portfolio';
import Reveal from '../Reveal';

export default function About() {
  return (
    <section id="about" className="about section" aria-labelledby="about-title">
      <Reveal className="section-label light"><span>03</span> About</Reveal>
      <div className="about-grid">
        <Reveal>
          <h2 id="about-title">Systems, products<br />& applied AI.</h2>
        </Reveal>
        <Reveal delay={0.08} className="about-copy">
          <p>I’m a Computer Science and Engineering student interested in building complete systems from backend architecture and APIs to thoughtful product interfaces.</p>
          <p>My AI & ML specialization informs the tools I build, while my core focus stays on reliable software engineering.</p>
        </Reveal>
      </div>
      <Reveal className="education-card">
        <div><span className="eyebrow">Education</span><h3>{education.degree}</h3><p>{education.specialization}</p></div>
        <div><span>{education.institution}</span><span>{education.period}</span></div>
        <div className="cgpa"><small>CGPA</small><strong>{education.cgpa}</strong></div>
      </Reveal>
    </section>
  );
}
