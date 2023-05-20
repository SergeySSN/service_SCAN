import {Header} from "../components/header";
import { Container } from "../components/container";
import LoginForm from "../components/loginPage/loginForm";
import LockerIcon from "../elements/Locker.svg"
import KeyIcon from "../elements/bigkey.svg"
import styled from "styled-components";

const Main = styled.div`
	background-color: var(--m3-color);
	//margin-top: 50px;
	//max-height: 1500px;
`


const Section = styled.section`
	width: 100%;
	max-width: 1440px;
	height: 650px;
	display: flex;
	justify-content: center;
	margin-top: 50px;
	margin-bottom: 50px;
	@media(max-width: 420px){
		max-width: 420px;
		height: 1150px;
		margin-top: 10px;
	}
`

const Wrapper = styled.div`
	max-width: 1320px;
	max-height: 600px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-left: 30px;
	@media(max-width: 420px){
		max-width: 360px;
		height: 100%;
		flex-direction: column;
		justify-content: flex-start;
		align-items: start;
		margin: 0;
	}
	
`

const InfoBlock = styled.div`
	width: 815px;
	height: 580px;
	@media(max-width: 420px) {
		width: 100%;
		height: 100%;
		margin-top: 10px;
		&:last-child{
			display: none;
		}
	}
`

const InfoTitle = styled.div`
	max-width: 780px;
	max-height: 150px;
	text-align: start;
	font-family: var(--family-1);
	font-size: 40px;
	text-transform: uppercase;
	@media(max-width: 420px) {
		max-width: 350px;
		max-height: 110px;
		font-size: 22px;
		margin-bottom: 20px;
	}
`

const IconDiv = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	padding-left: 80px;
`

const InfoIcon = styled(IconDiv)`
	@media(max-width: 420px){
		display: none;
	}
`
const InfoIconMobile = styled(IconDiv)`
	padding: 0;
	margin-top: 40px;
	@media(min-width: 420px) {
		display: none;
	}
`

const LoginBlock = styled.div`
	width: 520px;
	height: 580px;
	display: flex;
	justify-content: center;
	align-items: center;
	@media(max-width: 420px){
		flex-direction: column;
		margin-top: 20px;
		align-items: start;
		height: 600px;
	}
`
const IconBlock = styled.div`
	display: flex;
	align-items: start;
	justify-content: start;
	height: 100%;
	margin-right: -40px;
	position: relative;
	z-index: 1;
`

const FormBlock = styled.div`
	width: 500px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
	@media(max-width: 420px){
		width: 340px;
		margin-bottom: 20px;
	}
`
const SmBlock = styled.div`
	height: 100px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	@media(max-width: 420px){
		justify-content: center;
	}
`

export const LoginPage = () => {

		return (
		<>
			<Header />
			<Main>
				<Container>
					<Section>

							<Wrapper>
								<InfoBlock>
									<InfoTitle>
										Для оформления подписки на тариф, необходимо авторизоваться.
									</InfoTitle>
									<InfoIcon>
											<img src={KeyIcon} alt='KeyIcon'/>
										</InfoIcon>
								</InfoBlock>

								<LoginBlock>
									<IconBlock>
										<img src={LockerIcon} alt='LockerIcon'/>
									</IconBlock>
									<FormBlock>
										<LoginForm />
										<SmBlock>
										</SmBlock>
									</FormBlock>
								</LoginBlock>
								<InfoIconMobile>
									<img src={KeyIcon} alt='KeyIcon'/>
								</InfoIconMobile>
							</Wrapper>

					</Section>
				</Container>

			</Main>





		</>


	)

}