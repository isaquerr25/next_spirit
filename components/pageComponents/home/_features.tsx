import {
	Container,
	SimpleGrid,
	Image,
	Flex,
	Heading,
	Text,
	Stack,
	StackDivider,
	Icon,
	useColorModeValue,
} from '@chakra-ui/react';
import {
	IoAnalyticsSharp,
	IoLogoBitcoin,
	IoSearchSharp,
	IoCashOutline,
} from 'react-icons/io5';
import { ReactElement } from 'react';



export default function SplitWithImage() {
	return (
		<Container maxW={'5xl'} py={12} id='about' justifyContent={'center'} alignItems='center' display={'flex'} flexDirection={'column'} w={'auto'}>
			<Text fontSize={'2xl'}>
				Há 3 anos transformando o mercado financeiro para melhorar a vida das pessoas.
			</Text>
			<Text>
				Somos referencia em exclusividade de produtos, imparcialidade, transparência e relacionamento. 
			</Text>
		</Container>
	);
}
