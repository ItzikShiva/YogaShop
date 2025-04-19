import { SimpleGrid, Box, Image, Text, Button, Badge, useColorModeValue, VStack } from '@chakra-ui/react';
import { products } from '../data/products';
import { useLanguage } from '../contexts/LanguageContext';

export const Products = () => {
  const { language } = useLanguage();
  const cardBg = useColorModeValue('white', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.200');

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
      {products.map((product) => (
        <Box
          key={product.id}
          borderRadius="lg"
          overflow="hidden"
          boxShadow="lg"
          bg={cardBg}
          _hover={{ transform: 'scale(1.02)', transition: 'all 0.2s' }}
        >
          <Image
            src={product.imageUrl}
            alt={language === 'en' ? product.title : product.hebrewTitle}
            height="300px"
            width="100%"
            objectFit="cover"
          />
          <VStack p={6} align="stretch" spacing={3}>
            <Badge
              colorScheme="purple"
              alignSelf={language === 'en' ? 'flex-start' : 'flex-end'}
            >
              {product.category}
            </Badge>
            <Text
              fontSize="xl"
              fontWeight="bold"
              dir={language === 'en' ? 'ltr' : 'rtl'}
            >
              {language === 'en' ? product.title : product.hebrewTitle}
            </Text>
            <Text
              color={textColor}
              dir={language === 'en' ? 'ltr' : 'rtl'}
            >
              {language === 'en' ? product.description : product.hebrewDescription}
            </Text>
            <Text
              fontSize="2xl"
              fontWeight="bold"
              color="purple.500"
            >
              {product.price}
            </Text>
            <Button
              as="a"
              href={product.amazonUrl}
              target="_blank"
              rel="noopener noreferrer"
              colorScheme="purple"
              width="100%"
            >
              {language === 'en' ? 'View on Amazon' : 'צפה באמזון'}
            </Button>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  );
}; 