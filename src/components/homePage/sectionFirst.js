import { Content } from "../../store/data";
import MainGroup from "../../elements/MainGroup.svg";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {useContext} from "react";
import MyContext from "../myContext";
import {Container} from "../container";


const Section = styled.section`
	max-width: 1440px;
	height: 620px;
	margin: 0px;
	@media(max-width: 420px){
		max-width: 420px;
		height: 100%;
		flex-direction: column;
		justify-content: flex-start;
		align-items: start;
		padding-left: 10px;
	}
`

const Wrapper = styled.div`
  display: flex;
	max-width: 1320px;
	margin-left: 50px;
	margin-right: 80px;
	height: 100%;
  justify-content: space-between;
	@media(max-width: 420px){
    max-width: 370px;
    height: 100%;
    flex-direction: column;
    justify-content: flex-start;
    align-items: start;
    padding-left: 10px;
		margin: 0;
	}
`


const TextDiv = styled.div`
	max-width: 620px;
	margin: 0;
	text-align: start;
	max-height: 720px;
	padding-top: 20px;
	@media(max-width: 420px) {
		max-width: 360px;
		max-height: 360px;
		margin-bottom: 20px;
	}
	
`
const MainText = styled.div`
	font-family: var(--family-1);
	font-size: 60px;
	text-align: left;
  max-height: 500px;
	max-width: 740px;
	text-transform: uppercase;
	@media(max-width: 420px){
		font-size: 28px;
		max-width: 350px;
		max-height: 140px;
		margin-bottom: 20px;
	}
	
	
`
const DescriptionArea = styled.div`
	display: flex;
	font-family: var(--family-2);
	font-size: 20px;
	text-align: left;
	max-height: 150px;
	max-width: 535px;
	padding-top: 10px;
	padding-bottom: 10px;
	align-items: start;
	@media(max-height: 420px){
		font-size: 18px;
		height: 70px;
		max-width: 330px;
	}
`

const ButtonArea = styled.div`
	max-height: 120px;
	display: flex;
	justify-content: left;
	align-items: start;
`

const PictureDiv = styled.div`
	display: flex;
	max-width: 630px;
	max-height: 620px;
	justify-content: center;
	align-items: start;
	@media(max-width: 420px){
		width: 350px;
		max-height: 342px;
    img{
	    width: 347px;
	    height: 340px;
    }
	}

	
`
const RequestBtn = styled.button`
	background-color: var(--a3-color);
	width: 335px;
	height: 60px;
	color: var(--m3-color);
	font-family: var(--family-2);
	font-size: 22px;
	
`


export const SectionFirst = () => {

	const value = useContext(MyContext)
	const token = value.token


	return (
		<>
		<Section>
			<Container>
				<Wrapper>
					<TextDiv>
						<MainText>{Content.mainHeader}</MainText>
						<DescriptionArea>{Content.mainDescription}</DescriptionArea>
						<ButtonArea>
							<Link to={'/search'} style={{textDecoration:'none'}}>
								{ token ? <RequestBtn>Запросить данные</RequestBtn> : null}
							</Link>
						</ButtonArea>
					</TextDiv>
					<PictureDiv>
						<img src={MainGroup} alt='MainImg' />
					</PictureDiv>
				</Wrapper>
			</Container>
		</Section>
		</>

	)
}