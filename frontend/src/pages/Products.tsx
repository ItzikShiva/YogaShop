import React from 'react';
import {
    Box,
    Grid,
    Image,
    Text,
    Button,
    VStack,
    Container,
    Heading,
    Badge,
    useToast,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { products } from '../data/products';

export const Products: React.FC = () => {
    const toast = useToast();

    const handleAffiliateClick = (title: string) => {
        toast({
            title: 'Thank you!',
            description: 'You\'re being redirected to Amazon. Thanks for supporting our shop!',
            status: 'success',
            duration: 3000,
            isClosable: true,
        });
    };

    return (
        <Container maxW="container.xl" py={8}>
            <VStack spacing={8} align="stretch">
                <Box textAlign="center" pb={8}>
                    <Heading as="h1" size="2xl" mb={4}>
                        Yoga Essentials
                    </Heading>
                    <Text fontSize="lg" color="gray.600">
                        Quality products for your spiritual journey
                    </Text>
                </Box>

                <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={8}>
                    {products.map((product) => (
                        <Box
                            key={product.id}
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            _hover={{ shadow: 'lg' }}
                            transition="all 0.3s"
                        >
                            <Image
                                src={product.imageUrl}
                                alt={product.title}
                                height="300px"
                                width="100%"
                                objectFit="cover"
                            />
                            <Box p={6}>
                                <Badge colorScheme="purple" mb={2}>
                                    {product.category}
                                </Badge>
                                <Heading as="h3" size="md" mb={2}>
                                    {product.title}
                                </Heading>
                                <Text color="gray.600" mb={4}>
                                    {product.description}
                                </Text>
                                <Text
                                    fontSize="2xl"
                                    fontWeight="bold"
                                    color="purple.600"
                                    mb={4}
                                >
                                    {product.price}
                                </Text>
                                <Button
                                    as="a"
                                    href={product.amazonUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    colorScheme="purple"
                                    width="full"
                                    rightIcon={<ExternalLinkIcon />}
                                    onClick={() => handleAffiliateClick(product.title)}
                                >
                                    View on Amazon
                                </Button>
                            </Box>
                        </Box>
                    ))}
                </Grid>

                <Box textAlign="center" pt={8}>
                    <Text fontSize="sm" color="gray.500">
                        ⚠️ Disclosure: As an Amazon Associate, we earn from qualifying purchases.
                    </Text>
                </Box>
            </VStack>
        </Container>
    );
}; 