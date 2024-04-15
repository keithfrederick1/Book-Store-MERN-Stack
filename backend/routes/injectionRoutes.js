import express from 'express';
import { Injection } from '../models/injectionModel.js';

const injectionRouter = express.Router();

// Route for Save a new Injection
injectionRouter.post('/', async (request, response) => {
  try {
    if (
      !request.body.admin ||
      !request.body.patientName ||
      !request.body.patientMrn ||
      !request.body.medication ||
      !request.body.dateAdministered ||
      !request.body.nextInjection ||
      !request.body.administeredArea 
    ) {
      return response.status(400).send({
        message: 'Send all required fields: administrator, patient name, patient MRN, medication, date administered, next injection date, administered area',
      });
    }
    const newInjection = {
      admin: request.body.admin,
      patientName: request.body.patientName,
      patientMrn: request.body.patientMrn,
      medication: request.body.medication,
      dateAdministered: request.body.dateAdministered,
      nextInjection: request.body.nextInjection,
      administeredArea: request.body.administeredArea,

    };

    const injection = await Injection.create(newInjection);

    return response.status(201).send(injection);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All injections from database
injectionRouter.get('/', async (request, response) => {
  try {
    const injections = await Injection.find({});

    return response.status(200).json({
      count: injections.length,
      data: injections,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Entry from database by id
injectionRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const injection = await Injection.findById(id);

    return response.status(200).json(injection);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


// Route for Update a Injection
injectionRouter.put('/:id', async (request, response) => {
  try {
    if (
        !request.body.admin ||
        !request.body.patientName ||
        !request.body.patientMrn ||
        !request.body.medication ||
        !request.body.dateAdministered ||
        !request.body.nextInjection ||
        !request.body.administeredArea 
    ) {
      return response.status(400).send({
        message: 'Send all required fields: administrator, patient name, patient MRN, medication, date administered, next injection date, administered area',
      });
    }

    const { id } = request.params;

    const result = await Injection.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Injection not found' });
    }

    return response.status(200).send({ message: 'Injection updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete an injection
injectionRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Injection.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Injection not found' });
    }

    return response.status(200).send({ message: 'Injection deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default injectionRouter;
