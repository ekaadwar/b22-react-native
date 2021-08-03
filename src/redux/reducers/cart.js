const cartState = {
  data: [
    {
      id: 1,
      product_name: "Sosis Bakar",
      price: 10000,
      variant: "XL",
      additional_price: 2000,
    },
    {
      id: 2,
      product_name: "Kopi Hitam",
      price: 10000,
      variant: "XL",
      additional_price: 0,
    },
    {
      id: 3,
      product_name: "Kopi Tanpa Gula",
      price: 12000,
      variant: "R",
      additional_price: 0,
    },
    {
      id: 4,
      product_name: "Kopi Susu",
      price: 12000,
      variant: "R",
      additional_price: 0,
    },
    {
      id: 5,
      product_name: "Kopicino",
      price: 12000,
      variant: "R",
      additional_price: 2000,
    },
  ],
};

const cart = (state = cartState, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM": {
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    }
    case "CART_DELETE_ITEM": {
      const data = [...state.data];
      data.splice(action.payload, 1);
      // console.log(removed);
      // delete data[action.payload];
      return {
        ...state,
        data,
      };
    }
    default: {
      return state;
    }
  }
};

export default cart;
