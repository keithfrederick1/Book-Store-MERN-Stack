import express from 'express';
import { Medication } from '../models/medicationModel.js';

const medicationRouter = express.Router();

// Route for Save a new Entry
medicationRouter.post('/', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.ndc 
    ) {
      return response.status(400).send({
        message: 'Send all required fields: medication name, medication NDC',
      });
    }
    const newMedication = {
      name: request.body.name,
      ndc: request.body.ndc,
    };

    const medication = await Medication.create(newMedication);

    return response.status(201).send(medication);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All entries from database
medicationRouter.get('/', async (request, response) => {
  try {
    const medications = await Medication.find({});

    return response.status(200).json({
      count: medications.length,
      data: medications,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Entry from database by id
medicationRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const medication = await Medication.findById(id);

    return response.status(200).json(medication);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


// Route for Update a Entry
medicationRouter.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.ndc
    ) {
      return response.status(400).send({
        message: 'Send all required fields: medicatio name, medication NDC',
      });
    }

    const { id } = request.params;

    const result = await Medication.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Medication not found' });
    }

    return response.status(200).send({ message: 'Medication updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a entry
medicationRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Medication.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Medication not found' });
    }

    return response.status(200).send({ message: 'Medication deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default medicationRouter;
