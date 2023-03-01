import axios from 'axios';
import { useEffect, useState } from 'react';

interface IProject {
  id: number;
  name: string;
  slug: string;
}
const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Array<IProject>>([]);
  useEffect(() => {
    const getProject = async () => {
      try {
        const response = await axios.get(
          'https://realestateexpo-admin-api.azurewebsites.net/api/tr/projects/paged'
        );
        setProjects(response.data.result);
      } catch (error) {
        return [];
      }
    };

    getProject();
  }, []);

  return (
    <table className='w-full h-full'>
      <thead>
        <tr className='bg-blue-900 text-white '>
          <th className='py-2 px-4'>Id</th>
          <th>Name</th>
          <th>Slug</th>
        </tr>
      </thead>
      <tbody>
        {projects?.map((project, index) => (
          <tr key={index} className='even:bg-slate-100 hover:bg-slate-200'>
            <td className='py-2 px-4'>{project.id}</td>
            <td>{project.name}</td>
            <td>{project.slug}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Projects;
