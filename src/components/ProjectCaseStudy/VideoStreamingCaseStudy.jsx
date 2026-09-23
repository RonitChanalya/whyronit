import { ArrowLeft, ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from '../../data/portfolio';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Reveal from '../Reveal';

function TechnicalFlow({ items, className = '' }) {
  return (
    <ol className={`video-technical-flow ${className}`}>
      {items.map((item, index) => (
        <Reveal as="li" key={item.label} delay={index * 0.035}>
          <span>{String(index + 1).padStart(2, '0')}</span>
          <strong>{item.label}</strong>
          <small>{item.detail}</small>
          {index < items.length - 1 && <ArrowRight aria-hidden="true" />}
        </Reveal>
      ))}
    </ol>
  );
}

export default function VideoStreamingCaseStudy({ project }) {
  const details = project.caseStudy;
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <div id="top" className="case-page case-olive video-case-page">
      <Navbar />
      <main id="main-content">
        <header className="case-hero section video-case-hero">
          <div className="case-meta"><span>{project.number} / 03</span><span>{details.role}</span></div>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="video-case-hero-foot">
            <div className="case-stack" aria-label="Primary technologies"><span>Node.js</span><span>Express</span></div>
            <a className="icon-link" href={project.links.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a>
          </div>
        </header>

        <section className="case-section section" aria-labelledby="video-overview-title">
          <Reveal className="case-label">01 / Project overview</Reveal>
          <Reveal className="case-copy"><h2 id="video-overview-title">The backend</h2><p>{details.overview}</p></Reveal>
        </section>

        <section className="video-case-dark" aria-labelledby="video-architecture-title">
          <div className="section video-case-dark-inner">
            <Reveal className="case-label">02 / System architecture</Reveal>
            <Reveal><h2 id="video-architecture-title">Request to application state.</h2></Reveal>
            <div className="video-architecture-entry"><span>Client request</span><i aria-hidden="true" /><strong>Express application</strong></div>
            <ol className="video-architecture-grid">
              {details.architecture.map((layer, layerIndex) => (
                <Reveal as="li" key={layer.label} delay={layerIndex * 0.04}>
                  <span>{String(layerIndex + 1).padStart(2, '0')} / {layer.label}</span>
                  <h3>{layer.title}</h3>
                  <p>{layer.detail}</p>
                  {layerIndex < details.architecture.length - 1 && <ArrowRight aria-hidden="true" />}
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="video-case-section section" aria-labelledby="video-auth-title">
          <Reveal className="case-label">03 / Authentication &amp; security</Reveal>
          <div className="video-case-heading-grid">
            <Reveal><h2 id="video-auth-title">Identity across the request lifecycle.</h2></Reveal>
            <Reveal><p>Password storage, token creation, cookie transport, and protected-route verification are implemented as separate responsibilities.</p></Reveal>
          </div>
          <TechnicalFlow items={details.authFlow} />
          <div className="video-note-grid">
            {details.authNotes.map((note, noteIndex) => <Reveal key={note} delay={noteIndex * 0.04}><span>0{noteIndex + 1}</span><p>{note}</p></Reveal>)}
          </div>
        </section>

        <section className="video-case-media" aria-labelledby="video-media-title">
          <div className="section video-case-media-inner">
            <Reveal className="case-label">04 / Media &amp; file handling</Reveal>
            <div className="video-case-heading-grid">
              <Reveal><h2 id="video-media-title">Multipart input to cloud media.</h2></Reveal>
              <Reveal><p>Multer receives files on disk, a dedicated utility forwards them to Cloudinary, and the temporary local file is removed after the upload attempt.</p></Reveal>
            </div>
            <TechnicalFlow items={details.mediaFlow} className="media-flow" />
            <ul className="video-media-notes">
              {details.mediaNotes.map((note) => <Reveal as="li" key={note}>{note}</Reveal>)}
            </ul>
          </div>
        </section>

        <section className="video-case-section section" aria-labelledby="video-database-title">
          <Reveal className="case-label">05 / Database</Reveal>
          <div className="video-case-heading-grid">
            <Reveal><h2 id="video-database-title">Documents with connected context.</h2></Reveal>
            <Reveal><p>Mongoose schemas use ObjectId references for application relationships. The strongest composed reads combine those references through populate and aggregation pipelines.</p></Reveal>
          </div>
          <div className="video-data-layout">
            <div className="video-relation-map" aria-label="Mongoose model relationships">
              {details.relationships.map((relationship, relationshipIndex) => (
                <Reveal key={`${relationship.from}-${relationship.relation}`} delay={relationshipIndex * 0.035}>
                  <strong>{relationship.from}</strong><span>{relationship.relation}</span><i aria-hidden="true" /><strong>{relationship.to}</strong>
                </Reveal>
              ))}
            </div>
            <div className="video-aggregation-list">
              {details.aggregations.map((aggregation, aggregationIndex) => (
                <Reveal key={aggregation.title} delay={aggregationIndex * 0.04}>
                  <span>0{aggregationIndex + 1}</span><h3>{aggregation.title}</h3><p>{aggregation.detail}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="video-case-features" aria-labelledby="video-features-title">
          <div className="section video-case-features-inner">
            <Reveal className="case-label">06 / Video &amp; application features</Reveal>
            <Reveal><h2 id="video-features-title">The implemented surface.</h2></Reveal>
            <div className="video-feature-grid">
              {details.features.map((group, groupIndex) => (
                <Reveal as="article" key={group.label} delay={groupIndex * 0.05}>
                  <span>0{groupIndex + 1}</span>
                  <h3>{group.label}</h3>
                  {group.note && <p>{group.note}</p>}
                  <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="video-case-section section" aria-labelledby="video-highlights-title">
          <Reveal className="case-label">07 / Engineering highlights</Reveal>
          <div className="video-case-heading-grid">
            <Reveal><h2 id="video-highlights-title">What the code demonstrates.</h2></Reveal>
            <ol className="video-highlight-list">
              {details.highlights.map((highlight, highlightIndex) => <Reveal as="li" key={highlight} delay={highlightIndex * 0.035}><span>0{highlightIndex + 1}</span><p>{highlight}</p></Reveal>)}
            </ol>
          </div>
        </section>

        <section className="video-case-tech section" aria-labelledby="video-tech-title">
          <Reveal className="case-label">08 / Technologies</Reveal>
          <Reveal><h2 id="video-tech-title">Verified in the repository.</h2></Reveal>
          <div className="video-tech-list">{details.technologies.map((technology, techIndex) => <Reveal key={technology} delay={techIndex * 0.025}><span>{String(techIndex + 1).padStart(2, '0')}</span>{technology}</Reveal>)}</div>
          <Reveal className="video-case-github"><a className="icon-link" href={project.links.github} target="_blank" rel="noreferrer"><Github size={18} /> GitHub</a></Reveal>
        </section>

        <nav className="project-pagination section" aria-label="Project navigation">
          <Link to={`/projects/${previous.slug}`}><ArrowLeft /><span><small>Previous project</small>{previous.shortTitle}</span></Link>
          <Link to={`/projects/${next.slug}`}><span><small>Next project</small>{next.shortTitle}</span><ArrowRight /></Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
