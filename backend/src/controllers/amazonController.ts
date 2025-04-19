import { Request, Response } from 'express';
import { AmazonService } from '../services/amazonService';

export class AmazonController {
    private amazonService: AmazonService;

    constructor() {
        this.amazonService = new AmazonService();
    }

    public searchProducts = async (req: Request, res: Response): Promise<void> => {
        try {
            const { keywords } = req.query;
            
            if (!keywords || typeof keywords !== 'string') {
                res.status(400).json({ error: 'Keywords parameter is required' });
                return;
            }

            const products = await this.amazonService.searchProducts(keywords);
            res.json(products);
        } catch (error) {
            console.error('Error searching products:', error);
            res.status(500).json({ error: 'Failed to search products' });
        }
    };

    public getProductDetails = async (req: Request, res: Response): Promise<void> => {
        try {
            const { asin } = req.params;
            
            if (!asin) {
                res.status(400).json({ error: 'ASIN parameter is required' });
                return;
            }

            const product = await this.amazonService.getProductDetails(asin);
            res.json(product);
        } catch (error) {
            console.error('Error getting product details:', error);
            res.status(500).json({ error: 'Failed to get product details' });
        }
    };
} 