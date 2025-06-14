
import React from 'react';

export interface NavLinkItem {
  id: string;
  label: string;
  href: string;
}

export interface Project {
  id:string;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  year: number;
  role: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  icon?: React.ReactNode;
  level?: number; // Optional: 0-100 for a progress bar visualization
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: React.ReactNode;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
}

export interface CourseItem {
  id: string;
  name: string;
  year: string;
  institution?: string;
}
