import { Container } from "./container";
import styled from "styled-components";
import Scan_Logo from "../elements/SCAN_top.svg";
import { navMenu } from '../store/data'
import UserImg from '../elements/SergeiS.jpeg'
import {Link} from "react-router-dom";
import {LimitCounter} from "./headerCounter";
import BurgerMenu from '../elements/BurgerMenu.png'


const HeaderDiv = styled.div`
	background-color: var(--m3-color);
	width: 100%;
	max-width: 1440px;
	height: 95px;
	padding: 10px;
	@media(max-width: 420px) {
		max-width: 420px;
		padding: 5px;
		margin-bottom: 50px;
	}
`
const Wrapper = styled.div`
	padding-left: 1rem;
	padding-right: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 30px;
	margin-left: 20px;
	@media(max-width: 420px){
		margin-bottom: 50px;
		padding: 0;
	}
`

const LogoDiv = styled.div`
	padding-top: 10px;
	padding-left: 10px;
  justify-content: center;
  align-items: center;
	@media(max-width: 420px){
		padding: 0;
		margin-top: 20px;
		margin-bottom: -40px;
	}
`

const NavDiv = styled.div`
	width: 236px;
	display: flex;
  justify-content: space-between;
  align-items: center;
	@media(max-width: 420px){
		display: none;
	}
`

const LoginDiv = styled.div`
	display: grid;
	width: 120px;
	height: 40px;
  grid-template-columns: 80px 5px 35px;
  grid-template-rows: 20px 20px ;
	@media(max-width: 420px){
		width: 80px;
		height: 75px;
		display: flex;
		justify-content: start;
		align-items: center;
	}
`

const ImgBox = styled.div`
	grid-column: 3;
	grid-row: 1/2;
	@media(max-width: 420px){
		display: none;
	}
`
const NameBox = styled.div`
	grid-column: 1/2;
	grid-row: 1;
	font-size: 14px;
  @media(max-width: 420px){
    display: none;
  }
`

const ExitBox = styled.div`
	grid-column: 1/2;
	grid-row: 2;
	font-size: 10px;
	opacity: 0.4;
  @media(max-width: 420px){
    display: none;
  }
`
const BurgerDiv = styled.div`
	width: 40px;
	height: 40px;
	display: none;
	@media(max-width: 420px){
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 20px;
	}
	
`

export const HeaderLogged = () => {

		const logout = () => {
			localStorage.clear()
		}

	return (
		<>
			<HeaderDiv>
				<Container>
					<Wrapper>
						<LogoDiv>
							<img src={Scan_Logo} alt='LogoImg' />
						</LogoDiv>
						<NavDiv>
							{navMenu.map((item ) => (
								item.title === 'Главная'
									? <Link to={'/'} style={{textDecoration:'none'}}>
										<div key={item.title}>{item.title}</div>
										</Link>
									: <div key={item.title}>{item.title}</div>
							))
							}
						</NavDiv>

						<LimitCounter />



						<LoginDiv>
							<NameBox>Сергей С.</NameBox>
							<ImgBox>
								<img style={{width:32, height:32, borderRadius:25}} src={UserImg} alt='UserImage'></img>
							</ImgBox>
							<ExitBox onClick={logout}>
								<Link to='/login'>Выйти</Link>
							</ExitBox>
							<Link to='/'>
								<BurgerDiv>
									<img src={BurgerMenu} alt='BurgerMenu'/>
								</BurgerDiv>
							</Link>
						</LoginDiv>
					</Wrapper>
				</Container>
			</HeaderDiv>
		</>

	)
}