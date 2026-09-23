import { timeline } from '../../data/portfolio';
import Reveal from '../Reveal';

export default function Timeline() {
  return (
    <section className="timeline section" aria-labelledby="timeline-title">
      <Reveal className="section-label"><span>05</span> Along the way</Reveal>
      <Reveal><h2 id="timeline-title">Certification,<br />competition & community.</h2></Reveal>
      <Reveal className="timeline-list">
        {timeline.map((item, index) => (
          <article className="timeline-item" key={`${item.title}-${item.date}`}>
            <span className="timeline-date">{item.date}</span>
            <div><p className="eyebrow">{item.type}</p><h3>{item.title}</h3><p>{item.organization}</p></div>
            <span className="timeline-num">0{index + 1}</span>
          </article>
        ))}
      </Reveal>
    </section>
  );
}
