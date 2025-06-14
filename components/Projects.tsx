
import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import Section from './Section';

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <Section id="projects" title="My Recent Work">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 animate-fade-in-up">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
    