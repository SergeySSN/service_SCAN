import ManPerson from '../../elements/Man.svg'
import styled from "styled-components";
import {Container} from "../container";


const Section = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	max-width: 1440px;
	max-height: 580px;
	margin-bottom: 50px;
	@media(max-width: 420px){
		max-width: 360px;
		max-height: 400px;
	}
	
`

const Wrapper = styled.div`
	max-width: 1320px;
	margin-left: 50px;
	margin-right: 80px;
	height: 100%;
	display: flex;
  justify-content: center;
  align-items: center;
	overflow: hidden;
	img{
		max-height: 575px;
		max-width: 1320px;
		
	}
	@media(max-width: 420px){
		margin: 0;
		max-width: 360px;
		justify-content: flex-start;
    flex-shrink: 0;
    overflow: hidden;
		img{
			height: 350px;
			padding-left: 10px;
		}
	}
`

export const SectionThird = () => {
	return (
		<Section>
			<Container>
				<Wrapper>
					<img src={ManPerson} alt={'IconMan'}/>
				</Wrapper>
			</Container>
		</Section>


	)

}