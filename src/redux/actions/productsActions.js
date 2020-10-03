
const URL_API = 'https://murmuring-plains-72181.herokuapp.com';
// eslint-disable-next-line import/prefer-default-export
export const getProducts = (name) => async (dispatch) => {
  try {
    const response = await fetch(`${URL_API}/scrap/?search=${name}`);

    const data = await response.json();
    dispatch({
      type: 'PRODUCTS_SEARCH',
      payload: data,
    });
  } catch (error) {
    console.error('getProductsSearch -> err', error);
  }
};
