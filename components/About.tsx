
import React from 'react';
import Section from './Section';
import { EducationItem, CourseItem, SocialLink } from '../types';
import { AcademicCapIcon, BookOpenIcon } from './icons/HeroIcons';

interface AboutProps {
  name: string;
  title: string;
  detailedBio: string[];
  educationItems: EducationItem[];
  courseItems: CourseItem[];
  socialLinks: SocialLink[];
}

const TimelineItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  period: string;
  isFirst?: boolean;
}> = ({ icon, title, subtitle, period, isFirst }) => (
  <div className="relative">
    {/* Dot on the timeline */}
    <div className={`absolute left-[-3px] ${isFirst ? 'top-[0.45rem]' : 'top-[0.45rem]'} w-3 h-3 bg-card border-2 border-primary rounded-full z-10`} aria-hidden="true"></div>
    {/* Content Card */}
    <div className="ml-6 bg-card p-4 rounded-lg shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-start mb-1">
        <span className="text-primary mr-3 mt-1 shrink-0">{icon}</span>
        <div>
          <h4 className="text-lg font-semibold text-primary">{title}</h4>
          <p className="text-text-muted text-sm">{subtitle}</p>
        </div>
      </div>
      <p className="text-text-muted text-xs ml-[calc(1.25rem_+_0.75rem)]">{period}</p> {/* Adjust based on icon actual rendered size and margin */}
    </div>
  </div>
);

const About: React.FC<AboutProps> = ({ name, title, detailedBio, educationItems, courseItems, socialLinks }) => {
  return (
    <Section id="about" title="About Me" className="bg-slate-800">
      <div className="grid md:grid-cols-2 gap-x-12 lg:gap-x-16 gap-y-10 items-start">
        {/* Left Column: Profile Text */}
        <div className="md:col-span-1 space-y-6 animate-slide-in-left">
          <h3 className="text-3xl font-bold text-text-main leading-tight">
            {name}
          </h3>
          <p className="text-xl font-medium text-primary -mt-2">
            {title}
          </p>
          {detailedBio.map((paragraph, index) => (
            <p key={index} className="text-lg text-slate-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
          {/* Social Links Buttons */}
          <div className="pt-4 space-x-3 flex flex-wrap gap-y-3">
            {socialLinks.map(link => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium px-4 py-2 border border-slate-600 rounded-md text-text-muted hover:bg-slate-700 hover:text-primary transition-colors duration-200"
                aria-label={`Visit my ${link.name} profile`}
              >
                {React.cloneElement(link.icon as React.ReactElement<{ className?: string }>, { className: "w-5 h-5 mr-2" })}
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column: Education & Courses Timeline */}
        <div className="md:col-span-1 animate-fade-in-up" style={{animationDelay: '200ms'}}>
          <h3 className="text-2xl font-semibold text-text-main mb-6 text-center sm:text-left">Educational Journey</h3>
          <div className="relative pl-4"> {/* Container for timeline, pl-4 for line and dots */}
            {/* The Vertical Line - Adjust height if content varies significantly */}
            <div className="absolute top-0 left-0 bottom-0 w-0.5 bg-primary opacity-50 rounded-full" aria-hidden="true"></div>
            
            <div className="space-y-8">
              {educationItems.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  icon={<AcademicCapIcon className="w-5 h-5" />}
                  title={item.degree}
                  subtitle={item.institution}
                  period={item.period}
                  isFirst={index === 0}
                />
              ))}
            </div>

            {courseItems.length > 0 && (
              <div className="mt-10 pt-2"> {/* Added margin top for separation */}
                <h4 className="text-xl font-semibold text-text-main mb-8 ml-1 text-center sm:text-left">Courses & Certifications</h4>
                 {/* Dot for section break - optional styling element */}
                <div className="relative mb-8">
                  <div className="absolute left-[-3px] top-[0.45rem] w-3 h-3 bg-card border-2 border-primary rounded-full z-10" aria-hidden="true"></div>
                </div>
                <div className="space-y-8">
                  {courseItems.map((item, index) => (
                    <TimelineItem
                      key={item.id}
                      icon={<BookOpenIcon className="w-5 h-5" />}
                      title={item.name}
                      subtitle={item.institution || 'Online Course'}
                      period={item.year}
                      // isFirst is true for the first course item ONLY IF there are no education items.
                      // Since we always have the main education line, course items will not be 'isFirst' in the absolute sense.
                      // The dot styling for 'isFirst' primarily ensures the top of the timeline line starts cleanly.
                      isFirst={educationItems.length === 0 && index === 0} 
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
