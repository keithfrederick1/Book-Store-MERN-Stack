import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import Spinner from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSnackbar } from 'notistack';

const CreatePrescription = () => {
  const [patientDob, setPatientDob] = useState('');
  const [patientName, setPatientName] = useState('');
  const [medication, setMedication] = useState('');
  const [admin, setAdmin] = useState('');
  const [date, setDate] = useState('');
  const [mrn, setMrn] = useState('');

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveEntry = () => {
    const data = {
     patientDob,
     patientName,
     mrn,
     medication,
     admin,
     date
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
      <h1 className='text-3xl my-4'>Create Prescription</h1>
      {loading ? <Spinner /> : ''}
      <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
      <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Patient Name (Last first)</label>
          <input
            type='text'
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Patient DOB</label>
          <input
            type='text'
            value={patientDob}
            onChange={(e) => setPatientDob(e.target.value)}
            className='border-2 border-gray-500 px-4 py-2 w-full'
          />
        </div>
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
          <label className='text-xl mr-4 text-gray-500'>Date</label>
          <input
            type='text'
            value={date}
            onChange={(e) => setDate(e.target.value)}
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

export default CreatePrescription