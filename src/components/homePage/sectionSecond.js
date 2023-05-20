import Flickity from 'react-flickity-component';
import styled from "styled-components";
import '../flickity.css';
import Watch from '../../elements/Watch.svg';
import Lupa from '../../elements/Lupa.svg';
import LockerHole from '../../elements/LokerHole.svg'

const Section = styled.section`
	margin-top: 50px;
	max-width: 1440px;
	height: 350px;
	//padding: 20px 40px;
	margin-bottom: 50px;
	@media(max-width: 420px){
		max-width: 420px;
		padding: 10px;
		margin-bottom: 20px;
	}
`
const Wrapper = styled.div`
  display: flex;
	max-width: 1320px;
	margin-left: 50px;
	margin-right: 80px;
	height: 100%;
  justify-content: space-between;
	flex-direction: column;
	@media(max-width: 420px){
    max-width: 370px;
    height: 100%;
    justify-content: flex-start;
    align-items: start;
    padding-left: 10px;
		margin: 0;
	}
`
const Title = styled.div`
	font-family: var(--family-1);
	font-size: 45px;
	text-transform: uppercase;
	text-align: start;
	margin-bottom: 50px;
	@media(max-width: 420px){
		font-size: 28px;
		max-width: 250px;
		margin-bottom: 20px;
	}
`
const CarouselDiv = styled.div`
	margin-top: 70px;
	justify-content: center;
	height: 250px;
	max-width: 1320px;
	width: 100%;
	margin-right: 0;
	@media(max-width: 420px){
		max-width: 340px;
		width: 100%;
		margin-top: 20px;
	}
`
const GalleryCell = styled.div`
	max-width: 350px;
	margin-left: 10px;
	margin-right: 10px;
	margin-bottom: 10px;
	height: 230px;
	background-color: var(--m3-color);
	padding-left: 20px;
	padding-right: 20px;
	border-radius: 15px;
  box-shadow: 5px 5px 10px 0px rgba(0, 0, 0, 0.5);
	@media(max-width: 420px){
		max-width: 300px;
		height: 190px;
		padding: 5px;
	}
`

const DivText = styled.div`
	height: 140px;
	width: 90%;
  font-family: var(--family-2);
  font-size: 18px;
  color: var(--m2-color);
	text-align: start;
	align-items: start;
	padding-left: 10px;
	padding-right: 10px;
	text-wrap: normal;
	@media(max-width: 420px){
		height: 95px;
		padding: 5px;
	}
`

const DivIcon = styled.div`
	display: flex;
  height: 100px;
  width: 100%;
	align-items: center;
	justify-content: start;
	padding-left: 10px;
	@media(max-width: 420px){
		height: 70px;
		padding-left: 5px;
	}
`
const flickityOptions = {
	draggable: true,
	WrapAround: true,
	initialIndex: 1,
	freeScroll: true,
	pageDots: false,
	prevNextButtons: false
}

export const SectionSecond = () => {

	return (

		<Section>
			<Wrapper>
				<Title>Почему именно мы</Title>
				<CarouselDiv>
					<Flickity
						className={'carousel'}
						elementType={'div'}
						options={flickityOptions}
						disableImagesLoaded={false}
						reloadOnUpdate
						static
					>
						<GalleryCell>
							<DivIcon><img src={Watch} alt={Watch}/></DivIcon>
							<DivText>Высокая и оперативная скорость обработки заявки</DivText>
						</GalleryCell>
						<GalleryCell>
							<DivIcon><img src={Lupa} alt={Lupa}/></DivIcon>
							<DivText>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</DivText>
						</GalleryCell>
						<GalleryCell>
							<DivIcon><img src={LockerHole} alt={LockerHole}/></DivIcon>
							<DivText>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</DivText>
						</GalleryCell>

					</Flickity>
				</CarouselDiv>
			</Wrapper>

		</Section>


	)

}