import { Navigate } from "react-router-dom";

export const PrivateRoutes = ({ children }) => {
    let getTokenFromLocalStorage;
    try {
      getTokenFromLocalStorage = JSON.parse(localStorage.getItem("token"));
    } catch (e) {
      console.log(`Error parsing JSON: ${e}`);
    }
  
    console.log(getTokenFromLocalStorage?.token);
  
    return getTokenFromLocalStorage?.token !== undefined ? (
      children
    ) : (
      <Navigate to="/login" replace={true} />
    );
  };