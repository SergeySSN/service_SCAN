import {Header} from "../components/header";
import styled from "styled-components";
import MainImage from '../elements/SpaceShuttle.svg';
import DocumentImage from '../elements/Document.svg';
import FoldersImage from '../elements/Folders.svg';
import  SearchForm from "../components/searchPage/searchForm";

const Section = styled.div`
	width: 100%;
	height: 750px;
	display: flex;
	justify-content: start;
	margin-top: 50px;
	margin-bottom: 50px;
	@media(max-width: 420px){
		max-width: 420px;
		height: 1350px;
	}
`

const Wrapper = styled.div`
	width: 100%;
	max-width: 1320px;
	max-height: 800px;
	padding-left: 50px;
	@media(max-width: 420px){
		max-width: 360px;
		max-height: 1300px;
		padding: 5px;
	}
	
`
const HeadBlock = styled.div`
	width: 100%;
	height: 220px;
	display: flex;
	justify-content: space-between;
	align-items: start;
	@media(max-width: 420px) {
		height: 215px;
		margin-bottom: 30px;
		
	}
`

const TitleBlock = styled.div`
	max-height: 215px;
	width: 800px;
	@media(max-width: 420px){
		max-height: 200px;
		width: 320px;
	}
`
const TitleArea = styled.div`
  font-family: var(--family-1);
  font-size: 40px;
	text-align: start;
	padding: 10px;
	@media(max-width: 420px){
		font-size: 28px;
	}
`
const DescriptionArea = styled.div`
	font-family: var(--family-2);
	font-size: 20px;
	text-align: start;
	padding: 10px;
	@media(max-width: 420px){
		font-size: 18px;
		padding: 5px;
	}
`

const ImagesBlock = styled.div`
	width: 500px;
	height: 215px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`
const ImageDocument = styled.div`
	width: 120px;
	height: 100%;
	text-align: center;
	position: relative;
	top: 50px
	
`
const ImageFolders = styled.div`
	width: 260px;
	height: 100px;
	text-align: start;
	@media(max-width: 420px){
		display: none;
	}
`

const MainBlock = styled.div`
	width: 100%;
	display: flex;
	max-height: 550px;
	margin-top: 10px;
	justify-content: space-between;
	align-items: start;
	@media(max-width: 420px){
		flex-direction: column;
		height: 900px;
		margin-top: 40px;
	}
`

const FormBlock = styled.div`
	height: 560px;
	width: 880px;
	@media(max-width: 420px){
		width: 350px;
		margin-top: 20px;
		margin-bottom: 10px;
		height: 510px;
		display: flex;
		justify-content: center;
    align-items: center;
	}
`

const ImagesMainBlock = styled.div`
	height: 100%;
	max-width: 440px;
	margin-left: 5px;
	display: flex;
	justify-content: center;
	@media(max-width: 420px){
		max-width: 360px;
		margin-left: 0;
		margin-top: 30px;
		flex-shrink: 0;
		overflow: hidden;
		justify-content: flex-start;
	}
`


export const SearchPage = () => {
	return (
		<>
			<Header />
			<Section>
				<Wrapper>
					<HeadBlock>
						<TitleBlock>
							<TitleArea>Найдите необходимые данные в пару кликов.</TitleArea>
							<DescriptionArea>Задайте параметры поиска.<br/>
								Чем больше заполните, тем точнее поиск</DescriptionArea>
						</TitleBlock>
						<ImagesBlock>
							<ImageDocument><img src={DocumentImage} alt='DocumentImage'/></ImageDocument>
							<ImageFolders><img src={FoldersImage} alt='FoldersImage'/></ImageFolders>
						</ImagesBlock>
					</HeadBlock>
					<MainBlock>
						<FormBlock>
							<SearchForm />
						</FormBlock>
						<ImagesMainBlock>
							<img src={MainImage} alt='MainImage'/>
						</ImagesMainBlock>
					</MainBlock>
				</Wrapper>
			</Section>
		</>
	)
}


