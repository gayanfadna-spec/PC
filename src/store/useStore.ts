import { create } from 'zustand';
import { IProject } from '../types/index.js';

interface PortfolioState {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  selectedProject: IProject | null;
  setSelectedProject: (project: IProject | null) => void;
  isAdminOpen: boolean;
  setIsAdminOpen: (open: boolean) => void;
  adminToken: string | null;
  adminUser: { username: string; email: string; role: string } | null;
  setAdminAuth: (token: string, user: { username: string; email: string; role: string }) => void;
  logoutAdmin: () => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const useStore = create<PortfolioState>((set) => ({
  theme: (typeof window !== 'undefined' && (localStorage.getItem('theme') as 'dark' | 'light')) || 'dark',
  toggleTheme: () => {
    set((state) => {
      const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', nextTheme);
        if (nextTheme === 'dark') {
          document.documentElement.classList.add('dark');
          document.documentElement.classList.remove('light');
        } else {
          document.documentElement.classList.remove('dark');
          document.documentElement.classList.add('light');
        }
      }
      return { theme: nextTheme };
    });
  },
  selectedProject: null,
  setSelectedProject: (project) => set({ selectedProject: project }),
  isAdminOpen: false,
  setIsAdminOpen: (open) => set({ isAdminOpen: open }),
  adminToken: typeof window !== 'undefined' ? localStorage.getItem('adminToken') : null,
  adminUser: typeof window !== 'undefined' && localStorage.getItem('adminUser') ? JSON.parse(localStorage.getItem('adminUser')!) : null,
  setAdminAuth: (token, user) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('adminToken', token);
      localStorage.setItem('adminUser', JSON.stringify(user));
    }
    set({ adminToken: token, adminUser: user });
  },
  logoutAdmin: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('adminToken');
      localStorage.removeItem('adminUser');
    }
    set({ adminToken: null, adminUser: null });
  },
  activeSection: 'hero',
  setActiveSection: (section) => set({ activeSection: section }),
}));
