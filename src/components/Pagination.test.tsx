import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  const onPageChange = vi.fn();

  beforeEach(() => {
    onPageChange.mockClear();
  });

  it('renders pagination with correct page numbers', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
  });


  it('calls onPageChange when clicking page number', () => {
    render(<Pagination currentPage={1} totalPages={5} onPageChange={onPageChange} />);
    fireEvent.click(screen.getByText('2'));
    expect(onPageChange).toHaveBeenCalledWith(2);
  });
});