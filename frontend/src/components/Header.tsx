import { Box, Flex, Heading, IconButton, useColorMode, Select, Image } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useLanguage } from '../contexts/LanguageContext';

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { language, setLanguage } = useLanguage();

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding="4"
      bg={colorMode === 'light' ? 'white' : 'gray.800'}
      boxShadow="sm"
    >
      <Flex align="center">
        <Image
          src="/logo.svg"
          alt="Yoga Essentials Logo"
          height="50px"
          marginRight="4"
          filter={colorMode === 'dark' ? 'brightness(1.2)' : 'none'}
        />
        <Heading
          size="lg"
          bgGradient="linear(to-r, purple.500, pink.500)"
          bgClip="text"
        >
          {language === 'en' ? 'Yoga Essentials' : 'יוגה אסנשיאלס'}
        </Heading>
      </Flex>

      <Flex align="center" gap="4">
        <Select
          value={language}
          onChange={(e) => setLanguage(e.target.value as 'en' | 'he')}
          width="100px"
        >
          <option value="en">English</option>
          <option value="he">עברית</option>
        </Select>
        <IconButton
          aria-label="Toggle color mode"
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          variant="ghost"
        />
      </Flex>
    </Flex>
  );
}; 