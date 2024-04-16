import express from 'express';
import { Entry } from '../models/entryModel.js';
import { Patient } from '../models/patientModel.js'

const entryRouter = express.Router();

// Route for Save a new Entry
entryRouter.post('/', async (request, response) => {
  try {
    if (
      !request.body.patientName ||
      !request.body.patientDob ||
      !request.body.mrn ||
      !request.body.medication ||
      !request.body.admin ||
      !request.body.date
    ) {
      return response.status(400).send({
        message: 'Send all required fields: patient name, patient DOB, patient MRN, admin, date, medication',
      });
    }
    const newEntry = {
      patientName: request.body.patientName,
      patientDob: request.body.patientDob,
      patientZip: request.body.patientZip,
      mrn: request.body.mrn,
      medication: request.body.medication,
      admin: request.body.admin,
      date: request.body.date,
      injection: request.body.injection
    };

    const entry = await Entry.create(newEntry);

    return response.status(201).send(entry);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All entries from database
entryRouter.get('/', async (request, response) => {
  try {
    const entries = await Entry.find({});

    return response.status(200).json({
      count: entries.length,
      data: entries,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Entry from database by id
entryRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const entry = await Entry.findById(id);

    return response.status(200).json(entry);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


// Route for Update an Entry
entryRouter.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.patientName ||
      !request.body.patientDob ||
      !request.body.mrn ||
      !request.body.medication ||
      !request.body.admin ||
      !request.body.date
    ) {
      return response.status(400).send({
        message: 'Send all required fields: patient name, patient DOB, patient MRN, admin, date, medication',
      });
    }

    const { id } = request.params;

    const result = await Entry.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Entry not found' });
    }

    return response.status(200).send({ message: 'Entry updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a entry
entryRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Entry.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Entry not found' });
    }

    return response.status(200).send({ message: 'Entry deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default entryRouter;
