import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_NAME,
  GET_PRODUCT_DETAIL,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
  CLEAN_PRODUCTS,
} from "../actions/actions";

const initialState = {
  allProducts: [],
  products: [],
  productDetail: "",
  error: null,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
        allProducts: action.payload,
        products: action.payload,
      };

    case GET_PRODUCT_BY_NAME:
      if (!action.payload) {
        return {
          ...state,
          error: "Product doesn't exist",
        };
      } else {
        return {
          ...state,
          products: action.payload,
        };
      }

    case GET_PRODUCT_DETAIL:
      return {
        ...state,
        productDetail: action.payload,
      };

    case CREATE_PRODUCT:
      return {
        ...state,
      };

    case UPDATE_PRODUCT:
      return {
        ...state,
      };

    case CLEAN_PRODUCTS:
      return {
        ...state,
        allProducts: [],
      };

    default:
      return state;
  }
}
