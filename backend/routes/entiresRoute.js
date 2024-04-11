import express from 'express';
import { Entry } from '../models/entryModel.js';

const router = express.Router();

// Route for Save a new Entry
router.post('/', async (request, response) => {
  try {
    if (
      !request.body.medication ||
      !request.body.admin ||
      !request.body.year
    ) {
      return response.status(400).send({
        message: 'Send all required fields: medication, admin, year',
      });
    }
    const newEntry = {
      medication: request.body.medication,
      admin: request.body.admin,
      year: request.body.year,

    };

    const entry = await Entry.create(newEntry);

    return response.status(201).send(entry);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All entries from database
router.get('/', async (request, response) => {
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
router.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const entry = await Entry.findById(id);

    return response.status(200).json(entry);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Entry from database by MRN
// router.get('/:mrn', async (request, response) => {
//   try {
//     const { mrn } = request.params;

//     const entry = await Entry.findById(mrn);

//     return response.status(200).json(entry);
//   } catch (error) {
//     console.log(error.message);
//     response.status(500).send({ message: error.message });
//   }
// });

// Route for Update a Entry
router.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.medication ||
      !request.body.admin ||
      !request.body.year
    ) {
      return response.status(400).send({
        message: 'Send all required fields: medication, administrator, year',
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
router.delete('/:id', async (request, response) => {
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

export default router;
