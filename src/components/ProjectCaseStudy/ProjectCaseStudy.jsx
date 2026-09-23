import { ArrowLeft, ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/portfolio';
import ArrowLink from '../ArrowLink';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import ProjectVisual from '../ProjectShowcase/ProjectVisual';
import Reveal from '../Reveal';
import VideoStreamingCaseStudy from './VideoStreamingCaseStudy';

export default function ProjectCaseStudy({ project }) {
  if (project.slug === 'video-streaming') return <VideoStreamingCaseStudy project={project} />;

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <div id="top" className={`case-page case-${project.accent}`}>
      <Navbar />
      <main id="main-content">
        <header className="case-hero section">
          <div className="case-meta"><span>{project.number} / 03</span><span>{project.category}</span></div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          {project.featuredNote && <p className="case-featured-note">{project.featuredNote}</p>}
          <div className="case-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
        </header>
        <div className="case-visual-wrap section"><ProjectVisual project={project} compact /></div>

        <section className="case-section section" aria-labelledby="overview-title">
          <Reveal className="case-label">01 / Overview</Reveal>
          <Reveal className="case-copy"><h2 id="overview-title">The project</h2><p>{project.overview}</p></Reveal>
        </section>
        <section className="case-section section" aria-labelledby="problem-title">
          <Reveal className="case-label">02 / Problem</Reveal>
          <Reveal className="case-copy"><h2 id="problem-title">What needed solving</h2><p>{project.problem}</p></Reveal>
        </section>
        <section className="case-section section" aria-labelledby="built-title">
          <Reveal className="case-label">03 / What I built</Reveal>
          <Reveal className="case-copy"><h2 id="built-title">System scope</h2><ul className="built-list">{project.built.map((item) => <li key={item}>{item}</li>)}</ul></Reveal>
        </section>
        <section className="case-flow section" aria-labelledby="flow-title">
          <Reveal className="case-label">04 / Architecture</Reveal>
          <Reveal><h2 id="flow-title">{project.architectureTitle}</h2></Reveal>
          <div className="flow-grid">
            {project.workflow.map((item, i) => <Reveal className="flow-step" key={item.label} delay={i * 0.025}><span>0{i + 1}</span><p>{item.label}</p><small>{item.detail}</small>{i < project.workflow.length - 1 && <ArrowRight aria-hidden="true" />}</Reveal>)}
          </div>
        </section>
        <section className="case-section section" aria-labelledby="decisions-title">
          <Reveal className="case-label">05 / Technical decisions</Reveal>
          <Reveal className="case-copy"><h2 id="decisions-title">Engineering choices</h2><ol className="decision-list">{project.decisions.map((item) => <li key={item}>{item}</li>)}</ol></Reveal>
        </section>
        <section className="case-section case-outcome section" aria-labelledby="outcome-title">
          <Reveal className="case-label">06 / Outcome</Reveal>
          <Reveal className="case-copy"><h2 id="outcome-title">The result</h2><p>{project.outcome}</p><div className="case-actions">{project.links.github && project.links.githubPublic !== false && <a className="icon-link" href={project.links.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>}{project.links.live && <ArrowLink href={project.links.live}>Live project</ArrowLink>}</div></Reveal>
        </section>
        <nav className="project-pagination section" aria-label="Project navigation">
          <Link to={`/projects/${previous.slug}`}><ArrowLeft /><span><small>Previous</small>{previous.shortTitle}</span></Link>
          <Link to={`/projects/${next.slug}`}><span><small>Next</small>{next.shortTitle}</span><ArrowRight /></Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
