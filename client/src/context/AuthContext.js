import React, { createContext, useEffect, useState } from "react";
import { requestClient } from "../utils/request-client";

const AuthContext = createContext();

function AuthContextProvider(props) {
  const [loggedIn, setLoggedIn] = useState(undefined);

  async function getLoggedIn() {
    const loggedInRes = await requestClient.get(`/auth/loggedIn`);
    // const loggedInRes = await axios.get(
    //   "https://mern-auth-template-tutorial.herokuapp.com/auth/loggedIn"
    // );
    setLoggedIn(loggedInRes.data);
  }

  useEffect(() => {
    getLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ loggedIn, getLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
