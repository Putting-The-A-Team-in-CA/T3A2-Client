import { useState } from "react";

// This function creates an internal State linked to the client browser's localStorage to facilitate token functionality
export const useToken = () => {

  // Checks for existing token in localStorage. If one exists, sets that token as initial value for the token state being created
  const [token, setTokenInternal] = useState(() => {
    return localStorage.getItem("token");
  });

  // Allows changing/receiving token - localStorage 'token' value changed to reflect newly received token
  const setToken = (newToken) => {
    localStorage.setItem("token", newToken); // changes local token
    setTokenInternal(newToken); // changes token state
  };

  return [token, setToken];
};
