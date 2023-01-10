const Joi = require('joi');
const Client = require('../models/clientModel');

const clientValidationSchema = Joi.object({
    name: Joi.string().min(5).max(125).required(),
    password: Joi.string().min(5).max(125).required()
});

const createClient = async (req, res) => {
    try {
        const value = await clientValidationSchema.validateAsync(req.body);
    } catch (e) {
        console.error(e.message);
    }
    const client = new Client({
        name: req.body.name,
        password: req.body.password,
        order: req.params.orderId
    });
    try {
        const result = await client.save();
        console.log(result);
    } catch (e) {
        console.error(e.message);
    }
}

const getListOfClients = async(req, res) => {
    const listOfClients = await Client
        .find()
        .populate('order', 'name name equipment ingredients')
        .select('name order');
    if(!listOfClients) res.status(400).send('Bad request!');
    console.log(listOfClients);
}

const getClientById = async(req, res) => {
    const client = await Client
        .find({_id: req.params.clientId})
        .populate('name equipment ingredients -_id')
        .select('name order');
    if(!client) res.status(400).send('Client was not found!');
    console.log(client);
}

const changeClientOrder = async(req, res) => {
    const client = await Client.findById(req.params.clientId);
    client.order = req.params.orderId;
    try {
        const result = await client.save();
        console.log(result);
    } catch (e) {
        console.error(e.message);
    }
}

const updateClientById = async(req, res) => {
    try {
        const result = await Client.updateOne(
            {_id: req.params.clientId},
            {
                $set: {
                    name: req.body.name,
                    password: req.body.password
                }
            }
        );
        console.log(result);
    } catch (e) {
        res.status(400).send('BadRequest');
    }
}

const removeClient = async(req, res) => {
    try {
      const deleteClient = await Client.deleteMany({
        _id: req.params.clientId
      });  
      console.log(deleteClient);
    } catch (e) {
        res.status(400).send('BadRequest');
    }
}

module.exports = {
    createClient,
    getListOfClients,
    getClientById,
    updateClientById,
    removeClient,
    changeClientOrder
}