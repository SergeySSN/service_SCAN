import styled from "styled-components";
import ImageDefaultInCard from '../../elements/ImageDefaultInCard.png'

const CardWrapper = styled.div`
	width: 640px;
	height: 695px;
  font-family: var(--family-2);
  border-radius: 18px;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
	@media(max-width: 420px){
		width: 335px;
		height: 710px;
		padding: 5px;
		margin-top: 10px;
	}
	
`

const CardHeader = styled.div`
	width: 100%;
	display: grid;
	grid-template-columns: 15% 85%;
	grid-template-rows: 25px;
	padding-top: 3px;
	padding-bottom: 3px;
	padding-left: 10px;
	margin-top: 10px;
	margin-left: 5px;
	column-gap: 10px;
	@media(max-width: 420px){
		width: 330px;
		padding: 5px;
		margin: 0;
    grid-template-columns: 25% 75%
	}

`

const CardHeaderItem = styled.div`
	text-align: start;
	font-size: 14px;
	color: var(--m2-color);
	opacity: 0.5;
	padding-left: 5px;
	//white-space: break-spaces;
	@media(max-width: 420px){
		font-size: 13px;
	}
`

const CardTitle = styled.div`
	height: 70px;
	width: 90%;
	font-size: 26px;
	color: var(--m2-color);
	margin-top: 10px;
	margin-left: 5px;
	margin-right: 10px;
	text-align: start;
	padding-left: 10px;
	padding-right: 10px;
	overflow: hidden;
	@media(max-width: 420px){
		font-size: 19px;
		width: 90%;
	}
	
`

const CardTagsDiv = styled.div`
	margin-top: 10px;
	padding-top: 5px;
	margin-bottom: 5px;
	margin-left: 5px;
	max-width: 620px;
	width: 100%;
	height: 20px;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 5px;
	grid-template-rows: 20px;
	font-size: 10px;
	@media(max-width: 420px){
		width: 95%;
	}
`
const CardTag = styled.div`
  background-color: #FFB64F;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CardImage = styled.div`
	height: 160px;
	width: 100%;
	margin-top: 10px;
	overflow: hidden;
`

const TextArea = styled.div`
	width: 95%;
	height: 230px;
	font-size: 16px;
	padding: 10px;
  overflow: hidden;
	margin-top: 10px;
	@media(max-width: 420px){
		padding-right: 3px;
	}
`

const CardBottom = styled.div`
  width: 100%;
	height: 50px;
  display: flex;
  padding: 5px;
  margin-top: 20px;
	justify-content: space-between;
	align-items: center;
`
const ButtonDiv = styled.div`
	width: 230px;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	margin-left: 10px;
`

const WordsCountDiv = styled.div`
	width: 100px;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: flex-end;
	font-size: 16px;
	opacity: 0.5;
	margin-right: 10px;
	
`

const Button = styled.button`
  background-color: #7CE3E1;
  width: 225px;
  height: 50px;
  color: var(--m2-color);
  font-family: var(--family-2);
  font-size: 16px;
	text-transform: none; 
	text-decoration: none;
	border: none;
	
`

const DocumentCard = (props) => {

	const cardData = props.item;
	const formatDate =  (date) => {
		return date.slice(0, 10).split('-').reverse().join('.')
		};


	return (
		<>
			<CardWrapper>
				<CardHeader>
					<CardHeaderItem>{formatDate(cardData.ok.issueDate)}</CardHeaderItem>
					<CardHeaderItem>
						<a href={cardData.ok.url} target='_blank' style={{color:'black', opacity: '0.7'}}>
							{cardData.ok.source.name}
						</a>
					</CardHeaderItem>
				</CardHeader>
				<CardTitle>{cardData.ok.title.text}</CardTitle>
				<CardTagsDiv>
					{cardData.ok.attributes.isTechNow
						? <CardTag>{cardData.ok.attributes.isTechNow}</CardTag>
						: <div style={{backgroundColor: '#D9D9D9'}}></div>}
					{cardData.ok.attributes.isAnnouncement
						? <CardTag>{cardData.ok.attributes.isAnnouncement}</CardTag>
						: <div style={{backgroundColor: '#D9D9D9'}}></div>}
					{cardData.ok.attributes.isDigest
						? <CardTag>{cardData.ok.attributes.isDigest}</CardTag> :
						<div style={{backgroundColor: '#D9D9D9'}}></div>}
				</CardTagsDiv>
				<CardImage>
					<img src={ImageDefaultInCard} alt='ItemPhoto'/>
				</CardImage>
				<TextArea>
					{cardData.ok.content.markup}
				</TextArea>
				<CardBottom>
					<ButtonDiv>
						<Button>
							<a href={cardData.ok.url} target='_blank' style={{textDecoration: 'none', color:'black'}}>
								Читать в источнике
							</a>
						</Button>
					</ButtonDiv>
					<WordsCountDiv>{cardData.ok.attributes.wordCount}</WordsCountDiv>
				</CardBottom>
			</CardWrapper>

		</>
	)

}

export default DocumentCard