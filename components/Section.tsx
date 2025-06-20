
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className, titleClassName, containerClassName }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className || ''}`}>
      <div className={`container mx-auto px-4 md:px-8 ${containerClassName || ''}`}>
        <h2 className={`text-3xl md:text-4xl font-bold text-center mb-12 md:mb-16 text-primary animate-fade-in-up ${titleClassName || ''}`}>
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
    