import { Project } from "../types/project";

export async function fetchProjects(): Promise<Project[]> {
  try {
    const response = await fetch('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
}