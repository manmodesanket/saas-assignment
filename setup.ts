import '@testing-library/jest-dom/vitest';
import { afterAll, afterEach, beforeAll } from 'vitest';
import { setupServer } from 'msw/node';
import { http, HttpResponse } from 'msw';

const mockProjects = [
  { "s.no": 1, "percentage.funded": 80, "amt.pledged": 1000 },
  { "s.no": 2, "percentage.funded": 60, "amt.pledged": 2000 },
  { "s.no": 3, "percentage.funded": 40, "amt.pledged": 3000 }
];

export const server = setupServer(
  http.get('https://raw.githubusercontent.com/saaslabsco/frontend-assignment/refs/heads/master/frontend-assignment.json', () => {
    return HttpResponse.json(mockProjects);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());