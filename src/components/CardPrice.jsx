import React from 'react';
import '../assets/styles/components/CardPrice.scss';

const CardPrice = ({ item }) => {

  return (

    <article className='card__container'>
      <div className='card__image'>
        <img src={item.picture} alt='Imagen del Producto' />
      </div>
      <div className='card__details'>
        <h1 className='card__details--title'>{item.name}</h1>
        <p className='card__details--description'>'El PlayStation Hits Bundle es el máximo paquete de entretenimiento
          con 3 fascinantes juegos: Days Gone, Detroit: Become Human, Tom
          Clancys Rainbow Six: Siege y un cupón de 3 meses para PS Plus.
          Incluye una consola PlayStation 4 Slim de 1 TB, un control
          inalámbrico DUALSHOCK 4, discos de Blu-ray de Days Gone, Detroit:
          Become Human, Tom Clancys Rainbow Six: Siege, y un cupón para PS
          Plus (suscripción de 3 meses)'</p>
      </div>
      <div className='card__market'>
        <img src='https://logos-marcas.com/wp-content/uploads/2020/04/Amazon-Logo.png' alt='imagen del E-comerce' />
      </div>
      <div className='card__price'>
        <p>{item.price}</p>
      </div>
      <div className='card__button'>
        <a href={item.url} className='card__button--link'>
          Comprar
        </a>
      </div>
    </article>

  );
};

export default CardPrice;
