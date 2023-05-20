import React from "react";
import { useForm } from 'react-hook-form';
import styled from "styled-components";
import { searchFilters } from "../../store/data";
import {useNavigate} from "react-router-dom";
import {useContext} from "react";
import MyContext from "../myContext";
import {validateInn, checkDate } from "../validate";


const Form = styled.form`
	width: 850px;
	height: 480px;
	display: flex;
	font-family: var(--family-2);
	color: var(--m2-color);
	font-size: 18px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.5);
	@media(max-width: 420px) {
		width: 340px;
		margin-left: 10px;
		height: 560px;
		align-items: center;
		//margin-top: 60px;
	}
`

const InputBlock = styled.div`
	height: 100%;
	width: 430px;
	padding-left: 30px;
	padding-bottom: 0;
	padding-top: 10px;
	@media(max-width: 420px){
		width: 350px;
	}
`
const DatesPeriodBlock = styled.div`
	width: 370px;
	height: 94px;
	@media(max-width: 420px){
		width: 300px;
		height: 150px;
	}
`
const DateValue = styled.div`
	width: 370px;
	display: flex;
	justify-content: space-between;
	margin-top: 10px;
	@media(max-width: 420px){
		flex-direction: column;
		width: 300px;
		height: 100px;
		margin-bottom: 20px;
	}
`
const Input = styled.input`
    display: block;
    box-sizing: border-box;
    width: 242px;
    border-radius: 4px;
    border: 1px solid black;
    padding: 10px 15px;
		margin-top: 10px;
    margin-bottom: 10px;
    font-size: 14px;
	@media(max-width: 420px){
		width: 285px;
	}
`
const InputDate = styled(Input)`
	width: 176px;
	@media(max-width: 420px){
		width: 285px;
		height: 40px;
		margin: 0;
		padding: 3px;
	}
`

const Label = styled.label`
  line-height: 2;
  text-align: left;
  margin-bottom: 10px;
  margin-top: 5px;
  font-size: 14px;
  font-weight: 200;
	color: var(--m2-color);
`

const Warning = styled.div`
	max-height: 12px;
	width: 242px;
	text-align: center;
	color: red;
	font-size: 10px;
`
const Select = styled.select`
  display: block;
  box-sizing: border-box;
  width: 242px;
  border-radius: 4px;
  border: 1px solid black;
  padding: 10px 15px;
  margin-bottom: 15px;
	margin-top: 10px;
  font-size: 14px;
	@media(max-width: 420px){
		width: 285px;
	}
`

const CheckboxBlock = styled.div`
	height: 100%;
	width: 430px;
	padding-right: 30px;
	padding-bottom: 10px;
	padding-top: 10px;
  @media(max-width: 420px){
    display: none;
  }
`
const LabelCheckBox = styled(Label)`
	margin-top: 0;
	margin-bottom: 0;
	display: flex;
`
const Checkbox = styled(Input).attrs(props =>
	({type: 'checkbox'})
)`
	width: 15px;
	margin-right: 10px;
	padding-bottom: 5px;
	padding-top: 5px;
	
`


const ButtonBox = styled.div`
	width: 100%;
	height: 80px;
	text-align: center;
	margin-top: 70px;
`

const ButtonBoxMobile = styled(ButtonBox)`
  margin-top: 10px;
  height: 80px;
	@media(min-width: 420px) {
		display: none;
		
	}
`

const Button = styled.button`
	width: 305px;
	height: 60px;
	background-color: var(--a3-color);
	color: var(--m3-color);
	font-family: var(--family-2);
	font-size: 22px;
	text-align: center;
	text-transform: uppercase;
	margin-top: 20px;
	margin-left: 30px;
	border: none;
	border-radius: 4px;
	:active {
    transition: 0.3s all;
    transform: translateY(3px);
    border: 1px solid transparent;
    opacity: 0.8;
  }
  :hover {
    background: var(--m1-color);
  }
  :disabled {
    opacity: 0.4;
  }
	@media(max-width: 420px){
		margin: 0;
		width: 285px;
	}
`

function SearchForm ()  {

	const value = useContext(MyContext);
	const setSearchFormData = value.setSearchFormData;
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
		reset,
	} = useForm ({mode:'onBlur'});

	const onError = (error, e) => {console.log(error, e)}
	const onSubmit = async (data) => {
		await setSearchFormData(data);
		navigate('/results')
		reset();
	}


	return (
		<Form onSubmit={handleSubmit(onSubmit, onError)}>
			<InputBlock>
				<Label>
					ИНН компании: *
					<Input
						type='number'
						placeholder='10 цифр'
						{...register(
							'inn',
							{
								required: true,
								minLength: 10,
								maxLength: 10,
								validate: {
									validateInn: validateInn,
								}
							},

							)}/>
				</Label>
				<Warning>
					{errors?.inn && <p>{"Введите корректные данные"}</p>}
				</Warning>
				<Label>
					Тональность:
					<Select name="tonality" defaultValue="any" {...register('tonality')}>
						<option value="any">Любая</option>
						<option value="negative">Негативная</option>
						<option value="positive">Позитивная</option>
					</Select>
				</Label>
				<Label>
					Количество документов в выдаче: *
					<Input
						type='number'
						placeholder='От 1 до 1000'
						{...register(
							"docsLimit",
							{
								required: true,
								min: 1,
								max: 1000
							}
							)}/>
				</Label>
				<Warning>
					{errors?.docsLimit && <p>{"Обязательное поле"}</p>}
				</Warning>
				<DatesPeriodBlock>
					<Label>
						Диапазон поиска: *
						<DateValue>
							<InputDate
								type='date'
								placeholder='Дата начала'
								{...register(
									'startDate',
									{required: true,
										minLength:10,
										maxLength:10,
										validate: {
										checkDate
										}
									}
									)
								}/>
							<InputDate
								type='date'
								placeholder='Дата конца'
								{...register(
									'endDate',
									{required: true,
										minLength:10,
										maxLength:10,
										validate: {
										checkDate
										}
									}
									)
								}/>
						</DateValue>
					</Label>
					<Warning>
						{(errors?.startDate || errors?.endDate) && <p>{"Введите корректные данные"}</p>}
					</Warning>
				</DatesPeriodBlock>
				<Label>
					<ButtonBoxMobile>
						<Button type='submit' disabled={!isValid}>Поиск</Button>
						<p style={{fontSize:14, textAlign:'start'}} >* обязательные к заполнению поля</p>
					</ButtonBoxMobile>
				</Label>

			</InputBlock>
			<CheckboxBlock>
				{searchFilters.map((item) => (
						<LabelCheckBox key={item.title}>
							<Checkbox
								{...register(`${item.title}`)}/>
							<p style={{margin:0}}><span>{item.description}</span></p>
						</LabelCheckBox>
					))
				}
				<ButtonBox>
						<Button type='submit' disabled={!isValid}>
								Поиск
						</Button>
						<p style={{fontSize:14}}>* обязательные к заполнению поля</p>
				</ButtonBox>
			</CheckboxBlock>
		</Form>


	)

}

export default SearchForm