import Customer from "./features/customers/Customer";
import AccountOperations from "./features/accounts/AccountOperations";
import BalanceDisplay from "./features/accounts/BalanceDisplay";
import CreateCustomer from "./features/customers/CreateCustomer";
import { useSelector } from "react-redux";

function App() {
  const customer = useSelector((state) => state.customer.name);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {customer === "" ? (
        <CreateCustomer />
      ) : (
        <>
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
