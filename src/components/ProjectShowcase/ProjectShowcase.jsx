import { Github } from 'lucide-react';
import { projects } from '../../data/portfolio';
import ArrowLink from '../ArrowLink';
import Reveal from '../Reveal';
import ProjectVisual from './ProjectVisual';

function ProjectBlock({ project }) {
  const description = project.showcase?.description ?? project.description;
  const stack = project.showcase?.stack ?? project.stack;
  const metrics = project.showcase?.metrics ?? project.metrics;

  return (
    <article className={`project-block project-${project.accent}`}>
      <Reveal className="project-heading">
        <span className="project-number">{project.number}</span>
        <div>
          <p className="eyebrow">{project.category}</p>
          <h3>{project.title}</h3>
          {project.featuredNote && <p className="project-featured-note">{project.featuredNote}</p>}
        </div>
      </Reveal>
      <Reveal className="project-preview" delay={0.05}><ProjectVisual project={project} /></Reveal>
      <div className="project-details">
        <Reveal><p className="project-description">{description}</p></Reveal>
        <Reveal delay={0.06} className="project-meta">
          <ul className="stack-list" aria-label="Technology stack">
            {stack.map((tech) => <li key={tech}>{tech}</li>)}
          </ul>
          <div className="metric-row">
            {metrics.map((metric) => <div key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></div>)}
          </div>
          <div className="project-links">
            <ArrowLink to={`/projects/${project.slug}`}>View case study</ArrowLink>
            {project.links.github && project.links.githubPublic !== false && <a className="icon-link" href={project.links.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><Github size={18} /> GitHub</a>}
            {project.links.live && <ArrowLink href={project.links.live}>Live demo</ArrowLink>}
          </div>
        </Reveal>
      </div>
    </article>
  );
}

export default function ProjectShowcase() {
  return (
    <section id="work" className="work section" aria-labelledby="work-title">
      <Reveal className="section-label"><span>02</span> Selected work</Reveal>
      <Reveal><h2 id="work-title" className="section-title">Projects across<br />the software stack.</h2></Reveal>
      <div className="project-list">{projects.map((project) => <ProjectBlock key={project.slug} project={project} />)}</div>
    </section>
  );
}
