import React, {useState} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {getProducts} from '../redux/actions/productsActions';

import Button from './Button';

import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const {guide, action, styles, inputStyles} = props;

  const [form, setValues] = useState({
    name: '',
  });

  const keyWord = form.name;

  const handleInput = (e) => {
    setValues({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = async () => {
    await props.getProducts(keyWord);
    props.history.push('/results');
  };

  console.log(props.productsSearch);

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        onChange={handleInput}
        name='name'
        className={inputStyles}
        placeholder={guide}
        value={form.name}
        id='searchBar'
      />
      <Button text={action} classnames={styles} handleClick={handleClick} />
    </form>
  );
};

const mapStateToProps = ({productsReducer}) => productsReducer;

const mapDispatchToProps = {
  getProducts,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));
