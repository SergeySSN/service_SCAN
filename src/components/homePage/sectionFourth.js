import { tariffs } from "../../store/data";
import styled from "styled-components";
import {useContext} from "react";
import MyContext from "../myContext";
import {Container} from "../container";


const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1440px;
	max-height: 670px;
	margin-bottom: 50px;
	margin-top: 50px;
	padding-top: 30px;
	@media(max-width: 420px){
		max-width: 420px;
		max-height: 1750px;
	}
`

const Wrapper = styled.div`
	max-width: 1320px;
	margin-left: 50px;
	margin-right: 80px;
	height: 100%;
	@media(max-width: 420px){
		max-width: 360px;
		margin: 10px;
	}
`

const TitleDiv = styled.div`
	max-height: 130px;
	font-family: var(--family-1);
	font-size: 45px;
	width: 100%;
	padding-left: 20px;
	text-align: start;
	text-transform: uppercase;
	margin-bottom: 30px;
	@media(max-width: 420px){
		font-size: 28px;
	}
`

const CardsList = styled.div`
	max-width: 1320px;
	//width: 100%;
	max-height: 540px;
	padding-top: 20px;
	display: flex;
	justify-content: space-between;
	align-items: start;
	@media(max-width: 420px){
		max-width: 360px;
		flex-direction: column;
		justify-content: center;
		align-items: start;
		max-height: 1600px;
		
	}
`

const Card = styled.div`
	width: 415px;
	height: 540px;
	margin: 20px;
  border-radius: 18px;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
	overflow: hidden;
	@media(max-width: 420px){
		width: 340px;
		max-height: 512px;
		margin: 10px 5px;
	}
`
const TariffDiv = styled.div`
	width: 100%;
	height: 100px;
	padding: 0;
	margin: 0;
	display: flex;
	background-color: ${ props => props.tariffBackground };
	color: ${ props => props.fontColor };
	@media(max-width: 420px){
		padding-bottom: 15px;
		padding-top: 5px;
	}
  
`

const TariffName = styled.div`
	width: 300px;
	height: 90%;
	padding-top: 3px;
	padding-bottom: 3px;
	font-family: var(--family-2);
	text-align: start;
	padding-left: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	
`

const TariffIcon = styled.div`
	max-width: 120px;
	max-height: 100px;
	display: flex;
	justify-content: flex-end;
	align-items: start;
	padding-bottom: 5px;
	padding-left: 10px;
`

const MarkerDiv = styled.div`
	height: 25px;
	width: 100%;
	margin-top: 5px;
	margin-bottom: 3px;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`
const Marker = styled.div`
	width: 140px;
	height: 20px;
	margin-right: 10px;
	font-size: 14px;
	text-align: center;
	background-color: ${props => props.current ? '#5970FF' : 'white'};
	color: var(--m3-color);
	border-radius: 10px;
`

const TariffPrice = styled.div`
	width: 100%;
	height: 60px;
	text-align: start;
	padding-left: 15px;
	margin: 0;
	font-size: 30px;
	display: flex;
	@media(max-width: 420px){
		height: 50px;
	}
`
const TariffCredit = styled.div`
	width: 100%;
	height: 50px;
	font-size: 18px;
	text-align: start;
	padding-left: 15px;
	@media(max-width: 420px){
		height: 30px;
	}
`

const TariffDescription = styled.div`
	width: 100%;
	height: 150px;
  text-align: start;
	padding-top: 15px;
  padding-left: 5px;
  margin-top: 15px;
	@media(max-width: 420px){
		padding-top: 15px;
		height: 130px;
		margin-bottom: 20px;
	}
`
const TariffButtonDiv = styled.div`
	display: flex;
	width: 100%;
	height: 100px;
	margin: 0;
	justify-content: center;
	align-items: center;
	@media(max-width: 420px){
		height: 60px;
	}
`
const Button = styled.button`
  width: 355px;
	height: 60px;
  background-color: ${props => props.current ? '#D2D2D2' : '#5970FF' };
	font-size: 20px;
	@media(max-width: 420px) {
		width: 285px;
	}
`

	export const SectionFourth = () => {
		const value = useContext(MyContext);
		const token = value.token;
	return (
		<Section>
			<Container>
				<Wrapper>
					<TitleDiv>Наши тарифы</TitleDiv>
					<CardsList>
						{tariffs.map ((item) => (
							<Card key={item.name}>
								<TariffDiv current={item.marker}
								           tariffBackground={item.background}
								           fontColor={item.color}>
									<TariffName>
										<h3 style={{fontSize:30, margin:3}}>{item.name}</h3>
										<p style={{fontSize:18, margin:-5}}>{item.description}</p>
									</TariffName>
									<TariffIcon><img height='92' src={item.iconSrc}></img></TariffIcon>
								</TariffDiv>
								<MarkerDiv>
									{token && <Marker current={item.marker}>{item.marker}</Marker>}
								</MarkerDiv>
								<TariffPrice>
									<p style={{margin:3, height:30}}>{item.price}</p>
									<div style={{width:20, height:30}}/>
									<p style={{margin:3, height:30, opacity: 0.6,fontSize: 25, textDecoration: 'line-through'}}>{item.oldprice}</p>
								</TariffPrice>
								<TariffCredit>{item.credit}</TariffCredit>
								<TariffDescription>
									<p style={{fontSize:22, margin:3}}>В тариф входит:</p>
									<ul style={{fontSize: 18}}>
										<li style={{margin:3}}>{item.features[0]}</li>
										<li style={{margin:3}}>{item.features[1]}</li>
										<li style={{margin:3}}>{item.features[2]}</li>
									</ul>
								</TariffDescription>
								<TariffButtonDiv>
									{token && <Button current={item.marker}>{item.marker ? item.currentaction : item.action}</Button>
										|| <Button current={false}>{item.action}</Button>}
								</TariffButtonDiv>
							</Card>)
						)
						}
					</CardsList>
				</Wrapper>
			</Container>
		</Section>
	)
}