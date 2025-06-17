
import React from 'react';
import { SkillCategory } from '../types';
import Section from './Section';
import { CheckBadgeIcon } from './icons/HeroIcons';

interface SkillsProps {
  skillCategories: SkillCategory[];
}

const SkillItem: React.FC<{ name: string, icon?: React.ReactNode, level?: number }> = ({ name, icon, level }) => (
  <div className="bg-card p-4 rounded-lg shadow-md hover:shadow-primary/30 transition-shadow duration-300 flex items-center">
    {icon && <span className="text-primary mr-3">{icon}</span>}
    <div className="flex-grow">
      <span className="text-text-main text-base md:text-lg">{name}</span>
      {level !== undefined && (
        <div className="w-full bg-secondary rounded-full h-2.5 mt-1">
          <div 
            className="bg-primary h-2.5 rounded-full" 
            style={{ width: `${level}%` }}
            aria-valuenow={level}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
            aria-label={`${name} proficiency`}
          ></div>
        </div>
      )}
    </div>
     {level === undefined && <CheckBadgeIcon className="w-5 h-5 text-primary ml-auto" />}
  </div>
);

const Skills: React.FC<SkillsProps> = ({ skillCategories }) => {
  return (
    <Section id="skills" title="Technologies & Skills" className="bg-slate-800">
      <div className="space-y-12">
        {skillCategories.map((category, idx) => (
          <div key={category.id} className="animate-fade-in-up" style={{animationDelay: `${idx * 100}ms`}}>
            <h3 className="text-2xl font-semibold text-text-main mb-6 text-center md:text-left">{category.name}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.skills.map((skill) => (
                <SkillItem key={skill.id} name={skill.name} icon={skill.icon} level={skill.level} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
    