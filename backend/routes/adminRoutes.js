import express from 'express';
import { Admin } from '../models/adminModel.js';

const adminRouter = express.Router();

// Route for Save a new Admin
adminRouter.post('/', async (request, response) => {
  try {
    if (
      !request.body.name 
    //   add other admin fields here

    ) {
      return response.status(400).send({
        message: 'Send all required fields: name',
      });
    }
    const newAdmin = {
      name: request.body.name,
    };

    const admin = await Admin.create(newAdmin);

    return response.status(201).send(admin);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get All admins from database
adminRouter.get('/', async (request, response) => {
  try {
    const admins = await Admin.find({});

    return response.status(200).json({
      count: admins.length,
      data: admins,
    });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Get One Admin from database by id
adminRouter.get('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const admin = await Admin.findById(id);

    return response.status(200).json(admin);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});


// Route for Update an Admin
adminRouter.put('/:id', async (request, response) => {
  try {
    if (
      !request.body.name 
    //   add other admin fields here
    ) {
      return response.status(400).send({
        message: 'Send all required fields',
      });
    }

    const { id } = request.params;

    const result = await Admin.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: 'Admin not found' });
    }

    return response.status(200).send({ message: 'Admin updated successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for Delete a entry
adminRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const result = await Admin.findByIdAndDelete(id);

    if (!result) {
      return response.status(404).json({ message: 'Admin not found' });
    }

    return response.status(200).send({ message: 'Admin deleted successfully' });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

export default adminRouter;
