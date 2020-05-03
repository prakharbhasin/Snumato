import Cookies from "js-cookie";
import { useEffect } from "react";
import { useStoreState, useStoreActions } from "easy-peasy";

const readCookies = (Auth) => {
  const user = Cookies.get("user");
  if (user) {
    // const token = JSON.parse(user).token;
    Auth();
    // console.log("token is", user.token);
  }
};

const AuthLayer = () => {
  const Auth = useStoreActions((action) => action.Auth);

  useEffect(() => {
    readCookies(Auth);
  }, []);

  return null;
};

export default AuthLayer;
