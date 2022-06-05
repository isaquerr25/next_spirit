import {FooterModify} from '../../components/utils/footerModify';
import { HeaderMod } from '../../components/utils/headerTitle';
import {Nav} from '../../components/utils/navigate';
import TopBody from '../../components/pageComponents/home/_bodyStepOne';
import SplitWithImage from '../../components/pageComponents/home/_features';
import {BasicStatistics} from '../../components/pageComponents/home/_statistics';
import {GridBlurredBackdrop} from '../../components/pageComponents/home/_testimonials';
import {Contact} from '../../components/pageComponents/home/_contact';

import Layout from '../../components/utils/layout';
import { Box, Flex, Image, Text } from '@chakra-ui/react';

const home = () =>{
	return(
		
		<Layout title={'Home'} navType={'home'} displayFooter={true}>
			<Box w={'100vw'} bg="black">
				<TopBody />
			</Box>

			<Box w={'100vw'}>
				<SplitWithImage/>
			</Box>
			<Flex w={'100vw'} p={'10'} alignItems='flex-start' justifyContent={'center'} gap='50px' >
				{[
					{
						img:'/handIco.png',
						title:'Pioneiros em assessoria ',
						textContext:`Com a Assessoria Da Spirit Gold ajudamos as pessoas nas 
					decisões relacionadas aos seus investimentos, sempre de acordo com seus objetivos e perfil. 
					`
					},
					{
						img:'/profiIco.png',
						title:'Desafiamos padrões',
						textContext:`Nosso time de tecnologia antecipa tendências do mercado, 
						para tornar a experiência de investir mais simples e acessível para todas as pessoas.  
						`
					},
					{
						img:'/processIco.png',
						title:'Tudo em um lugar ',
						textContext:`Serviços para o mercado forex. 
						Tudo em um só lugar, para quem investe não 
						depender mais dos bancos convencionais.  
					`
					},
				].map((item)=>(
					<Flex key={item.title} flexDirection='column' maxW={'350px'}>
						<Image
							h='250px'
							p={'25px'}
							w={'250px'}
							src={item.img}
						/>
						<Text fontSize={'3xl'}>
							{item.title}
						</Text>
						<Text>
							{item.textContext}
						</Text>
					</Flex>

				))}
			</Flex>
			
			<GridBlurredBackdrop/>
			<BasicStatistics/>
			<Contact/>
		</Layout>
			
		
	);
};

export default home;