import React from 'react';
import {withRouter, Link} from 'react-router-dom';
import logo from '../assets/images/logo-bg-dark.png';
import '../assets/styles/pages/Register.scss';
import URL_POST from '../config/url.js';
import BackgroundRegister from '../assets/images/bg-linear.jpg';

const Register = function () {
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    let alias = document.getElementById('nickname').value;
    let name = document.getElementById('username').value;
    let lastname = document.getElementById('userlastname').value;
    let phone = document.getElementById('userphone').value;
    let mail = document.getElementById('usermail').value;
    let pass = document.getElementById('userpass').value;
    let passconf = document.getElementById('passconfirm').value;

    try {
      let options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          username: alias,
          first_name: name,
          last_name: lastname,
          phone_number: phone,
          email: mail,
          password: pass,
          password_confirmation: passconf,
        }),
      };

      // console.log(options.body);

      let res = fetch(URL_POST, options);
      console.log(res);

      document.getElementById(
        'message'
      ).innerHTML = `Inscripción Exitosa, has click <a href="/login">aquí</a> para ingresar`;
    } catch (err) {
      alert(message);
    }
  });
  return (
    <div style={{backgroundImage: `url(${BackgroundRegister})`}}>
      <section className='container'>
        <div className='container__img'>
          <Link to='/'>
            <figure className='container__img-logo'>
              <img src={logo} alt='logo' />
            </figure>
          </Link>
        </div>
        <hr className='separator' />
        <div className='container__form'>
          <div className='form__title'>
            <h4>
              Regístrate para disfrutar los beneficios de
              <strong>VsBuy</strong>
            </h4>
          </div>
          <div className='form__register'>
            <form
              action=''
              className='form__register-form'
              method=''
              required=''
              autoComplete='off'
              name='formRegister'
            >
              <input
                type='text'
                name='nickname'
                id='nickname'
                placeholder='Ingresa tu alias de usuario'
                required=''
              />
              <input
                type='text'
                name='username'
                id='username'
                placeholder='Nombres'
                required=''
              />
              <input
                type='text'
                name='userlastname'
                id='userlastname'
                placeholder='Apellidos'
                required=''
              />
              <input
                type='number'
                name='userphone'
                id='userphone'
                placeholder='Número Celular'
                required=''
              />
              <input
                type='email'
                name='usermail'
                id='usermail'
                placeholder='Correo Electrónico'
                required=''
              />
              <input
                type='password'
                name='userpass'
                id='userpass'
                placeholder='Contraseña ***'
                required=''
              />
              <input
                type='password'
                name='passconfirm'
                id='passconfirm'
                placeholder='Digita Nuevamente la Contraseña ***'
                required=''
              />
              <div className='form-links'>
                <input type='checkbox' required='' className='checkbox' />
                <p className='form-register-text politic'>
                  Acepta nuestra política de tratamiento de información
                </p>
              </div>
              <button type='submit' className='sub-button'>
                Registrar Información
              </button>
            </form>
            <p className='form-register-text'>
              ¿Ya Estás registrado? Ingresa <Link to='/login'>aquí</Link>
            </p>
            <p id='message' className='text__mesagge-submit'></p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
