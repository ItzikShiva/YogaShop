import { Router } from 'express';
import { AmazonController } from '../controllers/amazonController';

const router = Router();
const amazonController = new AmazonController();

// Search for products
router.get('/search', amazonController.searchProducts);

// Get product details by ASIN
router.get('/product/:asin', amazonController.getProductDetails);

export default router; 