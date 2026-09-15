export interface IProject {
  _id?: string;
  id?: string;
  title: string;
  slug: string;
  subtitle: string;
  category: 'Enterprise MERN' | 'Full Stack System' | 'Game Development' | 'Web Application';
  description: string;
  longDescription: string;
  features: string[];
  architecture?: string[];
  techStack: string[];
  metrics?: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  image: string;
  sortOrder: number;
}

export interface IMessage {
  _id?: string;
  id?: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  isRead: boolean;
  createdAt?: string;
}

export interface ISkill {
  _id?: string;
  id?: string;
  category: 'Frontend' | 'Backend & DB' | 'Game Dev & Languages' | 'Tools & DevOps';
  name: string;
  proficiency: number;
  highlight: boolean;
  iconName?: string;
}

export interface IStats {
  personal: {
    fullName: string;
    title: string;
    location: string;
    phone: string;
    email: string;
    bio: string;
    stats: { label: string; value: string }[];
    education: {
      institution: string;
      degree: string;
      period: string;
      highlights: string[];
    }[];
    experience: {
      company: string;
      role: string;
      period: string;
      description: string;
      skills: string[];
    }[];
  };
  projectCount: number;
  featuredCount: number;
  messageCount: number;
  unreadMessageCount: number;
  mongoConnected: boolean;
}
