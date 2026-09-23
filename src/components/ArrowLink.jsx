import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ArrowLink({ href, to, children, download = false, direction = 'out', className = '' }) {
  const content = (
    <>
      <span>{children}</span>
      {direction === 'down' ? <ArrowDown size={16} /> : <ArrowUpRight size={16} />}
    </>
  );

  if (to) return <Link className={`arrow-link ${className}`} to={to}>{content}</Link>;

  return (
    <a className={`arrow-link ${className}`} href={href} download={download || undefined} target={download ? undefined : '_blank'} rel="noreferrer">
      {content}
    </a>
  );
}
