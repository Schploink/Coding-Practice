import { createContext, useContext } from "react";

const Context = createContext("Default Value");

export const Main = () => {
  const value = "My Context Value";

  return (
    <Context.Provider value={value}>
      <MyComponent />
    </Context.Provider>
  );
}

function MyComponent() {
  const valuee = useContext(Context);

  return <span>{valuee}</span>;
}
