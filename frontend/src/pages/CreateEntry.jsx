import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreateEntry = () => {
  const [medication, setMedication] = useState('');
  const [admin, setAdmin] = useState('');
  const [year, setYear] = useState('');
  const [mrn, setMrn] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveEntry = () => {
    const data = {
      medication,
      admin,
      year,
      mrn
    };
    setLoading(true);
    axios
      .post('http://localhost:5555/entries', data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar('Entry created successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Create Entry</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Medication</label>
          <input
            type='text'
            value={medication}
            onChange={(e) => setMedication(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Admin</label>
          <input
            type='text'
            value={admin}
            onChange={(e) => setAdmin(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Year</label>
          <input
            type='number'
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>MRN</label>
          <input
            type='number'
            value={mrn}
            onChange={(e) => setMrn(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2  w-full '
          />
        </div>
        <button className='p-2 bg-sky-300 m-8' onClick={handleSaveEntry}>
          Save
        </button>
      </div>
    </div>
  );
}

export default CreateEntry