import { Header } from "../components/header";
import { Container } from "../components/container";
import Image from "../elements/BigDartsResults.svg"
import styled from "styled-components";
import {HistogramTitles} from "../store/data";

import {useContext, useEffect, useState} from "react";
import MyContext from "../components/myContext";
import {Slider} from "../components/resultPage/slider";
import {LoaderSpinner} from "../components/resultPage/loader";
import {instanceAuth} from "../axios/axios";
import SectionDocuments from "../components/resultPage/sectionDocuments";
import {Link} from "react-router-dom";


const Main = styled.div`
	background-color: var(--m3-color);
  max-width: 1440px;
	height: 100%;
	@media(max-width: 420px){
		max-width: 420px;
	}
`
const Wrapper = styled.div`
	max-width: 1320px;
	height: 100%;
	text-align: center;
	margin-left: 10px;
	@media(max-width: 420px){
		max-width: 360px;
		margin: 0;
	}
`
const TitleSection = styled.section`
	width: 1320px;
	height: 380px;
	display: flex;
	margin: 0px;
	justify-content: space-between;
	align-items: start;
	padding: 10px 10px;
	@media(max-width: 420px){
		width: 360px;
		height: 100%;
		flex-direction: column;
	}
`
const MainTitleDiv = styled.div`
	max-width: 520px;
	max-height: 190px;
	@media(max-width: 420px){
		max-width: 360px;
		max-height: 130px;
	}
`
const MainTitle = styled.h1`
	font-family: var(--family-1);
	font-size: 40px;
	border: none;
	margin: 0;
	text-align: start;
	text-transform: uppercase;
	@media(max-width: 420px){
		font-size: 28px;
		max-width: 350px;
	}
`
const MainDescription = styled.p`
	font-family: var(--family-2);
	font-size: 20px;
	text-align: start;
	@media(max-width: 420px){
		font-size: 18px;
	}
`
const MainImageDiv = styled.div`
	width: 555px;
	height: 370px;
	@media(max-width: 420px){
		margin-top: 20px;
		height: 100%;
		max-width: 360px;
		overflow: hidden;
		flex-shrink: 0;
		margin-bottom: 30px;
		img{
			height: 235px;
			padding-left: 10px;
		}
	}
	
`
//секция со слайдером

const SliderSection = styled.section`
	width: 1350px;
	height: 260px;
	margin-top: -50px;
	margin-left: 20px;
`
const SliderTitleDiv = styled.div`
	width: 450px;
	height: 75px;
	margin-bottom: 30px;
  @media(max-width: 420px){
    width: 360px;
  }
`
const SliderTitle = styled.h1`
	font-family: var(--family-1);
	font-size: 36px;
	text-transform: uppercase;
	text-align: start;
	margin-bottom: 5px;
	border: none;
  @media(max-width: 420px){
    width: 300px;
	  font-size: 28px;
  }
`
const SliderDescription = styled.p`
	font-size: 18px;
	font-family: var(--family-2);
	text-align: start;
  @media(max-width: 420px){
    width: 230px;
  }
`
const SliderDiv = styled.div`
	margin-top: 5px;
	justify-content: center;
	height: 160px;
	max-width: 1350px;
	margin-right: 0;
	display: flex;
	@media(max-width: 420px){
		flex-direction: column;
		margin-top: 20px;
		height: 150px;
		width: 350px;
	}
`
const SliderDataTitlesDiv =styled.div`
	width: 120px;
	height: 95%;
	display: grid;
  padding-left: 10px;
  padding-right: 10px;
	background-color: var(--m1-color);
	color: var(--m3-color);
	grid-column: 1;
	grid-row: 3;
	@media(max-width: 420px){
		width: 300px;
		height: 70px;
		grid-template-columns: repeat(3, 100px);
		grid-template-rows: 70px;
	}
`
const SliderDataDiv = styled.div`
	width: 95%;
	height: 95%;
	text-align: center;
`

export const ResultsPage = () => {

	const value = useContext(MyContext);

	const searchFormData = value.searchFormData;
	const checkLoading = value.checkLoading;
	const loading = value.loading

	const [sliderData, setSliderData] = useState(null);
	const [objects, setObjects] = useState([]);
	const [docRequest, setDocRequest] = useState([])

	const convertObjToDocRequest = ((arr) => {
		let arr2 = [];
		arr.map((item) => {
			let iDx = item.encodedId;
			arr2 = [...arr2, iDx]
		});
		return setDocRequest(arr2)
	});
	const countHistogramData = (arr) => {
		let counter = 0;
		let length;
		arr === null ? length = 0 : length = arr.length
		for (let i = 0; i < length; i++) {
			counter = counter + arr[i].total
		}
		return counter
	};
	const createSliderData =  (arr) => {
		const histData = [];
		arr[0].data.map((item) => {
			const rowDate = item.date;
			const date = rowDate.slice(0,10).split('-').reverse().join('.');
			histData.push({period: date, total: item.value})
			return histData
		});
		arr[1].data.map((item, idx) => histData[idx].risks = item.value)
		return histData
	};

	const getHistogramData = (async (data) => {
		return await instanceAuth({
				method: 'POST',
				url: '/objectsearch/histograms',
				data: {
					"issueDateInterval": {
						"startDate": data.startDate,
						"endDate": data.endDate
					},
					"searchContext": {
						"targetSearchEntitiesContext": {
							"targetSearchEntities": [{
								"type": "company",
								"sparkId": null,
								"entityId": null,
								"inn": data.inn,
								"maxFullness": data.maxFullness,
								"inBusinessNews": data.inBusinessNews
							}],
							"onlyMainRole": data.onlyMainRole,
							"tonality": data.tonality,
							"onlyWithRiskFactors": data.onlyWithRiskFactors,
						},
					},
					"attributeFilters": {
						"excludeTechNews": data.isTechNews,
						"excludeAnnouncements": data.isAnnouncement,
						"excludeDigests": data.isDigest
					},
					"similarMode": "duplicates",
					"limit": data.docsLimit,
					"sortType": "sourceInfluence",
					"sortDirectionType": "desc",
					"intervalType": "month",
					"histogramTypes": ["totalDocuments", "riskFactors"]
				},

			})
		.then((response) => {
				const {data: responseData} = response.data;
				setSliderData(createSliderData(responseData));
				})
		.catch((error) => {
					console.log('Error in histogram request = ', error)
				});
		});
	const getObjectsData = (async (data) => {
			 return await instanceAuth({
				method: 'POST',
				url: '/objectsearch',
				data: {
					"issueDateInterval": {
						"startDate": data.startDate,
						"endDate": data.endDate
					},
					"searchContext": {
						"targetSearchEntitiesContext": {
							"targetSearchEntities": [{
								"type": "company",
								"sparkId": null,
								"entityId": null,
								"inn": data.inn,
								"maxFullness": data.maxFullness,
								"inBusinessNews": data.inBusinessNews
							}],
							"onlyMainRole": data.onlyMainRole,
							"tonality": data.tonality,
							"onlyWithRiskFactors": data.onlyWithRiskFactors,
						},
					},
					"attributeFilters": {
						"excludeTechNews": data.isTechNews,
						"excludeAnnouncements": data.isAnnouncement,
						"excludeDigests": data.isDigest
					},
					"similarMode": "duplicates",
					"limit": data.docsLimit,
					"sortType": "sourceInfluence",
					"sortDirectionType": "desc",
					"intervalType": "month",
					"histogramTypes": ["totalDocuments", "riskFactors"]
				},

			})
				.then((response) => {
					const {items: objectData} = response.data;
					setObjects(objectData)
					checkLoading();
					convertObjToDocRequest(objectData);

				})
				.catch((error) => {
					console.log('Error in objects request = ', error)
				});
		});

	useEffect(() => {
		return () => {
			getHistogramData(searchFormData);
			getObjectsData(searchFormData);
		};
	}, []);

	const counter = countHistogramData(sliderData);

	return (
		<>
			<Header />
			<Main>
				<Container>
					<Wrapper>
						<TitleSection>
							<MainTitleDiv>
								<MainTitle>Ищем. Скоро будут результаты</MainTitle>
								<MainDescription>Поиск может занять некоторое время, просим сохранять терпение.</MainDescription>
							</MainTitleDiv>
							<MainImageDiv><img src={Image} alt='MainPicture'></img></MainImageDiv>
						</TitleSection>
						{sliderData && <SliderSection>
							<SliderTitleDiv>
								<SliderTitle>Общая сводка</SliderTitle>
								<SliderDescription>{`Найдено ${counter} вариантов`}</SliderDescription>
							</SliderTitleDiv>
							<SliderDiv>
								<SliderDataTitlesDiv>
									{HistogramTitles.map((item, key) => <div key={key} style={{paddingTop:10}}>{item}</div>)}
								</SliderDataTitlesDiv>
								<SliderDataDiv>
									{loading && <LoaderSpinner /> || <Slider sliderData={sliderData}/>}

								</SliderDataDiv>
							</SliderDiv>
						</SliderSection> || <div>Данные с сервера не получены. <Link to='/search'>Попробуйте еще раз</Link></div> }
						{!loading && <SectionDocuments docsRequest={docRequest}/>}
					</Wrapper>
				</Container>
			</Main>
		</>

	)


}