import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import ProjectCaseStudy from '../components/ProjectCaseStudy/ProjectCaseStudy';
import { projects } from '../data/portfolio';

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  useEffect(() => {
    if (!project) return undefined;
    const previousTitle = document.title;
    const description = document.querySelector('meta[name="description"]');
    const previousDescription = description?.content;
    document.title = `${project.title} | Ronit Chanalya`;
    if (description) description.content = project.description;
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
    };
  }, [project]);

  if (!project) return <Navigate to="/" replace />;
  return <ProjectCaseStudy project={project} />;
}
