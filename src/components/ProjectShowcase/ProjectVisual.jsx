import { motion, useReducedMotion } from 'framer-motion';

const backendModules = [
  {
    number: '01',
    label: 'Authentication',
    title: 'Identity & sessions',
    path: 'bcrypt → JWT',
    details: ['Access + refresh tokens', 'httpOnly cookies', 'verifyJWT middleware'],
  },
  {
    number: '02',
    label: 'Media handling',
    title: 'Upload pipeline',
    path: 'Multer → Cloudinary',
    details: ['Local temp storage', 'Video + image uploads', 'Thumbnail + deletion'],
  },
  {
    number: '03',
    label: 'Data layer',
    title: 'Application state',
    path: 'MongoDB → Mongoose',
    details: ['User + video schemas', 'References + populate', 'Aggregation lookups'],
  },
];

function VideoStreamingShowcase() {
  const reduceMotion = useReducedMotion();
  const reveal = (delay = 0) => reduceMotion ? {} : {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.45 },
    transition: { duration: 0.42, delay, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <div className="project-visual visual-video visual-video-showcase" aria-label="Video platform backend architecture">
      <div className="stream-showcase-head">
        <motion.div className="backend-api-meta" {...reveal()}>
          <span>Node.js / Express</span>
          <strong>REST backend</strong>
          <code>/api/v1/users · /api/v1/videos</code>
        </motion.div>
        <motion.div className="backend-api-mark" {...reveal(0.1)}>
          <strong>API</strong>
          <span>v1</span>
        </motion.div>
      </div>

      <motion.div className="backend-entry" {...reveal(0.14)}>
        <span>Client request</span>
        <i aria-hidden="true" />
        <span>CORS · JSON · cookies</span>
        <i aria-hidden="true" />
        <strong>Express router</strong>
      </motion.div>

      <div className="backend-module-grid">
        {backendModules.map((module, index) => (
          <motion.article className="backend-module" key={module.label} {...reveal(0.2 + index * 0.07)}>
            <header>
              <span>{module.number}</span>
              <small>{module.label}</small>
            </header>
            <h4>{module.title}</h4>
            <code>{module.path}</code>
            <ul>
              {module.details.map((detail) => <li key={detail}>{detail}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>

      <motion.div className="backend-controller-row" {...reveal(0.42)}>
        <span>Controller layer</span>
        <div>
          <strong>Account + profile</strong>
          <strong>Video lifecycle</strong>
          <strong>Channel + watch history</strong>
        </div>
      </motion.div>

      <motion.div className="stream-stack-row" {...reveal(0.48)}>
        <span>Express</span><span>JWT</span><span>bcrypt</span><span>Multer</span><span>Cloudinary</span><span>Mongoose</span>
      </motion.div>
    </div>
  );
}

export default function ProjectVisual({ project, compact = false }) {
  if (project.image) {
    return (
      <figure className={`project-visual visual-screenshot ${compact ? 'compact' : ''}`}>
        <a className="screenshot-link" href={project.image.src} target="_blank" rel="noreferrer" aria-label={`Open full-size ${project.title} screenshot`}>
          <img
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            loading="lazy"
            decoding="async"
          />
          <span>Open full-size image ↗</span>
        </a>
      </figure>
    );
  }

  if (project.slug === 'resume-screener') {
    return (
      <div className={`project-visual visual-resume ${compact ? 'compact' : ''}`} aria-label="Abstract interface preview for Smart Resume Screener" role="img">
        <div className="visual-toolbar"><i /><i /><i /><span>candidate evaluation / batch_04</span></div>
        <div className="resume-ui">
          <div className="score-ring"><strong>8.7</strong><small>semantic fit</small></div>
          <div className="candidate-stack">
            {[92, 78, 64].map((width, index) => <div key={width}><span>0{index + 1}</span><i style={{ '--score': `${width}%` }} /></div>)}
          </div>
        </div>
        <div className="format-row"><span>PDF</span><span>DOCX</span><span>TXT</span><span>ZIP</span></div>
      </div>
    );
  }

  if (project.slug === 'securewipe') {
    return (
      <div className={`project-visual visual-wipe ${compact ? 'compact' : ''}`} aria-label="Abstract systems preview for SecureWipe" role="img">
        <div className="wipe-grid" />
        <div className="wipe-status"><span>DEVICE SANITIZATION</span><strong>VERIFIED</strong><small>RSA-PSS / SHA-256</small></div>
        <div className="wipe-disc"><span>100%</span></div>
        <div className="wipe-code">NIST.SP.800-88<br />CERT / 250+</div>
      </div>
    );
  }

  if (!compact) return <VideoStreamingShowcase />;

  return (
    <div className={`project-visual visual-video ${compact ? 'compact' : ''}`} aria-label="Abstract streaming infrastructure preview" role="img">
      <div className="stream-meta"><span>HTTP / 1.1</span><strong>206</strong><small>PARTIAL CONTENT</small></div>
      <div className="stream-frames">{Array.from({ length: 11 }).map((_, i) => <i key={i} />)}</div>
      <div className="stream-line"><i /><span>bytes 1048576—2097151</span></div>
      <div className="stream-foot"><span>JWT AUTH</span><span>RANGE REQUEST</span><span>MONGODB</span></div>
    </div>
  );
}
