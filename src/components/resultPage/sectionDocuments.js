import styled from "styled-components";
import DocumentArea from "./documentArea";
import {instanceAuth} from "../../axios/axios";
import {useState, useEffect} from "react";



const Section = styled.section`
	max-width: 1440px;
	height: 100%;
	margin-top: 30px;
	padding: 20px 0px;
	@media(max-width: 420px){
		max-width: 420px;
		padding: 5px;
	}
`
const Wrapper = styled.div`
	max-width: 1320px;
	margin-top: 30px;
	height: 100%;
	@media(max-width: 360px){
		max-width: 360px;
	}
	
`
const TitleDiv = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: start;
	align-items: center;
	padding-left: 20px;
	padding-top: 10px;
	font-family: var(--family-1);
	font-size: 30px;
	text-transform: uppercase;
	margin-bottom: 30px;
	@media(max-width: 420px){
		width: 335px;
		height: 70px;
		font-size: 28px;
		text-align: start;
	}
`



const SectionDocuments = (props) => {

	const docRequest = props.docsRequest
	const [documents, setDocuments] = useState([]);

	const getDocuments = (async (ids) => {
		return await instanceAuth({
			method: 'POST',
			url: '/documents',
			data: {
				"ids" : ids
			},
		})
			.then((response) => {
				setDocuments(response.data)

			})
			.catch((error) => {
				console.log('Error in documents request = ', error)
			});
	});
	useEffect(() => {
		return () => {
			getDocuments(docRequest);
		};
	}, []);


	return (

		<Section>
			<Wrapper>
				<TitleDiv>Список документов</TitleDiv>
				<DocumentArea documents={documents} />

			</Wrapper>
		</Section>
	)
}

export default SectionDocuments