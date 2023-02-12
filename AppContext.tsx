import React, {createContext, useContext} from "react";

const AppContext = createContext<any>(null);

export {AppContext, useContext};
