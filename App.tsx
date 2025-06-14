
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import { PORTFOLIO_OWNER, PROJECTS_DATA, SKILLS_DATA, SOCIAL_LINKS, EDUCATION_DATA, COURSES_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero 
          name={PORTFOLIO_OWNER.name} 
          title={PORTFOLIO_OWNER.title} 
          summary={PORTFOLIO_OWNER.bioSummary}
          profileImageUrl={PORTFOLIO_OWNER.profileImageUrl}
          socialLinks={SOCIAL_LINKS.filter(link => ['linkedin', 'github', 'email', 'portfolio'].includes(link.id))} // Hero social links
          resumeUrl={PORTFOLIO_OWNER.resumeUrl}
        />
        <About 
          name={PORTFOLIO_OWNER.name}
          title={PORTFOLIO_OWNER.title}
          detailedBio={PORTFOLIO_OWNER.aboutMeDetailed} 
          educationItems={EDUCATION_DATA}
          courseItems={COURSES_DATA}
          socialLinks={SOCIAL_LINKS.filter(link => ['linkedin', 'github', 'behance'].includes(link.id))} // Specific links for About section buttons
        />
        <Projects projects={PROJECTS_DATA} />
        <Skills skillCategories={SKILLS_DATA} />
        <Contact email={PORTFOLIO_OWNER.contactEmail} socialLinks={SOCIAL_LINKS} />
      </main>
      <Footer ownerName={PORTFOLIO_OWNER.name} />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
