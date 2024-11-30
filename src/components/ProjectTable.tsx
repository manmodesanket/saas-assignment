import type { Project } from '../types/project';

interface ProjectTableProps {
  projects: Project[];
}

export function ProjectTable({ projects }: ProjectTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              S.No.
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Percentage Funded
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount Pledged
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {projects.map((project) => (
            <tr key={project['s.no']} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                {project['s.no']}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {project['percentage.funded']}%
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                ${project['amt.pledged']}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}