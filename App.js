import React, { Fragment } from "react";

import { LogBox } from 'react-native';
import _ from 'lodash';


import NavContainer from "./src/navigation";
import Loader from "./src/component/loader";
import { StoreProvider } from "./src/context/store";
import { StatusBar } from "react-native";

LogBox.ignoreLogs(['Warning:...']); // ignore specific logs
LogBox.ignoreAllLogs(); // ignore all logs
const _console = _.clone(console);

export default () => {
  return (
    <StoreProvider>
      <StatusBar barStyle="light-content" />
      <NavContainer />
      <Loader />
    </StoreProvider>
  );
};
