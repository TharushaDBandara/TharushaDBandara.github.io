
import React from 'react';
import { Project, SkillCategory, NavLinkItem, SocialLink, EducationItem, CourseItem } from './types';
import { 
  BriefcaseIcon, CodeBracketIcon, CommandLineIcon, CpuChipIcon, EnvelopeIcon, LanguageIcon, 
  LightBulbIcon, PaintBrushIcon, ServerStackIcon, ShareIcon, UserGroupIcon, AcademicCapIcon, 
  BookOpenIcon, LinkIcon, CheckBadgeIcon, DevicePhoneMobileIcon, MapPinIcon,
  GitHubIcon, BehanceIcon // Added GitHubIcon and BehanceIcon
} from './components/icons/HeroIcons';


export const NAV_LINKS: NavLinkItem[] = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export const PORTFOLIO_OWNER = {
  name: "Tharusha Dilshan Bandara",
  title: "AI enthisiast | Software Developer | Graphic Designer",
  bioSummary: "Computer Science undergraduate specializing in Artificial Intelligence",
  aboutMeDetailed: [
    "Passionate and detail-oriented Computer Science undergraduate specializing in Artificial Intelligence and software development. Committed to building innovative, data-driven solutions that optimize performance, improve user experience, and expand the potential of emerging technologies.",
    "I am currently pursuing my BSc (Hons) in Computer Science with a focus on Artificial Intelligence and am enthusiastic about applying my growing knowledge to real-world challenges. My academic journey is complemented by practical project experience and a continuous drive to learn new skills.",
    "Beyond my technical pursuits, I am driven by a philosophy of continuous learning and creative problem-solving. I believe that the most impactful solutions arise from a blend of analytical thinking, user-centric design, and a collaborative spirit. I'm always eager to explore new domains and leverage technology to make a positive difference."
  ],
  profileImageUrl: 'https://picsum.photos/seed/tharusha/300/300', // Placeholder - Tharusha should replace this
  resumeUrl: 'cv.pdf', // Placeholder - Tharusha to link his actual resume PDF
  contactEmail: "tharushadil0@gmail.com",
  contactPhone: "+94769032125",
  portfolioUrl: "http://tdbandara.my.canva.site/portfolio",
  address: "No68 Padukka Road, Padukka Road, 12400 Horana", // For reference, not directly displayed by default
};

export const EDUCATION_DATA: EducationItem[] = [
  { id: 'edu1', degree: 'BSc (Hons) Computer Science with Artificial Intelligence (Undergraduate)', institution: 'NIBM (KIC), Kandy', period: 'Oct 2023 – Present' },
  { id: 'edu2', degree: 'International Foundation Diploma In Information Technology', institution: 'Esoft Metro campus, Colombo', period: 'Jul 2022 – May 2023' },
  { id: 'edu3', degree: 'Diploma In IT (INTERNATIONAL)', institution: 'Esoft Metro Campus, Kaluthara', period: 'Nov 2018 – Apr 2019' },
  { id: 'edu4', degree: 'Diploma In English (DIE)', institution: 'Esoft Metro Campus, Kaluthara', period: 'Jan 2018 – Jun 2018' },
  { id: 'edu5', degree: 'GCE Ordinary Level', institution: 'Royal College, Horana', period: '2017' },
];

export const COURSES_DATA: CourseItem[] = [
  { id: 'course1', name: 'Graphic Design & Creativity Development', year: '2024', institution: 'Self-paced / Online' }, // Added placeholder institution
];


export const PROJECTS_DATA: Project[] = [
  {
    id: 'parkmate',
    title: 'ParkMate - Automated Smart Parking System',
    description: 'Developed an AI-powered smart parking solution integrating IoT, license plate recognition, and a mobile application.',
    longDescription: 'Achieved a 70% reduction in manual processing and improved space utilization by 50%. Engineered real-time availability tracking, entry detection, reservation features, and payment processing. Designed an iPad app for parking lot owners to monitor performance statistics and manage operations efficiently.',
    imageUrl: 'https://picsum.photos/seed/parkmate/600/400', // Placeholder
    tags: ['AI', 'IoT', 'License Plate Recognition', 'Mobile Development', 'Real-time Systems', 'Payment Processing', 'iPad App'],
    // liveUrl: '#', // Not specified in resume
    // repoUrl: '#', // Not specified in resume
    year: 2023, // Assumed, as it's a significant project for an undergraduate
    role: 'Developer' // Inferred
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    id: 'programming-web',
    name: 'Programming & Web Development',
    skills: [
      { id: 'python', name: 'Python', icon: <CommandLineIcon className="w-5 h-5 mr-2" /> },
      { id: 'java', name: 'Java', icon: <CommandLineIcon className="w-5 h-5 mr-2" /> },
      { id: 'sql', name: 'SQL', icon: <ServerStackIcon className="w-5 h-5 mr-2" /> },
      { id: 'cplusplus', name: 'C++', icon: <CommandLineIcon className="w-5 h-5 mr-2" /> },
      { id: 'html', name: 'HTML', icon: <CodeBracketIcon className="w-5 h-5 mr-2" /> },
      { id: 'css', name: 'CSS', icon: <PaintBrushIcon className="w-5 h-5 mr-2" /> },
      { id: 'javascript', name: 'JavaScript', icon: <CodeBracketIcon className="w-5 h-5 mr-2" /> },
    ]
  },
  {
    id: 'ai-design-db',
    name: 'AI, Design & Databases',
    skills: [
      { id: 'ai-ml', name: 'Artificial Intelligence & Machine Learning', icon: <CpuChipIcon className="w-5 h-5 mr-2" /> },
      { id: 'figma', name: 'UI/UX Design: Figma', icon: <PaintBrushIcon className="w-5 h-5 mr-2" /> },
      { id: 'graphic-design', name: 'Graphic Design (Photoshop, Illustrator, Canva)', icon: <PaintBrushIcon className="w-5 h-5 mr-2" /> },
      { id: 'database', name: 'Database Management (MySQL, NoSQL)', icon: <ServerStackIcon className="w-5 h-5 mr-2" /> },
    ]
  },
  {
    id: 'soft-skills',
    name: 'Soft Skills',
    skills: [
      { id: 'leadership', name: 'Leadership & Teamwork', icon: <UserGroupIcon className="w-5 h-5 mr-2" /> },
      { id: 'communication', name: 'Communication & Presentation', icon: <LanguageIcon className="w-5 h-5 mr-2" /> },
      { id: 'problem-solving', name: 'Problem-Solving & Critical Thinking', icon: <LightBulbIcon className="w-5 h-5 mr-2" /> },
      { id: 'project-management', name: 'Project Management', icon: <BriefcaseIcon className="w-5 h-5 mr-2" /> },
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tharushadbandara/', // Placeholder URL - Tharusha to update
    icon: (
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    )
  },
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/tharushadbandara', // Placeholder URL - Tharusha to update
    icon: <GitHubIcon className="w-6 h-6" />
  },
  {
    id: 'behance',
    name: 'Behance',
    url: 'https://www.behance.net/tharushadbandara', // Placeholder URL - Tharusha to update
    icon: <BehanceIcon className="w-6 h-6" />
  },
  {
    id: 'portfolio',
    name: 'Portfolio',
    url: PORTFOLIO_OWNER.portfolioUrl,
    icon: <LinkIcon className="w-6 h-6" />
  },
  {
    id: 'email',
    name: 'Email',
    url: `mailto:${PORTFOLIO_OWNER.contactEmail}`,
    icon: <EnvelopeIcon className="w-6 h-6" />
  },
];
