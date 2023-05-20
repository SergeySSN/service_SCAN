import { Container} from "./container";
import styled from "styled-components";
import Scan_Logo from "../elements/Logo_footer.svg";
import { Contacts } from '../store/data'

const FooterDiv = styled.div`
	background-color: var(--m1-color);
	width: 100%;
	max-width: 1440px;
	height: 140px;
	padding: 10px;
	@media(max-width: 420px) {
		max-width: 420px;
	}
`
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1rem;
	padding-right: 1rem;
	
`

const LogoDiv = styled.div`
	width: 140px;
	height: 140px;
  justify-content: space-between;
  align-items: center;
`

const ContactsDiv = styled.div`
	width: 200px;
	height: 120px;
	font-family: var(--family-2);
	font-size: 14px;
	color: var(--m3-color);
  justify-content: space-between;
  text-align: end;
	padding-right: 20px;
`

export const Footer = () => {
	return (
		<FooterDiv>
			<Container>
				<Wrapper>
					<LogoDiv>
						<img src={Scan_Logo} alt='LogoImg' />
					</LogoDiv>
					<ContactsDiv>
						{Contacts.address}<br/>
						{Contacts.phone}<br/>
						{Contacts.mail}<br/>
						<br/>
						Copyright, 2022
					</ContactsDiv>

				</Wrapper>
			</Container>
		</FooterDiv>


	)

}