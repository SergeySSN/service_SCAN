import { Container } from "./container";
import styled from "styled-components";
import ScanLogo from "../elements/SCAN_top.svg";
import {ReactComponent as Bar} from "../elements/Bar_in_logfield.svg";
import { navMenu } from '../store/data'
import {Link} from "react-router-dom";
import BurgerMenu from '../elements/BurgerMenu.png'
import LogoMobile from '../elements/Logo_footer.svg'
import CloseMenuIcon from '../elements/CloseMobileMenu.png'
import {useState} from "react";

//

const HeaderDiv = styled.div`
	background-color: var(--m3-color);
	width: 100%;
	max-width: 1440px;
	height: 95px;
	padding: 10px;
	@media(max-width: 420px) {
		max-width: 420px;
		padding: 5px;
		height: ${props => props.visible ? '495px' : '95px'};
		background-color: ${props => props.visible ? `#029491` : '#FFFFFF'};
		color: ${props => props.visible ? '#FFFFFF': `#029491`};
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
		margin: 0;
		padding: 0;
		display: ${props => props.visible  ? 'none' : 'flex'};
		height: 100%;
	}
`

const LogoDiv = styled.div`
	padding-top: 10px;
	padding-left: 10px;
  justify-content: center;
  align-items: center;
	@media(max-width: 420px){
		margin-top: 20px;
		margin-bottom: -40px;
		padding-left: 20px;
	}
`
const WrapNavDiv = styled.div`
	width: 236px;
  @media(max-width: 420px){
    display: none;
  }
`
const NavDiv = styled.div`
	width: 236px;
	display: flex;
  justify-content: space-between;
  align-items: center;
	@media(max-width: 420px) {
    display: ${props => props.visible  ? 'flex' : 'none'};
		flex-direction: column;
		height: 120px;
		margin-top: 50px;
		margin-bottom: 30px;
		
	}
	
`

const WrapLoginDiv = styled.div`
	width: 250px;
	@media(max-width: 420px){
		display: none;
	}
`

const LoginDiv = styled.div`
	display: flex;
	width: 250px;
	@media(max-width: 420px){
		flex-direction: column;
		height: 100px;
		justify-content: space-between;
		align-items: center;
		margin-top: 30px;
		display: ${props => props.visible  ? 'flex' : 'none'};
	}
`
const LogUp = styled.div`
	display: flex;
	width: 160px;
  font-family: var(--family-2);
  font-size: 14px;
	align-content: center;
	align-items: center;
	@media(max-width: 420px){
		width: 300px;
		justify-content: center;
		opacity: 0.6;
	}
`
const BarDiv = styled.div`
	width: 15px;
`
const LogIn =styled.div`
	display: flex;
	width: 75px;
  font-family: var(--family-2);
  font-size: 14px;
	align-items: center;
	@media(max-width: 420px){
		width: 300px;
	}
  
`
const ButtonLog = styled.button`
	width: 65px;
	height: 26px;
	background-color: var(--m1-color);
  color: var(--m3-color);
	border: none;
	text-align: center;
	margin: 0;
	padding: 0;
	text-decoration: none;
	@media(max-width: 420px){
		width: 290px;
		height: 52px;
		background-color: #7CE3E1;
		color: black;
		
		
	}
`
const WrapBurgerDiv = styled.div`
  display: none;
  width: 120px;
  height: 40px;
  @media(max-width: 420px){
    width: 80px;
    height: 75px;
    display: flex;
    justify-content: start;
    align-items: center;
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
	}
`

const MenuMobileDiv = styled.div`
    all:unset;
		display: flex;
    width: 375px;
    max-height: 490px;
    background-color: var(--m1-color);
    color: var(--m3-color);
    display: ${props => props.visible  ? 'flex' : 'none'};
    flex-direction: column;
    align-items: center;
    margin: 0;
    padding: 0;
		@media(min-width: 420px){
			display: none;
		}
`
const HeaderMobileDiv = styled.div`
	
	width: 100%;
	height: 111px;
	display: ${props => props.visible ? 'flex' : 'none'};
	justify-content: space-between;
	align-items: center;
	
`

const LogoMobileDive = styled.div`
	width: 111px;
	height: 111px;
  display: flex;
  justify-content: center;
  align-items: start;
`
const CloseMobileDiv = styled.div`
  width: 111px;
  height: 111px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const HeaderUnlog = () => {

		const [visible, setVisible] = useState(false);
		const getMobileMenu = () => {
			visible ? setVisible(false) : setVisible(true);
		}

	return (
		<>
			<HeaderDiv visible={visible}>
				<Container>
					<Wrapper visible = {visible} >
						<LogoDiv key={'logo'}>
							<img src={ScanLogo} alt='BigPicture' />
						</LogoDiv>
						<WrapNavDiv>
							<NavDiv>
								{navMenu.map((item, key) => (
									item.title === 'Главная'
										? <Link to={'/'}><div key={item.title}>{item.title}</div></Link>
										: <div key={item.title}>{item.title}</div>
								))
								}
							</NavDiv>
						</WrapNavDiv>
						<WrapLoginDiv>
							<LoginDiv>
								<LogUp>Зарегистрироваться</LogUp>
								<BarDiv>
									<Bar/>
								</BarDiv>
								<LogIn>
									<Link to={'/login'} style={{textDecoration: 'none'}}><ButtonLog>Войти</ButtonLog></Link>
								</LogIn>
							</LoginDiv>
						</WrapLoginDiv>
						<WrapBurgerDiv>
							<BurgerDiv onClick={getMobileMenu}>
								<img src={BurgerMenu} alt='BurgerMenu'/>
							</BurgerDiv>
						</WrapBurgerDiv>

					</Wrapper>
					<MenuMobileDiv visible={visible}>
						<HeaderMobileDiv visible={visible}>
							<LogoMobileDive>
								<img src={LogoMobile} alt='Logo' style={{width:110, height:110, marginBottom:-10}}/>
							</LogoMobileDive>
							<CloseMobileDiv onClick={getMobileMenu}>
								<img src={CloseMenuIcon} alt='CloseIcon'/>
							</CloseMobileDiv>
						</HeaderMobileDiv>
						<NavDiv visible={visible} style={{marginLeft:20, marginRight:20}}>
							{navMenu.map((item, key) => (
								item.title === 'Главная'
									? <div key={item.title}><Link to={'/'} style={{textDecoration: 'none'}}>{item.title}</Link></div>
									: <div key={item.title}>{item.title}</div>
							))
							}
						</NavDiv>
						<LoginDiv visible={visible}>
							<LogUp>Зарегистрироваться</LogUp>
							<LogIn >
								<Link to={'/login'} style={{textDecoration: 'none'}}><ButtonLog onClick={getMobileMenu}>Войти</ButtonLog></Link>
							</LogIn>
						</LoginDiv>
					</MenuMobileDiv>
				</Container>
			</HeaderDiv>
		</>

	)
}