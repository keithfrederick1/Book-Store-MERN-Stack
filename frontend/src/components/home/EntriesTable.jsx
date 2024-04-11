import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const EntriesTable = ({ entries }) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
      <thead>
        <tr>
          <th className='border border-slate-600 rounded-md'>ID No</th>
          <th className='border border-slate-600 rounded-md'>Medication</th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Admin
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            Year
          </th>
          <th className='border border-slate-600 rounded-md max-md:hidden'>
            MRN
          </th>
          <th className='border border-slate-600 rounded-md'>Operations</th>
        </tr>
      </thead>
      <tbody>
        {entries.map((entry, index) => (
          <tr key={entry._id} className='h-8'>
            <td className='border border-slate-700 rounded-md text-center'>
              {index + 1}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              {entry.medication}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {entry.admin}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {entry.year}
            </td>
            <td className='border border-slate-700 rounded-md text-center max-md:hidden'>
              {entry.mrn}
            </td>
            <td className='border border-slate-700 rounded-md text-center'>
              <div className='flex justify-center gap-x-4'>
                <Link to={`/entries/details/${entry._id}`}>
                  <BsInfoCircle className='text-2xl text-green-800' />
                </Link>
                <Link to={`/entries/edit/${entry._id}`}>
                  <AiOutlineEdit className='text-2xl text-yellow-600' />
                </Link>
                <Link to={`/entries/delete/${entry._id}`}>
                  <MdOutlineDelete className='text-2xl text-red-600' />
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EntriesTable;
