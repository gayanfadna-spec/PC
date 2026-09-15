import { IProject, ISkill, IStats, IMessage } from '../types/index.js';

const API_BASE = '/api';

export const api = {
  async getProjects(): Promise<IProject[]> {
    try {
      const res = await fetch(`${API_BASE}/projects`);
      if (!res.ok) throw new Error('Failed to fetch projects');
      const json = await res.json();
      return json.data || [];
    } catch (err) {
      console.warn('Projects API request failed, fallback data used:', err);
      return [];
    }
  },

  async getSkills(): Promise<ISkill[]> {
    try {
      const res = await fetch(`${API_BASE}/stats/skills`);
      if (!res.ok) throw new Error('Failed to fetch skills');
      const json = await res.json();
      return json.data || [];
    } catch (err) {
      console.warn('Skills API request failed:', err);
      return [];
    }
  },

  async getStats(): Promise<IStats | null> {
    try {
      const res = await fetch(`${API_BASE}/stats/overview`);
      if (!res.ok) throw new Error('Failed to fetch stats');
      const json = await res.json();
      return json.data || null;
    } catch (err) {
      console.warn('Stats API request failed:', err);
      return null;
    }
  },

  async sendMessage(data: { name: string; email: string; phone?: string; subject: string; message: string }) {
    const res = await fetch(`${API_BASE}/messages`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message || 'Failed to send message');
    }
    return json;
  },

  // Admin APIs
  async login(usernameOrEmail: string, password: string) {
    const res = await fetch(`${API_BASE}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ usernameOrEmail, password }),
    });
    const json = await res.json();
    if (!res.ok) {
      throw new Error(json.message || 'Authentication failed');
    }
    return json;
  },

  async getAdminMessages(token: string): Promise<IMessage[]> {
    const res = await fetch(`${API_BASE}/messages`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to fetch messages');
    return json.data || [];
  },

  async markMessageRead(id: string, token: string) {
    const res = await fetch(`${API_BASE}/messages/${id}/read`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to mark as read');
    return json;
  },

  async deleteMessage(id: string, token: string) {
    const res = await fetch(`${API_BASE}/messages/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to delete message');
    return json;
  },

  async createProject(projectData: Partial<IProject>, token: string) {
    const res = await fetch(`${API_BASE}/projects`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(projectData),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to create project');
    return json;
  },

  async updateProject(id: string, projectData: Partial<IProject>, token: string) {
    const res = await fetch(`${API_BASE}/projects/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(projectData),
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to update project');
    return json;
  },

  async deleteProject(id: string, token: string) {
    const res = await fetch(`${API_BASE}/projects/${id}`, {
      method: 'DELETE',
      headers: { Authorization: `Bearer ${token}` },
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.message || 'Failed to delete project');
    return json;
  },
};
