import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PayoutList } from "./payout/PayoutList";
import { PayoutCreate } from "./payout/PayoutCreate";
import { PayoutEdit } from "./payout/PayoutEdit";
import { PayoutShow } from "./payout/PayoutShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { DiscountList } from "./discount/DiscountList";
import { DiscountCreate } from "./discount/DiscountCreate";
import { DiscountEdit } from "./discount/DiscountEdit";
import { DiscountShow } from "./discount/DiscountShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Payout"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Payout"
          list={PayoutList}
          edit={PayoutEdit}
          create={PayoutCreate}
          show={PayoutShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Discount"
          list={DiscountList}
          edit={DiscountEdit}
          create={DiscountCreate}
          show={DiscountShow}
        />
      </Admin>
    </div>
  );
};

export default App;
