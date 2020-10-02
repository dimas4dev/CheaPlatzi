import React from 'react';
import CardPrice from '../components/CardPrice';
import BackButton from '../components/BackButton';

const Results = () => {
  return (
    <section className='Results'>
      <BackButton />
      <CardPrice
        productImage='https://images-na.ssl-images-amazon.com/images/I/61hbuuGS%2BML._AC_SL1000_.jpg'
        productTitle='PlayStation 4 Hits 1TB con 3 juegos: Days Gone, Detroit: Become
          Human, Tom Clancys Rainbow Six: Siege - Bundle Edition'
        marketImage='https://logos-marcas.com/wp-content/uploads/2020/04/Amazon-Logo.png'
        price='$8000'
        productLink='/'
      />
      <CardPrice
        productImage='https://images-na.ssl-images-amazon.com/images/I/61hbuuGS%2BML._AC_SL1000_.jpg'
        productTitle='PlayStation 4 Hits 1TB con 3 juegos: Days Gone, Detroit: Become
          Human, Tom Clancys Rainbow Six: Siege - Bundle Edition'
        marketImage='https://logos-marcas.com/wp-content/uploads/2020/04/Amazon-Logo.png'
        price='$8000'
        productLink='/'
      />
      <CardPrice
        productImage='https://images-na.ssl-images-amazon.com/images/I/61hbuuGS%2BML._AC_SL1000_.jpg'
        productTitle='PlayStation 4 Hits 1TB con 3 juegos: Days Gone, Detroit: Become
          Human, Tom Clancys Rainbow Six: Siege - Bundle Edition'
        marketImage='https://logos-marcas.com/wp-content/uploads/2020/04/Amazon-Logo.png'
        price='$8000'
        productLink='/'
      />
    </section>
  );
};

export default Results;
