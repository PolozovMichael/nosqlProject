const express = require('express');
const router = express.Router();
const {
    createClient,
    getListOfClients,
    getClientById,
    updateClientById,
    removeClient,
    addOrder
} = require('../controllers/clientController');

router.post('/api/createClient/:orderId', createClient);
router.get('/api/getListOfClients', getListOfClients);
router.get('/api/:clientId', getClientById);
router.put('/api/updateClient/:clientId', updateClientById);
router.put('/api/addOrder/:clientId/:orderId', addOrder);
router.delete('/api/deleteClient/:clientId', removeClient);

module.exports = router;