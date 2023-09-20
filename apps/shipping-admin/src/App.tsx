import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { ShipmentList } from "./shipment/ShipmentList";
import { ShipmentCreate } from "./shipment/ShipmentCreate";
import { ShipmentEdit } from "./shipment/ShipmentEdit";
import { ShipmentShow } from "./shipment/ShipmentShow";
import { CourierList } from "./courier/CourierList";
import { CourierCreate } from "./courier/CourierCreate";
import { CourierEdit } from "./courier/CourierEdit";
import { CourierShow } from "./courier/CourierShow";
import { QuoteList } from "./quote/QuoteList";
import { QuoteCreate } from "./quote/QuoteCreate";
import { QuoteEdit } from "./quote/QuoteEdit";
import { QuoteShow } from "./quote/QuoteShow";
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
        title={"shipping service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Shipment"
          list={ShipmentList}
          edit={ShipmentEdit}
          create={ShipmentCreate}
          show={ShipmentShow}
        />
        <Resource
          name="Courier"
          list={CourierList}
          edit={CourierEdit}
          create={CourierCreate}
          show={CourierShow}
        />
        <Resource
          name="Quote"
          list={QuoteList}
          edit={QuoteEdit}
          create={QuoteCreate}
          show={QuoteShow}
        />
      </Admin>
    </div>
  );
};

export default App;
