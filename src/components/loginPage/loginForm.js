import React from "react";
import { useForm } from 'react-hook-form';
import './loginForm.css';
import SmLogos from '../../elements/SM_logos.svg';
import {instance, instanceAuth} from "../../axios/axios";
import {  useNavigate } from "react-router-dom";
//import {defaultValuesLogin} from "../../store/data";
import MyContext from "../myContext";
import {useContext} from "react";


function LoginForm () {

  const value = useContext(MyContext);

  const {
    register,
    handleSubmit,
    formState: {errors, isValid},
    reset,
  } = useForm({mode: 'onBlur'});


  const navigate = useNavigate();

  const onError = (error, e) => {
    console.log(error, e)
  };

  const onLogin = async (data) => {

    await instance({
      method: 'POST',
      url: '/account/login',
      data: {
        login: data.login,
        password: data.password
      },
    })
      .then(async (response) => {
        value.setToken(response.data.accessToken);
        value.setExpire(response.data.expire);
        if (response.data.accessToken) {

          navigate('/');

          await instanceAuth({
            method: 'GET',
            url: '/account/info',
            headers: {
              'Authorization': `Bearer ${response.data.accessToken}`,
            }
          })
            .then((response) => {

              value.setCompanyLimit(response.data.eventFiltersInfo.companyLimit);
              value.setUsedCompanyCount(response.data.eventFiltersInfo.usedCompanyCount);
            })
            .catch(async (error) => {
              console.log('Info account error = ', error.message)
              await instanceAuth({
                method: 'GET',
                url: '/account/info',
                headers: {
                  'Authorization': `Bearer ${response.data.accessToken}`,
                }
              })
                .then((response) => {
                  value.setCompanyLimit(response.data.eventFiltersInfo.companyLimit);
                  value.setUsedCompanyCount(response.data.eventFiltersInfo.usedCompanyCount);
                })
                .catch((error) => {
                  console.log('Info account error = ', error)
                })
            })
        }
      })
      .catch((error) => {
          console.log('Error = ', error.message)
        });

    reset();
        }


        return (
          <div className="form">

            <div className="login-titles_div">
              <div className="login-titles login_in-title"><a href='/src/pages'>Войти</a></div>
              <div className="login-titles login_up-title"><a href='/src/pages'>Зарегистрироваться</a></div>
              <div></div>
            </div>

            <form className='loginForm' onSubmit={handleSubmit(onLogin, onError)}>

              <label>
                Логин или номер телефона :
                <input
                  //defaultValue={defaultValuesLogin.login}
                  //placeholder="login"
                  {...register("login", {required: "Поле обязательно к заполнению!"})} />
              </label>
              <div style={{height: 10}}>
                {errors?.login && <p>{errors?.login?.message || "Error!"}</p>}
              </div>

              <label>
                Пароль :
                <input
                  //defaultValue={defaultValuesLogin.password}
                  //placeholder="password"
                  type="password"
                  {...register("password", {required: "Поле обязательно к заполнению!"})} />
              </label>
              <div style={{height: 10}}>
                {errors?.password && <p>{errors?.password?.message || "Error!"}</p>}
              </div>

              <button type="submit" disabled={!isValid}>ВОЙТИ</button>
            </form>
            <div className='reset-password'>
              <a href='/src/pages'>Восстановить пароль</a>
            </div>
            <div className="sm-icons">
              <img src={SmLogos} alt="SMLogos"/>
            </div>
          </div>
        )
}
export default LoginForm