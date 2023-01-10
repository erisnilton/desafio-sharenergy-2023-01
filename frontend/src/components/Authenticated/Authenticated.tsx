import { Navigate } from "react-router";

export function Authenticated<T extends React.FunctionComponent>(Component: T) {
  return (props: any) => {
    const authenticated = localStorage.getItem("authenticated");
    if (!authenticated) {
      Navigate({ to: "/login" });
    }
    return authenticated ? <Component {...props} /> : <div></div>;
  };
}
