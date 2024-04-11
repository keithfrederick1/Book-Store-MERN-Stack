import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateEntry from './pages/CreateEntry';
import ShowEntry from './pages/ShowEntry';
import EditEntry from './pages/EditEntry';
import DeleteEntry from './pages/DeleteEntry';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/entries/create' element={<CreateEntry />} />
      <Route path='/entries/details/:id' element={<ShowEntry />} />
      <Route path='/entries/edit/:id' element={<EditEntry />} />
      <Route path='/entries/delete/:id' element={<DeleteEntry />} />
    </Routes>
  );
};

export default App;
