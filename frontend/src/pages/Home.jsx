import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import EntriesTable from '../components/home/EntriesTable';
import EntriesCard from '../components/home/EntriesCard';
import  Hero  from '../components/Hero/Hero';
import Header from '../components/Header/Header';

const Home = () => {
  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState('table');
  const [searchTerm, setSearchTerm] = useState('');

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get('http://localhost:5555/entries')
  //     .then((response) => {
  //       setEntries(response.data.data);
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       setLoading(false);
  //     });
  // }, []);

  return (
    <div className='p-4'>
      <Header />
      <Hero />
      <div style={{ backgroundColor: '#cee7f0', height: '160px' }}>
      <div className='flex justify-center items-center gap-x-4'>
      <h1 className='text-3xl my-8'>LongevityRx: Injectable Antipsychotic Directory</h1>
      </div>
      <div className='flex justify-center items-center gap-x-4'>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('table')}
        >
          Table
        </button>
        <button
          className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
          onClick={() => setShowType('card')}
        >
          Card
        </button>
      </div>
      </div>
      <div style={{ marginTop:'20px', marginLeft: '40%' }}>
        <input
          className='bg-gray-100'
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'>Search</button>
      </div>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl my-8'>Entries</h1>
        <Link to='/entries/create'>
          <MdOutlineAddBox className='text-sky-800 text-4xl' />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === 'table' ? (
        <EntriesTable entries={entries} />
      ) : (
        <EntriesCard entries={entries} />
      )}
    </div>
  );
};

export default Home;
