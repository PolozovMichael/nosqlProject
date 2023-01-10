const express = require('express');
const router = express.Router();
const {
    createClient,
    getListOfClients,
    getClientById,
    updateClientById,
    removeClient,
    changeClientOrder
} = require('../controllers/clientController');

router.post('/api/createClient/:orderId', createClient);
router.get('/api/getListOfClients', getListOfClients);
router.get('/api/:clientId', getClientById);
router.put('/api/updateClient/:clientId', updateClientById);
router.put('/api/changeClientOrder/:clientId/:orderId', changeClientOrder);
router.delete('/api/deleteClient/:clientId', removeClient);

module.exports = router;