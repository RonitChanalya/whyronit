import Reveal from '../Reveal';

const disciplines = ['AI/ML Projects', 'Full-stack products', 'Backend Systems'];

export default function Intro() {
  return (
    <section className="intro section" aria-labelledby="intro-title">
      <Reveal className="section-label"><span>01</span> Introduction</Reveal>
      <div className="intro-grid">
        <Reveal><h2 id="intro-title">I’m Ronit.</h2></Reveal>
        <Reveal delay={0.08} className="intro-copy">
          <p>A Computer Science student at VIT-AP, focused on the engineering beneath useful software.</p>
          <div className="discipline-list">
            {disciplines.map((item, index) => <div key={item}><span>0{index + 1}</span>{item}</div>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
