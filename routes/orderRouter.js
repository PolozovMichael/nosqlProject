const express = require('express');
const router = express.Router();
const {
    createOrder,
    getListOfOrders,
    getOrderById,
    updateOrderById,
    removeOrder
} = require('../controllers/orderController');

router.post('/api/createOrder', createOrder);
router.get('/api/getListOfOrders', getListOfOrders);
router.get('/api/:orderId', getOrderById);
router.put('/api/updateOrder/:orderId', updateOrderById);
router.delete('/api/deleteOrder/:orderId', removeOrder);

module.exports = router;