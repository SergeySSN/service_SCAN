import Flickity from "react-flickity-component";
import styled from "styled-components";
import '../flickity.css'


const SliderCell = styled.div`
	width: 120px;
	height: 151px;
	background-color: var(--m3-color);
	padding-left: 10px;
	padding-right: 10px;
	border: solid 1px black;
	display: grid;
	grid-column: 1;
	grid-row: 3;
	@media(max-width: 420px){
		width: 300px;
		height: 70px;
		grid-template-columns: repeat(3, 100px);
		grid-template-rows: 70px;
    border: solid 1px var(--m1-color);
		align-items: center;
	}
`


const flickityOptions = {
	draggable: true,
	WrapAround: true,
	initialIndex: 0,
	freeScroll: true,
	cellAlign: 'left',
	pageDots: false,
	prevNextButtons: false
}

export const Slider = (props) => {



	return (
		<Flickity
			className={'carousel'}
			elementType={'div'}
			options={flickityOptions}
			disableImagesLoaded={false}
			reloadOnUpdate
			static
		>
			{
				props.sliderData.map((item, idx) => (
					<SliderCell key={idx}>
						<div key={item.period} style={{paddingTop:10}}>{item.period}</div>
						<div key={item.total} style={{paddingTop:10}}>{item.total}</div>
						<div key={item.risks} style={{paddingTop:10}}>{item.risks}</div>
					</SliderCell>
				))
			}
		</Flickity>
	)
}
