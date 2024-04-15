import express from 'express';
import { Patient } from '../models/patientModel.js';

const patientRouter = express.Router();

// Route for Save a new patient
patientRouter.post('/', async (request, response) => {
  try {
    if (
      !request.body.name ||
      !request.body.dob ||
      !request.body.mrn
    ) {
      return response.status(400).send({
        message: 'Send all required fields: patient name, patient DOB, patient MRN',
      });
    }
    const newPatient = {
      name: request.body.name,
      dob: request.body.dob,
      mrn: request.body.mrn,

    };

    const patient = await Patient.create(newPatient);

    return response.status(201).send(patient);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All patients from database
patientRouter.get('/', async (request, response) => {
  try {
    const patients = await Patient.find({});

    return response.status(200).json({
      count: patients.length,
      data: patients,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One patient from database by id
patientRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const patient = await Patient.findById(id);

    return response.status(200).json(patient);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


// Route for Update a Patient
patientRouter.put('/:id', async (request, response) => {
  try {
    if (
        !request.body.name ||
        !request.body.dob ||
        !request.body.mrn
    ) {
      return response.status(400).send({
        message: 'Send all required fields: patient name, patient DOB, patient MRN',
      });
    }

    const { id } = request.params;

    const result = await Patient.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Patient not found' });
    }

    return response.status(200).send({ message: 'Patient updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a patient
patientRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Patient.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Patient not found' });
    }

    return response.status(200).send({ message: 'Patient deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default patientRouter;
