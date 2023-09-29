const initialStateCustomer = {
  name: "",
  id: "",
  createdAt: "",
};

const customerReducer = (state = initialStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        name: action.payload.name,
        id: action.payload.id,
        createdAt: action.payload.createdAt,
      };

    case "customer/updateName":
      return {
        ...state,
        name: action.payload.name,
      };

    default:
      return state;
  }
};

export const createCustomer = (name, id) => {
  return {
    type: "customer/createCustomer",
    payload: {
      name,
      id,
      createdAt: new Date(),
    },
  };
};

export const UpdateName = (name) => {
  return {
    type: "account/createCustomer",
    payload: name,
  };
};

export default customerReducer;
