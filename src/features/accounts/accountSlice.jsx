const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const accountReducer = (state = initialStateAccount, action) => {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "account/withdraw":
      return {
        ...state,
        balance: state.balance - action.payload,
      };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: state.loan + action.payload.amount,
        loanPurpose: state.loan + action.payload.purpose,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        balance: state.balance - action.payload,
      };
    default:
      return state;
  }
};

export const deposit = (amount) => {
  return { type: "account/deposit", payload: amount };
};

export const withdraw = (amount) => {
  return { type: "account/withdraw", payload: amount };
};

export const requestLoan = (amount, purpose) => {
  return { type: "account/requestLoan", payload: { amount, purpose } };
};

export const payLoan = (amount) => {
  return { type: "account/payLoan", payload: amount };
};

export default accountReducer;
