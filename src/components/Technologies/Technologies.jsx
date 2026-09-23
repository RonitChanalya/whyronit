import { technologies } from '../../data/portfolio';
import Reveal from '../Reveal';

export default function Technologies() {
  return (
    <section className="technologies section" aria-labelledby="tech-title">
      <Reveal className="section-label"><span>04</span> Toolkit</Reveal>
      <div className="tech-head">
        <Reveal><h2 id="tech-title">The stack behind<br />the work.</h2></Reveal>
        <Reveal delay={0.06}><p>A working toolkit shaped by the systems I’ve built.</p></Reveal>
      </div>
      <Reveal className="tech-list">
        {technologies.map((group, index) => (
          <div className="tech-row" key={group.category}>
            <span className="tech-index">0{index + 1}</span>
            <h3>{group.category}</h3>
            <p>{group.items.join(' · ')}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
