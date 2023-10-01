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
import { SssList } from "./sss/SssList";
import { SssCreate } from "./sss/SssCreate";
import { SssEdit } from "./sss/SssEdit";
import { SssShow } from "./sss/SssShow";
import { VvvList } from "./vvv/VvvList";
import { VvvCreate } from "./vvv/VvvCreate";
import { VvvEdit } from "./vvv/VvvEdit";
import { VvvShow } from "./vvv/VvvShow";
import { SsssList } from "./ssss/SsssList";
import { SsssCreate } from "./ssss/SsssCreate";
import { SsssEdit } from "./ssss/SsssEdit";
import { SsssShow } from "./ssss/SsssShow";
import { VcxvxcList } from "./vcxvxc/VcxvxcList";
import { VcxvxcCreate } from "./vcxvxc/VcxvxcCreate";
import { VcxvxcEdit } from "./vcxvxc/VcxvxcEdit";
import { VcxvxcShow } from "./vcxvxc/VcxvxcShow";
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
        title={"ddd"}
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
          name="Sss"
          list={SssList}
          edit={SssEdit}
          create={SssCreate}
          show={SssShow}
        />
        <Resource
          name="Vvv"
          list={VvvList}
          edit={VvvEdit}
          create={VvvCreate}
          show={VvvShow}
        />
        <Resource
          name="Ssss"
          list={SsssList}
          edit={SsssEdit}
          create={SsssCreate}
          show={SsssShow}
        />
        <Resource
          name="Vcxvxc"
          list={VcxvxcList}
          edit={VcxvxcEdit}
          create={VcxvxcCreate}
          show={VcxvxcShow}
        />
      </Admin>
    </div>
  );
};

export default App;
