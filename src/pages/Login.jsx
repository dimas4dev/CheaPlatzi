import React from 'react';
import '../assets/styles/pages/Login.scss';
import CardFunctions from '../components/CardFunctions';

import Logo from '../assets/images/logo.svg';
import backgroundLogin from '../assets/images/background-login.png';

const Login = () => {
  return (
    <section className='Login'>
      {/* <CardFunctions
        text=''
        background={backgroundLogin}
        className='LoginBackground'
      /> */}
      {/* Para Harold ! */}
      <article className='Container'>
        <figure className='Container__Logo'>
          <img src={Logo} alt='Logo' />
        </figure>
        <form className='Form' action=''>
          <h2>Login into your acount</h2>
          <input
            className='Form__Input'
            type='text'
            placeholder='Direccion de Correo Electronico'
          />
          <input
            className='Form__Input'
            type='password'
            placeholder='Contraseña'
          />
          <span className='Form__Links'>
            <input type='checkbox' />
            Recuerdame
            <a href='#'>¿Se te ha olvidado la contraseña?</a>
          </span>
          <button>Iniciar Sesion</button>
        </form>
      </article>
    </section>
  );
};
export default Login;
