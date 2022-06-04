
import Head from 'next/head';
import { FC } from 'react';

interface Prop {
  title:string,
  content?:string,
  name?:string,
  rel?:string
}


export const HeaderMod: React.FC<Prop> = (props) =>{
	return(
	
		<Head>
			<title>{props.title}</title>
			<meta name={props.name != null ? props.name : 'description'} content={props.content != null ? props.content : 'Generated by create next app'}/>
		</Head>

	);
};