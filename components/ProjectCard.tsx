
import React from 'react';
import { Project } from '../types';
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from './icons/HeroIcons';


interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-card rounded-xl shadow-2xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-primary/50 hover:transform hover:-translate-y-1">
      <img 
        src={project.imageUrl} 
        alt={project.title} 
        className="w-full h-56 object-cover" 
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold mb-2 text-primary">{project.title}</h3>
        <p className="text-sm text-text-muted mb-1">{project.year} - {project.role}</p>
        <p className="text-text-muted text-base mb-4 flex-grow">{project.description}</p>
        
        {project.longDescription && (
             <details className="mb-4 text-sm">
                <summary className="cursor-pointer text-primary hover:underline">Read more</summary>
                <p className="mt-2 text-text-muted leading-relaxed">{project.longDescription}</p>
            </details>
        )}

        <div className="mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-block bg-secondary text-xs text-slate-300 px-3 py-1 rounded-full mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex items-center space-x-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary-hover font-medium transition-colors"
            >
              <ArrowTopRightOnSquareIcon className="w-5 h-5 mr-1.5" />
              Live Demo
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary-hover font-medium transition-colors"
            >
              <CodeBracketIcon className="w-5 h-5 mr-1.5" />
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
    