import React, { useState } from 'react';
import {
  Box,
  Input,
  Button,
  VStack,
  Grid,
  Image,
  Text,
  useToast,
  Card,
  CardBody,
  IconButton,
} from '@chakra-ui/react';
import { SearchIcon, AddIcon } from '@chakra-ui/icons';

interface Product {
  asin: string;
  title: string;
  imageUrl: string;
  price: string;
}

export const AdminProducts: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const searchProducts = async () => {
    if (!searchQuery.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:3001/api/amazon/search?keywords=${encodeURIComponent(searchQuery)}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to search products',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  const addProduct = async (product: Product) => {
    try {
      // Here you would typically make an API call to your backend to save the product
      toast({
        title: 'Success',
        description: `Added ${product.title} to your shop`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add product',
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={8}>
      <VStack spacing={6} align="stretch">
        <Box display="flex" gap={4}>
          <Input
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && searchProducts()}
          />
          <Button
            leftIcon={<SearchIcon />}
            onClick={searchProducts}
            isLoading={isLoading}
            colorScheme="blue"
          >
            Search
          </Button>
        </Box>

        <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
          {searchResults.map((product) => (
            <Card key={product.asin}>
              <CardBody>
                <Image
                  src={product.imageUrl}
                  alt={product.title}
                  height="200px"
                  objectFit="contain"
                />
                <Text mt={2} fontSize="sm" noOfLines={2}>
                  {product.title}
                </Text>
                <Text fontWeight="bold" mt={2}>
                  {product.price}
                </Text>
                <IconButton
                  icon={<AddIcon />}
                  aria-label="Add product"
                  onClick={() => addProduct(product)}
                  colorScheme="green"
                  size="sm"
                  position="absolute"
                  top={2}
                  right={2}
                />
              </CardBody>
            </Card>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
}; 