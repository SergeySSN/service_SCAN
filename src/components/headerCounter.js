import styled from "styled-components";
import MyContext from "./myContext";
import {useContext} from "react";



const LimitCount = styled.div`
	width: 176px;
	height: 66px;
	display: grid;
	grid-template-columns: 135px 40px;
	grid-template-rows: 33px 33px ;
	background-color: #D9D9D9;
	@media(max-width: 420px){
		width: 132px;
		height: 75px;
    grid-template-columns: 125px;
    grid-template-rows: repeat(4, 16px) ;
	}
`
const UsedTitle = styled.div`
  font-family: var(--family-2);
  font-size: 10px;
  opacity: 0.4;
	text-align: end;
	padding-top: 7px;
	@media(max-width: 420px){
		text-align: start;
		padding-left: 5px;
		font-size: 9px;
	}
`
const LimitTitle = styled.div`
  font-family: var(--family-2);
  font-size: 10px;
  opacity: 0.4;
	text-align: end;
	padding-top: 7px;
  @media(max-width: 420px){
    text-align: start;
    padding-left: 5px;
    font-size: 9px;
  }
`
const UsedCount = styled.div`
  font-family: var(--family-2);
  font-size: 14px;
	text-align: center;
	padding-top: 7px;
  @media(max-width: 420px){
    text-align: start;
    padding-left: 10px;
    font-size: 10px;
  }
`
const Limit = styled.div`
  font-family: var(--family-2);
  font-size: 14px;
	color: var(--m1-color);
	text-align: center;
	padding-top: 7px;
  @media(max-width: 420px){
    text-align: start;
    padding-left: 10px;
    font-size: 10px;
  }

`

export const LimitCounter = (props) => {

	const values = useContext(MyContext);
  const auth = localStorage.getItem('token');
	if (auth) {return(
		<>
			<LimitCount>
				<UsedTitle>Использовано компаний</UsedTitle>
				<UsedCount>{values.usedCompanyCount}</UsedCount>
				<LimitTitle>Лимит по компаниям</LimitTitle>
				<Limit>{values.companyLimit}</Limit>
			</LimitCount>

		</>
	)}

	return null


}