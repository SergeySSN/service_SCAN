import styled from "styled-components";
import DocumentCard from "./documentCard";
import {useState} from "react";

const DocumentsArea = styled.div`
	width: 100%;
	padding: 15px;
	display: grid;
	grid-template-columns: 50% 50%;
	grid-auto-rows: 700px;
	column-gap: 38px;
	row-gap: 20px;
	@media(max-width: 420px){
		grid-template-columns: 335px;
    grid-auto-rows: 700px;
		row-gap: 40px;
	}
`
const Card = styled.div`
	:nth-child(n + ${props=>props.items + 1}) {display: none};
`

const ButtonDiv = styled.div`
	width: 100%;
	height: 80px;
	justify-content: center;
	align-items: center;
	display: ${props => props.invisible ? 'none' : 'flex'};
	@media(max-width: 420px){
	margin-top: 20px;
		margin-left: 13px;
}
`

const Button = styled.button`
  background-color: var(--a3-color);
  width: 335px;
  height: 60px;
  color: var(--m3-color);
  font-family: var(--family-2);
  font-size: 22px;
	text-transform: none;
	border: none;
	@media(max-width: 420px){
		width: 335px;
		height: 60px;
		font-size: 20px;
	}
`

const DocumentArea = (props) => {

	const length = props.documents.length;
	let [items, setItems] = useState(10);
	const [invisible, setInvisible] = useState(false)

	const showMore = () => {
		setItems(items + 10);
		if(items + 10 >= length) {setInvisible(true)};
	}

	return (
	<>
		<DocumentsArea>
			{props.documents.map((item, idx) =>
				(<Card items={items} key={item}><DocumentCard
					item={item}
					key={idx}
				/></Card>)
			)}
		</DocumentsArea>
		<ButtonDiv invisible={invisible}>
			<Button onClick={showMore}>Показать больше</Button>
		</ButtonDiv>
	</>
	)
}
export default DocumentArea