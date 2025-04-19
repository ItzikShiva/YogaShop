import { Config } from 'paapi5-nodejs-sdk';

export class AmazonService {
    private config: Config;

    constructor() {
        this.config = new Config({
            accessKey: process.env.AMAZON_ACCESS_KEY || '',
            secretKey: process.env.AMAZON_SECRET_KEY || '',
            partnerTag: process.env.AMAZON_PARTNER_TAG || '',
            host: 'webservices.amazon.com',
            region: 'us-east-1'
        });
    }

    async searchProducts(keywords: string, page: number = 1) {
        try {
            const api = new Config.ApiClient(this.config);
            const searchRequest = {
                Keywords: keywords,
                Resources: [
                    'ItemInfo.Title',
                    'ItemInfo.ByLineInfo',
                    'ItemInfo.ProductInfo',
                    'ItemInfo.Images',
                    'Offers.Listings.Price'
                ],
                PartnerTag: this.config.partnerTag,
                PartnerType: 'Associates',
                Marketplace: 'www.amazon.com',
                ItemCount: 10,
                ItemPage: page
            };

            const response = await api.searchItems(searchRequest);
            return response;
        } catch (error) {
            console.error('Error searching Amazon products:', error);
            throw error;
        }
    }

    async getProductDetails(asin: string) {
        try {
            const api = new Config.ApiClient(this.config);
            const getItemsRequest = {
                ItemIds: [asin],
                Resources: [
                    'ItemInfo.Title',
                    'ItemInfo.ByLineInfo',
                    'ItemInfo.ProductInfo',
                    'ItemInfo.Images',
                    'Offers.Listings.Price',
                    'Offers.Listings.MerchantInfo',
                    'Offers.Listings.DeliveryInfo'
                ],
                PartnerTag: this.config.partnerTag,
                PartnerType: 'Associates',
                Marketplace: 'www.amazon.com'
            };

            const response = await api.getItems(getItemsRequest);
            return response;
        } catch (error) {
            console.error('Error getting Amazon product details:', error);
            throw error;
        }
    }

    async getSimilarProducts(asin: string, page: number = 1) {
        try {
            const api = new Config.ApiClient(this.config);
            const searchRequest = {
                Keywords: asin,
                Resources: [
                    'ItemInfo.Title',
                    'ItemInfo.ByLineInfo',
                    'ItemInfo.Classifications',
                    'ItemInfo.ContentInfo',
                    'ItemInfo.ContentRating',
                    'ItemInfo.ExternalIds',
                    'ItemInfo.Features',
                    'ItemInfo.ManufactureInfo',
                    'ItemInfo.ProductInfo',
                    'ItemInfo.TechnicalInfo',
                    'ItemInfo.TradeInInfo',
                    'Offers.Listings.Price',
                    'Offers.Listings.MerchantInfo',
                    'Offers.Listings.DeliveryInfo.IsPrimeEligible',
                    'Offers.Listings.DeliveryInfo.IsFreeShippingEligible',
                    'Offers.Summaries.HighestPrice',
                    'Offers.Summaries.LowestPrice',
                    'Offers.Summaries.OfferCount',
                    'ParentASIN',
                    'Images.Primary.Large',
                    'Images.Variants'
                ],
                PartnerTag: this.config.partnerTag,
                PartnerType: 'Associates',
                Marketplace: 'www.amazon.com',
                ItemPage: page,
                ItemCount: 10,
                SimilarProducts: true
            };

            const response = await api.searchItems(searchRequest);
            return {
                items: response.SearchResult?.Items || [],
                totalResults: response.SearchResult?.TotalResultCount || 0,
                page: page,
                totalPages: Math.ceil((response.SearchResult?.TotalResultCount || 0) / 10)
            };
        } catch (error) {
            console.error('Error getting similar products:', error);
            throw error;
        }
    }

    async getProductReviews(asin: string) {
        try {
            const api = new Config.ApiClient(this.config);
            const getItemsRequest = {
                ItemIds: [asin],
                Resources: [
                    'CustomerReviews.StarRating',
                    'CustomerReviews.Count',
                    'CustomerReviews.IFrameURL'
                ],
                PartnerTag: this.config.partnerTag,
                PartnerType: 'Associates',
                Marketplace: 'www.amazon.com'
            };

            const response = await api.getItems(getItemsRequest);
            const item = response.ItemsResult?.Items?.[0];
            return {
                starRating: item?.CustomerReviews?.StarRating,
                reviewCount: item?.CustomerReviews?.Count,
                iframeUrl: item?.CustomerReviews?.IFrameURL
            };
        } catch (error) {
            console.error('Error getting product reviews:', error);
            throw error;
        }
    }
} 