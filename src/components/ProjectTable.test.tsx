import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ProjectTable } from './ProjectTable';

const mockProjects = [
  { "s.no": 1, "percentage.funded": 80, "amt.pledged": 1000 },
  { "s.no": 2, "percentage.funded": 60, "amt.pledged": 2000 }
];

describe('ProjectTable', () => {
  it('renders table headers correctly', () => {
    render(<ProjectTable projects={mockProjects} />);
    expect(screen.getByText('S.No.')).toBeInTheDocument();
    expect(screen.getByText('Percentage Funded')).toBeInTheDocument();
    expect(screen.getByText('Amount Pledged')).toBeInTheDocument();
  });

  it('renders project data correctly', () => {
    render(<ProjectTable projects={mockProjects} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('80%')).toBeInTheDocument();
    expect(screen.getByText('$1000')).toBeInTheDocument();
  });

  it('renders empty table when no projects provided', () => {
    render(<ProjectTable projects={[]} />);
    expect(screen.queryByText('1')).not.toBeInTheDocument();
  });
});