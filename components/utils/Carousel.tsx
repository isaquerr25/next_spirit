import React from 'react';
import {
	Box,
	IconButton,
	useBreakpointValue,
	Stack,
	Heading,
	Text,
	Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
	dots: true,
	arrows: false,
	fade: true,
	infinite: true,
	autoplay: true,
	speed: 500,
	autoplaySpeed: 5000,
	slidesToShow: 1,
	slidesToScroll: 1,
};

export default function CaptionCarousel() {
	// As we have used custom buttons, we need a reference variable to
	// change the state
	const [slider, setSlider] = React.useState<Slider | null>(null);

	// These are the breakpoints which changes the position of the
	// buttons as the screen size changes
	const top = useBreakpointValue({ base: '90%', md: '50%' });
	const side = useBreakpointValue({ base: '30%', md: '40px' });

	// This list contains all the data for carousels
	// This can be static or loaded from a server
	const cards = [
		{
			title: 'Earnings per fortnight',
			text:  'Get fortnightly earnings of up to 6%+',
		},
		{
			title: 'Transaction',
			text:
        'Keep your wallet up to date as the money is sent to the registered wallet when withdrawing',
		},
		{
			title: 'Profit Future',
			text:  'All results presented in Profit Future are a possible approximation',
		},
	];

	return (
		<Box
			position={'relative'}
			height={'150px'}
			width={'full'}
			overflow={'hidden'}>
			{/* CSS files for react-slick */}
			<link
				rel="stylesheet"
				type="text/css"
				charSet="UTF-8"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
			/>
			<link
				rel="stylesheet"
				type="text/css"
				href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
			/>
			{/* Left Icon */}
			<IconButton
				aria-label="left-arrow"
				variant="ghost"
				position="absolute"
				left={side}
				top={top}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickPrev()}>
				<BiLeftArrowAlt size="40px" />
			</IconButton>
			{/* Right Icon */}
			<IconButton
				aria-label="right-arrow"
				variant="ghost"
				position="absolute"
				right={side}
				top={top}
				transform={'translate(0%, -50%)'}
				zIndex={2}
				onClick={() => slider?.slickNext()}>
				<BiRightArrowAlt size="40px" />
			</IconButton>
			{/* Slider */}
			<Slider {...settings} ref={(slider) => setSlider(slider)}>
				{cards.map((card, index) => (
					<Box
						key={index}
						height={'6xl'}
						position="relative"
						backgroundPosition="center"
						backgroundRepeat="no-repeat"
						backgroundSize="cover"
						background={'teal.500'}>
						{/* This is the block you need to change, to customize the caption */}
						<Container size="container.lg" height="600px" position="relative">
							<Stack
								spacing={1}
								w={'full'}
								maxW={'lg'}
								position="absolute"

								bottom="73%"
								transform="translate(0, -50%)">
								<Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
									{card.title}
								</Heading>
								<Text fontSize={{ base: 'md', lg: 'lg' }} color="blackAlpha.500">
									{card.text}
								</Text>
							</Stack>
						</Container>
					</Box>
				))}
			</Slider>
		</Box>
	);
}
