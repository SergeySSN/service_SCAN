//import { HeaderUnlog } from "../components/header_unlog";
import { Container } from "../components/container";
import styled from "styled-components";
import { SectionFirst } from "../components/homePage/sectionFirst";
import {SectionSecond} from "../components/homePage/sectionSecond";
import {SectionThird} from "../components/homePage/sectionThird";
import {SectionFourth} from "../components/homePage/sectionFourth";
import {Header} from "../components/header";


const Main = styled.div`
	background-color: var(--m3-color);
	max-width: 1440px;
`


export const HomePage = () => {

	return (
		<>
			<Header />
			<Main>

				<Container>
					<SectionFirst />
					<SectionSecond />
					<SectionThird />
					<SectionFourth />
				</Container>

			</Main>

		</>


	)

}