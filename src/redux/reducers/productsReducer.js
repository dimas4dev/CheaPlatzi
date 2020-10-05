const INITIAL_STATE = {
  productsSearch: [],
  productsPopular: [],
  loading: false,
  error: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'PRODUCTS_SEARCH':
      return {
        ...state,
        productsSearch: action.payload,
        loading: false,
        error: null,
      };
    case 'PRODUCT_POPULAR':
      return {
        ...state,
        productsPopular: action.payload,
        loading: false,
        error: null,
      };

    default: return state;
  }
};
