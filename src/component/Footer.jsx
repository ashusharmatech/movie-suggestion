import { Box, Container, Stack, Text, useColorModeValue } from '@chakra-ui/react';
import { FaLinkedin, FaGithub, FaHeart } from 'react-icons/fa';
import React from 'react';
import Logo from './Logo';
import SocialButton from './SocialButton';

export default function Footer() {
	return (
		<Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
			<Container as={Stack} maxW={'6xl'} py={4} spacing={4} justify={'center'} align={'center'}>
				<Logo />
			</Container>

			<Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
				<Container
					as={Stack}
					maxW={'6xl'}
					py={4}
					direction={{ base: 'column', md: 'row' }}
					spacing={4}
					justify={{ base: 'center', md: 'space-between' }}
					align={{ base: 'center', md: 'center' }}
				>
					<Stack direction={'row'} spacing={2}>
						<Text as="span">Made with </Text>
						<FaHeart display="inline" color="red" />
						<Text>in India </Text>
					</Stack>
					<Stack direction={'row'} spacing={6}>
						<SocialButton label={'LinkedIn'} href={'https://www.linkedin.com/in/ashusharma31/'}>
							<FaLinkedin />
						</SocialButton>
						<SocialButton label={'Github'} href={'https://github.com/ashusharmatech/movie-suggestion'}>
							<FaGithub />
						</SocialButton>
					</Stack>
				</Container>
			</Box>
		</Box>
	);
}
