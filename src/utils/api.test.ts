import { describe, it, expect } from 'vitest';
import { fetchProjects } from './api';
import { server } from '../../setup';
import { http, HttpResponse } from 'msw';

describe('fetchProjects', () => {
  it('fetches projects successfully', async () => {
    const projects = await fetchProjects();
    expect(projects).toHaveLength(3);
    expect(projects[0]['s.no']).toBe(1);
  });

  it('handles fetch error gracefully', async () => {
    server.use(
      http.get('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json', () => {
        return new HttpResponse(null, { status: 500 });
      })
    );

    const projects = await fetchProjects();
    expect(projects).toEqual([]);
  });
});