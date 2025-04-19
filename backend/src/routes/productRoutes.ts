import express from 'express';
import passport from 'passport';
import { amazonService } from '../services/amazonService';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

// Search products
router.get('/search', async (req, res) => {
  try {
    const { keywords, page } = req.query;
    const products = await amazonService.searchProducts(
      keywords as string,
      parseInt(page as string) || 1
    );
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error searching products' });
  }
});

// Get product details
router.get('/:asin', async (req, res) => {
  try {
    const { asin } = req.params;
    const product = await amazonService.getProductDetails(asin);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error getting product details' });
  }
});

// Save product to database (protected route)
router.post('/save', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const { asin, title, description, price, imageUrl, category } = req.body;
    const product = await prisma.product.create({
      data: {
        amazonId: asin,
        title,
        description,
        price,
        imageUrl,
        category
      }
    });
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: 'Error saving product' });
  }
});

// Get saved products
router.get('/saved/all', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error getting saved products' });
  }
});

export default router; 